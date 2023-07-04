import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
:root {
  font-size: clamp(1rem, 0.9vw, 1.5rem);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
}
*::selection{
  color:'#ffffff';
  background-color: #7ed147;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #248F2E #DFE9EB;
}

*::-webkit-scrollbar {
  width: 3px;
  width: 3px;
}
*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #DFE9EB;
}

*::-webkit-scrollbar-track:hover,
*::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}
*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #248F2E;
}
*::-webkit-scrollbar-thumb:hover,
*::-webkit-scrollbar-thumb:active {
  background-color: #62A34B;
}

body{
  background-color: #fbfaf9;
  color:#11110d;
  font-size: clamp(1rem, 0.9vw, 1.5rem);
}
img,
video {
  max-width: 100%;
  width: 100%;
  display: block;
}
ul,li{
	list-style: none;
	text-decoration: none;
}
a{
	text-decoration: none;
}
`;
