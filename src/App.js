import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";









const resObj = {
    "data":{
        "name":"SP Biryani",
        "cuisine":"Biryani, North Indian, Asian",
        "rating":"4.0",
        "time":"38 ",
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/14/2a8317be-9d3d-47fd-8c07-04fea898da31_0ebf25ce-452e-4eb1-9f87-f2f01e70512f.jpg"
    }
}





const AppLayout = ()=>{
   return (
     <div className="App">
        <Header></Header>
        <Body/>
     </div>
   )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


