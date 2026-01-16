import React from 'react'
import './App.css'

class Counter extends React.Component {
  state = {count: 0}

  increment = () => {
    this.setState((prev) => ({
      count:
        (prev.count % 2 === 0 && prev.count !== 0) 
          ? prev.count + 2
          : prev.count + 1
    }))
  }

  decrement = () => {
    this.setState((prev) => ({
      count: prev.count > 0 ? prev.count - 1 : 0
    }))
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h2>Counter: {count}</h2>

        <button className="Inc" onClick={this.increment}>
          Increment
        </button>

        <button className="Dec" onClick={this.decrement}>
          Decrement
        </button>

        <button className="Reset" onClick={this.reset}>
          Reset
        </button>

        <p>
          {count > 10 ? "High Value" : "Low Value"}
        </p>
      </>
    )
  }
}

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App;