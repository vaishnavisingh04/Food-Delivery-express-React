
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





const heading= 
React.createElement("div" ,{id:"parent"}, 
  [React.createElement("div" ,{id:"child"},
     [React.createElement("h1" ,{}, "I am H1 tag"),React.createElement("h2" ,{}, "I am H2 tag")]
), React.createElement("div" ,{id:"child2"},
 [   gitReact.createElement("h1" ,{}, "I am H1 tag"),
  React.createElement("h2" ,{}, "I am H2 tag")
  ]), 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
