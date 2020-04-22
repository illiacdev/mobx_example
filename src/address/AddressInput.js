import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Form, Input, Modal} from 'antd'
import {observer} from 'mobx-react'
import {decorate, observable} from 'mobx'
import {master} from '../address/AddressMaster'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};


// var values ={};
var ref = React.createRef();

function onCkick() {
    ref.current.submit();
    console.log("ref", ref);

}


export const AddressItem = ({address, onSelectAddr}) => {
    return (
        <div onClick={() => {
            console.log("onClick!!!", address);
            onSelectAddr(address)
        }}>
            {address['1단계'] + ' '}
            {address['2단계'] + ' '}
            {address['3단계'] + ' '}
        </div>
    );
};
const CustomizedForm = ({onChange, values, onSelectAddr}) => (

    <React.Fragment>
        {/*<pre className="language-bash">{JSON.stringify(values, null, 2)}</pre>*/}

        <Form
            ref={ref}
            name="global_state"
            layout={layout}
            // fields={fields}
            /*onFieldsChange={(changedFields, allFields) => {
                onChange(allFields);
            }}*/

            onValuesChange={(changedFields, allFields) => {
                onChange(changedFields);
            }}

            onFinish={(value) => {
                console.log("온서븜밋", value);
            }}

        >
            <Form.Item
                name="address"
                label="주소검색"

            >
                <Input/>
            </Form.Item>

        </Form>


    </React.Fragment>
);


class AddressInput extends Component {
    values = {};
    result = {};

    filter = (key) => {
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

        return filter;
    }
    setFields = (newFields) => {

        console.log(newFields);
        this.result = this.filter(newFields.address);
    }

    show = () => {
        this.setState({...this.state, visible: true})
    }
    hide = () => {
        this.setState({...this.state, visible: false})
    }


    state = {visible: false}

    render() {
        return (
            <Modal visible={this.state.visible} onOk={this.hide} onCancel={this.hide}>
                <CustomizedForm
                    values={this.values}
                    onChange={newFields => {
                        this.setFields(newFields);
                    }}
                    {...this.props}
                />
                {

                    (this.result.length > 0) && this.result.map(address => (
                        <AddressItem address={address} onSelectAddr={(addr) => {
                            this.hide()
                            this.props.onSelectAddr(addr)
                        }}/>
                    ))
                }
                {/*<pre className="language-bash">{JSON.stringify(this.result, null, 2)}</pre>*/}
            </Modal>
        );
    }
}

decorate(AddressInput, {
    values: observable,
    address: observable,
    result: observable
})


export default observer(AddressInput);
// export default AddressInput;
