import React, { Component } from 'react'
import spinner from './spinner.gif'
export class Loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={spinner} alt="spinner" style={{width:50}}/>
      </div>
    )
  }
}

export default Loading