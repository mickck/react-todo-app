import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */    
 
  max-width: 30rem;
  margin: 0px auto;
  font-weight: 300;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
  min-height: 100vh;
  overflow: hidden;
width: 100vw;




div{
  
  font-size: 25px;
  width: 500px;
  
}
h1{
  margin-top: 15px;
  text-align: center;
}
input  {
  margin-right: 10px;
  width: 380px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);

}


li{
  margin-bottom: 15px;
  list-style: none;
  background-color: darkgray;
  padding: 5px;
  border-radius: 10px;
  word-break:break-all;

  
}
span{
  padding-left: 5px;
  padding-right: 10px; 
  font-size: 20px; 
}

button{
  margin-left: 5px; 
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #3D3D3D;
  background: #fff;
  border: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &:focus {
 
  outline: 0;
}
&:hover{
    cursor: pointer;
    border: 1px solid #dadce0;
    box-shadow: inset 1 1px 1px 0 rgb(0 0 0 / 10%);
    background-color: tomato;
    transition: ease-out 0.3s ;
    
  } 

}



}
h1{
  font-weight: bold;
  font-size: 40px;
  padding: 5px;
  text-shadow: 1px 1px #3D3D3D;

}

a {
  text-decoration:none;
  color:inherit;

}




`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
