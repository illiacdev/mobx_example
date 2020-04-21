import React, {Component} from 'react';
import './App.css';
import CompoMarket from "./CompoMarket";
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import AddressInput from "./address/AddressInput";

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <BrowserRouter>
                <Route exact path={"/"} component={CompoMarket}/>
                <Route exact path={"/addressin"} component={AddressInput}/>

            </BrowserRouter>
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
