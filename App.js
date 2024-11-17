 import React from "react";
 import ReactDOM from "react-dom/client";
//  creating like this structure
//  <div id="parent">
//     <div id="child">
//         <h1>heading</h1>
        //   <h2> heading 2 </h2>
//     </div>
{/* <div id="child2">
//         <h1>heading</h1>
        //   <h2> heading 2 </h2>
//     </div> */}
//  </div>
 
const parent = React.createElement("div",{id:"parent"},
    [
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Namaste react"),React.createElement("h2",{},"Sibling heading")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Nested heading 2"),React.createElement("h2",{},"Sibling heading 2")]
    ),
]
);

 
 
 const heading = React.createElement("h1",{id:"heading"},"Hello World in React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// root.render(heading)