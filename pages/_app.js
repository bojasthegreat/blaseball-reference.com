import apiFetcher from "lib/api-fetcher";
import theme from "theme";
import { SWRConfig } from "swr";

import "@reach/skip-nav/styles.css";

import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const DEPLOYMENT_ENV = process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;

  return (
    <>
      <Head>
        {DEPLOYMENT_ENV !== "production" ? (
          <meta name="robots" content="noindex" />
        ) : null}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
              heap.load(${process.env.NEXT_PUBLIC_HEAP_IO_KEY});`,
          }}
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://blaseball-reference.com/default-share-image.jpg"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <SWRConfig
          value={{
            fetcher: apiFetcher,
            refreshInterval: 900000,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
