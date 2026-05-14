import {BrowserRouter as Router,Routes,Route , Link} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { createContext } from "react";

export const productApi = createContext();

function App() {
  const products = [
    {
      id: 1,
      productName: "Realme P4 Power 5G",
      price: 25999,
      des: `8 Gb RAM | 128 ROM
                17.27 cm (6.8 inch) Full HD+ AMOLED Display
                50MP + 8MP | Yes
                10001 mAh Battery
                Dimensity 7400 Ultra Processor`,
      url: "/src/assets/image.png",
      quantity: 1,
    },
    {
      id: 2,
      productName: "Iqoo Z10x 5G",
      price: 25999,
      des: `8 Gb RAM | 128 ROM
                17.27 cm (6.8 inch) Full HD+ AMOLED Display
                50MP + 8MP | Yes
                10001 mAh Battery
                Dimensity 7400 Ultra Processor`,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/b/u/-original-imahgzpkwbjdkhm3.jpeg?q=70",
      quantity: 1,
    },
    {
      id: 3,
      productName: "Redmi Note 15",
      price: 15999,
      des: `8 Gb RAM | 128 ROM
                17.27 cm (6.8 inch) Full HD+ AMOLED Display
                50MP + 8MP | Yes
                10001 mAh Battery
                Dimensity 7400 Ultra Processor`,
      url: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/0/s/note-15-5g-rma-redmi-original-imahjhpubxtbg3ta.jpeg?q=70",
      quantity: 1,
    },
  ];

  return (
    <>
      <productApi.Provider value={{ products }}>
       <Router >
        <ol>
          <li>
             <Header />
            <Content />
          </li>
        </ol>
         <Routes >
            <Route path="/" element = {<Header />} />
            <Route path="/Content" element = {<Content />} />
         </Routes>
       </Router>
      </productApi.Provider>
    </>
  );
}

export default App;
