import {observable, reaction, computed, autorun, decorate} from 'mobx'

it('should 1', function () {
    console.log('test!');


    // Observable State 만들기
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

    // **** computed 로 특정 값 캐싱
    const sum = computed(() => {
        console.log('계산중이예요!');
        return calculator.a + calculator.b;
    });

    sum.observe(() => calculator.a); // a 값을 주시
    sum.observe(() => calculator.b); // b 값을 주시

    calculator.a = 10;
    calculator.b = 20;
});


it('should 2', function () {
    // Observable State 만들기
    const calculator = observable({
        a: 1,
        b: 2
    });

// computed 로 특정 값 캐싱
    const sum = computed(() => {
        console.log('계산중이예요!');
        return calculator.a + calculator.b;
    });

// **** autorun 은 함수 내에서 조회하는 값을 자동으로 주시함
//     autorun(() => console.log(`a 값이 ${calculator.a} 로 바뀌었네요!`));
//     autorun(() => console.log(`b 값이 ${calculator.b} 로 바뀌었네요!`));
    autorun(() => sum.get()); // su

    calculator.a = 10;
    calculator.b = 20;

// 여러번 조회해도 computed 안의 함수를 다시 호출하지 않지만..
    console.log(sum.value);
    console.log(sum.value);

    calculator.a = 20;

// 내부의 값이 바뀌면 다시 호출 함
    console.log(sum.value);
});


it('should 3', function () {
    class GS25 {
        basket = [];

        get total() {
            console.log('계산중입니다..!');
            // Reduce 함수로 배열 내부의 객체의 price 총합 계산
            // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
            return this.basket.reduce((prev, curr) => prev + curr.price, 0);
        }

        select(name, price) {
            this.basket.push({name, price});
        }
    }

// decorate 를 통해서 각 값에 MobX 함수 적용
    decorate(GS25, {
        basket: observable,
        total: computed,
    });

    const gs25 = new GS25();
    autorun(() => gs25.total);
    gs25.select('물', 800);
    console.log(gs25.total);
    gs25.select('물', 800);
    console.log(gs25.total);
    gs25.select('포카칩', 1500);
    console.log(gs25.total);
});


it('should 4', function () {

});
