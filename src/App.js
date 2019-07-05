import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import {inject} from 'mobx-react'
import {Store} from "./Store";
import {observe} from "mobx";
import SuperMarket from "./SuperMarket";


class App extends Component {



    render() {
        console.log(this.props);
        return (
            <div>
                <Counter/>
                <hr/>
                <SuperMarket/>
            </div>
        );
    }
}

// const instance = inject('counter')(observe(App));
// export default instance
export default App;
/*
function App() {

  return (

      <div>
        <Counter />
      </div>
  );
}

export default App;
*/
