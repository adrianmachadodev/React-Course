import React from 'react'
import Buttons from './components/Buttons'

const App = () =>
{
  return (
    <div>
      <h1 className="title">Hola desde SASS</h1>
      <hr />
      <ul>
        <li>
          <a href="#">Google</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <hr />
      <h2>Counter: 0</h2>
      <Buttons type="btn btn-primary" text="+1" />
    </div>
  )
}

export default App
