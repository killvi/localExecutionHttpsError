// Google Home Sdk
/// <reference types="@google/local-home-sdk" />
import App = smarthome.App;
import LocalExecutionApp from "./app";

const localHomeSdk = new App("1.0.0");
const localApp = new LocalExecutionApp();
localHomeSdk
    .onIdentify(localApp.identifyHandler)
    .onReachableDevices(localApp.reachableDevicesHandler)
    .onExecute(localApp.executeHandler)
    .listen()
    .then(() => console.log("Ready"))
    .catch((e: Error) => console.error(e));
