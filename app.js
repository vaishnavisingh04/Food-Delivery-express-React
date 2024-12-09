import React from 'react';
import ReactDOM from 'react-dom/client';

//it for react 18 version . add 'client' 

// {}--> it takes html tags atrributes like ID, CLASSES
//react.createElement(object)-->Html(browser understands it )
// basically render conversts object into html tags then give to the browser .
//if we want create nested html like


/* <div id="parent">
       <div id="child">
           <h1>hello world</h1>
           <h2> I am h2 tag</h2>
        </div>
        <div id="child2">
           <h1>hello world</h1>
           <h2> I am h2 tag</h2>
        </div>

     </div>
*/

const jsxheading = <h1> HEllo BY JSX </h1>;



/*const heading= 
React.createElement("div" ,{id:"parent"}, "HELLO VAISHNAVI by REACT"); */

const root = ReactDOM.createRoot(document.getElementById("root")); 


root.render(jsxheading); 

