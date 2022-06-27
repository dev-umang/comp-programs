import "../styles/globals.scss";
import type { AppProps } from "next/app";
import DesktopLayout from "../layout/desktop.layout";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <DesktopLayout>
        <Component {...pageProps} />
      </DesktopLayout>
    </RecoilRoot>
  );
}

export default MyApp;
