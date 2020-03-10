export interface IDiscoveryData {
  id: string;
  model: string;
  hw_rev: string;
  fw_rev: string;
  channels: Array<number>;
}

export interface ICustomData {
  channel: number;
  leds: number;
  port: number;
  proxy: string;
}
