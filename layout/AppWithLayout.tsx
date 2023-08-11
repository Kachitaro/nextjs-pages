import { AppPropsWithLayout } from "@/util/types";
import { Container } from "react-bootstrap";

export default function AppWithLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Container>{getLayout(<Component {...pageProps} />)}</Container>;
}
