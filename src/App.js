import Header from "./components/Header";
import Media from "./components/Media";
import Historia from "./components/Historia";
import Info from "./components/Info";
import Zrodlo from "./components/Zrodlo";
import ScrollToTop from "./components/ScrollToTop";
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Media />
      <Historia />
      <Info />
      <Zrodlo />
    </div>
  );
}

export default App;
