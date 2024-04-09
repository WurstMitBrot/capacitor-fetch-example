import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "capacitor-fetch-example",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "http://192.168.2.57:8101",
    cleartext: true,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
