import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FlagProvider, IFlagProvider } from "@unleash/proxy-client-react";

const config: IFlagProvider["config"] = {
  url: process.env.UNLEASH_URL ?? "",
  clientKey: process.env.CLIENT_KEY ?? "",
  appName: "default",
  refreshInterval: 300,
  environment: "development",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FlagProvider config={config}>
      <Component {...pageProps} />
    </FlagProvider>
  );
}
