import {decorate,observable} from 'mobx'
export class Store {
    number = 1;
    inc(){
        this.number++;
    }

    dec(){
        this.number--;
    }
}

decorate(Store,{
    number: observable


});
