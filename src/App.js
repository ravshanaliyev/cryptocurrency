import Layout from "antd/es/layout/layout";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import Exchanges from "./components/Exchanges";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
