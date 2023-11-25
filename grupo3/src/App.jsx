import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
             <Route index element={<Home/>}/> 
            <Route path='productos' element={<Products />}/>
            <Route path='contacto' element={<Contact/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
