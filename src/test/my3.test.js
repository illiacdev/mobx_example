import * as rx from 'rxjs'
import Optional from 'optional-js'
import {observable, reaction, computed, autorun, decorate} from 'mobx';
import {Map, List} from 'immutable'
import {master} from '../address/AddressMaster'

it('should 1', function () {
    var test = undefined;
    var result = Optional.ofNullable(test).orElse(2);
    console.log(result);

});


it('should mobx1', function () {

// **** Observable State 만들기
    const calculator = observable({
        a: 1,
        b: 2
    });

    // **** 특정 값이 바뀔 때 특정 작업 하기!
    reaction(
        () => calculator.a,
        (value, reaction) => {
            console.log(`a 값이 ${value} 로 바뀌었네요!`);
        }
    );

    reaction(
        () => calculator.b,
        value => {
            console.log(`b 값이 ${value} 로 바뀌었네요!`);
        }
    );

    calculator.a = 10;
    calculator.b = 20;

});

class Target {
    store = {a: 0, b: 0};
    // store = {a:{}};
}

decorate(Target, {
    store: observable
})
it('should fields', function () {

    let target = new Target();
    let map1 = new Map().merge(target.store);
    target.store = map1.toJS();

    autorun(() => {
        console.log("***", target.store.a);
    })

    autorun(r => {
        console.log("***2", target.store.b);

    })

    let a = map1.set('a', 2);
    target.store = a.toJS();


});

it('should immutable', function () {
    const raw = {b: 1}
    const obj = Map();

    let map = obj.merge(raw);
    console.log(map.toJS());

    // let in1 = obj.setIn(['a','b'],10);
    // console.log(in1.toJS());

});


it('should a', function () {

    let key = "수정"

    // console.log(master);
    let filter = master.filter(value => {
        // console.log(value["1단계"]);
        if (value["1단계"].search(key) >= 0)
            return true;

        if (value["2단계"].search(key) >= 0)
            return true;

        if (value["3단계"].search(key) >= 0)
            return true;


        return false;
    });

    console.log(filter);

});


it('should b', function () {
    let key = "수정";
    let src = "수정1동";
    let number1 = src.search(key);
    console.log(number1);

});
