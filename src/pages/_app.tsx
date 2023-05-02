import { type AppType } from "next/app";

import { api } from "t3notes/utils/api";

import "t3notes/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
