import {action, autorun, computed, decorate, observable, reaction} from 'mobx';





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

    do(){
        console.log(this.number);
    }


    number = 0;
}

it('should 13', function () {
    decorate(GS25, {
        number: observable,
    })


    let gs25 = new GS25();

    autorun(()=>{
        console.log(gs25.number);

    })

    /*reaction(() => gs25.number, arg => {
        console.log(arg);


    })*/

    gs25.number = 1;
    gs25.number = 2;


});

it('should 12', function () {
    decorate(GS25, {
        basket: observable,
        total: computed,
        // select: action
    });

    const gs25 = new GS25();
    autorun(() => gs25.total);
// *** 새 데이터 추가 될 때 알림
    autorun(() => {
        if (gs25.basket.length > 0) {
            console.log(gs25.basket[gs25.basket.length - 1]);
        }
    });

    gs25.select('물', 800);
    gs25.select('물', 800);
    gs25.select('포카칩', 1500);

    console.log(gs25.total);

});
