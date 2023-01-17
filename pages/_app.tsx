import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import PageLayout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider enableSystem={true} attribute="class"> */}
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      {/* </ThemeProvider> */}
      <Analytics />
    </>
  );
}
