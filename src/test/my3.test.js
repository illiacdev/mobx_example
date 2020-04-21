import * as rx from 'rxjs'
import Optional from 'optional-js'
import {observable, reaction, computed, autorun} from 'mobx';


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

it('should fields', function () {

    var fields = {
        name: ['username'],
        value: 'Ant Design',
    };


});
