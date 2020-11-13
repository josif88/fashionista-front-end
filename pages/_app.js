import "antd/dist/antd.css";
import "../styles/globals.scss";
import "../styles/override.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import Auth from "../components/auth";
function MyApp({ Component, pageProps }) {
  return <Auth>
    <Component {...pageProps} />;
    </Auth>
}

export default MyApp;
