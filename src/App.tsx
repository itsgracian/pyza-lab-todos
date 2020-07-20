import React from 'react'
import './assets/scss/App.scss'
import Todos from './components/todos';
import { configStore } from './redux';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={configStore()}>
      <div className="App">
      <Todos />
    </div>
    </Provider>
  )
}

export default App
