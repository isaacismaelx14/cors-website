import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { formatDistance, subDays } from "date-fns";

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
