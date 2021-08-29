import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: Math.ceil(Math.random() * 100) + prevState.count,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {displayText}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="disclaimer">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
