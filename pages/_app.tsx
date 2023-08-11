import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppPropsWithLayout } from "@/util/types";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
