import "antd/dist/antd.css";
import "../styles/globals.scss";
import "../styles/override.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
