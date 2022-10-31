import Header from "../components/Header";
import { Header2 } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-200">
      <Header2 />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
