import React, { Component } from 'react'
import Controlled from './Component/Controlled'
import UnControlled from './Component/UnControlled'

export default class App extends Component {
  render() {
    return (
      <div>
        <Controlled/>
        <UnControlled/>
      </div>
    )
  }
}
