import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'
import TopBar from 'components/topBar'

const App = () => {
  return (
    <div>
      <h3>welcome to hooks</h3>
      <Router>
        <TopBar/>
        <Routes/>
      </Router>
    </div>
  )
}
ReactDOM.render(
  <App/> ,document.getElementById('root')
)
