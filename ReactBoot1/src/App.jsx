import React, { Component } from 'react'
import ReactBoot from './component/ReactBoot'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Page3 />
        <ReactBoot />
        <Page1 />
        <Page2 />
      </div>
    )
  }
}
