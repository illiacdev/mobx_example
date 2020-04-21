import React, {Component} from 'react';
import Counter from "./Counter";
import SuperMarket from "./SuperMarket";


import {Provider} from 'mobx-react'
import CounterStore from "./store/counter";
import MarketStore from "./market";


const counter  = new CounterStore()
const market = new MarketStore();



class CompoMarket extends Component {
    render() {
        return (
            <Provider counter={counter} market={market}>
                <Counter/>
                <hr/>
                <SuperMarket/>
            </Provider>
        );
    }
}

export default CompoMarket;
