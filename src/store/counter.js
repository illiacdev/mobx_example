import { observable, action ,decorate} from 'mobx';

export default class CounterStore {
    @observable
    number = 1;

    @action
    increase = () => {
        this.number++;
    }

    @action
    decrease = () => {
        this.number--;
    }
}


/*decorate(CounterStore,{
    number:observable,
    increase:action,
    decrease:action
})*/
