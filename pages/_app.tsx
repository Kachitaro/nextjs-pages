import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import AppWithLayout from "@/layout/AppWithLayout";


function App(props: any) {
  return (
    <SSRProvider>
      <AppWithLayout {...props} />
    </SSRProvider>
  );
}

export default App;