import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const welcome = {
    greeting: "Hey",
    title: " React",
};
function App() {

  return (
    <div>
        <h1>{welcome.greeting}{welcome.title} </h1>  {/* Title was displayed to the browser using Javascript XML (JSX)*/}
        <h2>Brittney is an amazing software developer</h2>

        <label htmlFor="search">Search</label>
        <input id="search" type="text"/>

    </div>
  );
}

export default App
