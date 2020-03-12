/// <reference types="@google/local-home-sdk" />
import IntentFlow = smarthome.IntentFlow;
import Intents = smarthome.Intents;

import { IDiscoveryData, ICustomData } from "./types";

import fetch from 'node-fetch';

// Only to handle virtual device
const cbor = require("cbor");

export default class LocalExecutionApp {
  constructor() {}

  // identifyHandlers decode UDP scan data and structured device information.
  // Here i handle a hub device. It triggers reachable devices request, every minutes.

  async identifyHandler(identifyRequest: IntentFlow.IdentifyRequest): Promise<IntentFlow.IdentifyResponse> {
    console.log("IDENTIFY request", identifyRequest);
    const device = identifyRequest.inputs[0].payload.device;
    if (device.udpScanData === undefined) {
       throw Error(`identify request is missing discovery response: ${identifyRequest}`);
    }

    // Only to handle virtual device
    const udpScanData = Buffer.from(device.udpScanData.data, "hex");
    const discoveryData: IDiscoveryData = await cbor.decodeFirst(udpScanData);

    // Identify response for hub
    const identifyResponse: IntentFlow.IdentifyResponse = {
      intent: Intents.IDENTIFY,
      requestId: identifyRequest.requestId,
      payload: {
        device: {
            id: discoveryData.id,
            isProxy: true,
            isLocalOnly: true,
        },
      },
    };
    return identifyResponse;
  }

  async reachableDevicesHandler(reachableDevicesRequest: IntentFlow.ReachableDevicesRequest): Promise<IntentFlow.ReachableDevicesResponse> {
    console.log("REACHABLE_DEVICES request:", reachableDevicesRequest);

    ///////////////////////////////// Only added to test https request ////////////////////////////////////

    const url = "https://www.google.com";
    const option = {
      method: "get",
      headers: {
           Accept: "text/plain",
          'Content-Type': "text/plain",
          //"Access-Control-Allow-Origin": "*",
           //"Access-Control-Allow-Headers": "*",
      },
    };

    fetch(url, option)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////

    const proxyDeviceId = reachableDevicesRequest.inputs[0].payload.device.id;
    const devices = reachableDevicesRequest.devices.flatMap((d) => {
      const customData =  d.customData as ICustomData;
      if (customData.proxy === proxyDeviceId) {
        return [{ verificationId: `${proxyDeviceId}-${customData.channel}`}];
      }
      return [];
    });

    const reachableDevicesResponse = {
      intent: Intents.REACHABLE_DEVICES,
      requestId: reachableDevicesRequest.requestId,
      payload: {
        devices,
      },
    };
    return Promise.resolve(reachableDevicesResponse);
  }

  // executeHandler send openpixelcontrol messages corresponding to light device commands.
  executeHandler(request: IntentFlow.ExecuteRequest): any {
    console.log("EXECUTE request", request);
  }

}
