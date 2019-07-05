import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer,inject } from 'mobx-react';
import {Store} from "./Store";

class Counter extends Component {
    /*number = 0;

    increase = () => {
        this.number++;
    }

    decrease = () => {
        this.number--;
    }*/

    render() {
        const {counter} = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        );
    }
}

// inject(store);

/*decorate(Counter, {
    number: observable,
    // increase: action,
    // decrease: action
})*/

// export default observer(Counter);
// export default Counter;
export default inject('counter')(observer(Counter))
