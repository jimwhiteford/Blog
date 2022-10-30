import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-200">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
