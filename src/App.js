// import React, {
//     createContext, useState
// } from "react";
// import { ReactDOM } from "react";
// import Navbar from "./Navbar";
// import Home from "./home";
// import Products from "./products";
// import Product from "./product";
// import { Routes, Route } from "react-router-dom";
// import Footer from "./footer";

// const AppContext = createContext()

// export default function App() {
//     const [pId, setPId] = useState()
//     return (
//         <div>
//             < AppContext.Provider
//                 value={{
//                     pId,
//                     setPId
//                 }}>
//                 <Routes>
//                     <Route path="/" element={
//                         <>
//                             <Navbar />
//                             <Home />
//                             <Footer/>
//                         </>
//                     } />
//                     <Route path="Home" element={
//                         <>
//                             <Navbar />
//                             <Home />
//                             <Footer/>
//                         </>
//                     } />
//                     <Route path="/" element={<Navbar />} />
//                     <Route path="/" element={<Home />} />
//                     <Route path="/Product" element={<Product />} />
//                     <Route path="/products" element={<Products />} />
//                 </Routes>
//             </AppContext.Provider>
//         </div>
//     )
// }

// export { AppContext };


import React from "react";
import { ReactDOM } from "react";
import Pratic from "./reactpratice";

export default function App() {
    return (
        <>
            <Pratic />
        </>
    )
}