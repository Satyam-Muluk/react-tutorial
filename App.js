import React from "react";
import ReactDOM from "react-dom/client";

// JSX react
// it is not HTML inside jsx
// jsx code is transpilled before it reaches the js engine=> this is done by parcel which has a package babel which is responsible for converting jsx code to normal js code which browser can understand
const heading = <h1 id="heading">Namaste React using JSX</h1>;

const TitleComponent = ()=>{
    return <h1 className="heading">Namaste react using jsx</h1>
}

const elem = <span>This is a element</span>;
const title = (
       <h1>
        {elem}
        This is a title
        </h1>
)


const number = 1000
// React component=> both headingcomponent are the same
const HeadingComponent = () => (
  <div id="container">
     <h2>{number}</h2>
     {title}
    <TitleComponent/>
    <h1 className="heading">Functional component</h1>
  </div>
);
const HeadingComponent2 = () => {
  return <h1 className="heading">Functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(<HeadingComponent/>)
