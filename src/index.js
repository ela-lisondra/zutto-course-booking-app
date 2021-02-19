import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import App.css
import './App.css'

//import the Bootstrap CSS to use Bootstrap Stylings with our components.
import 'bootstrap/dist/css/bootstrap.min.css'

/*

	What is JSX? Javascript + XML (Extensible Mark-up Language)

	JSX is an XML/HTML like syntax used by React that extends your JS so that it can co-exist with React. The syntax provided by JSX is compiled by Babel toransform HTML-like syntax or text into standard JS objects.
	
	Basically, we can write HTML/XML like structures in the same file as we write JS code, then Babel will transform these expression into JS. It allows us to put HTML into JS more efficiently.

*/

// with JSX

// let myElement = <h1>Hello, E</h1>
// let myElement2 = <h1>Hello, A</h1>


// without JSX
// let myElement2 = React.createElement('h1', {}, "This is not")


// ReactDOM.render(element, container)
ReactDOM.render(
<App />,
  document.getElementById('root')
);



