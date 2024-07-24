import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "capacitor-fetch-example",
  webDir: "dist",
  server: {
    androidScheme: "http",
    cleartext: true,
    // url: "http://192.168.2.34:8101",
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
