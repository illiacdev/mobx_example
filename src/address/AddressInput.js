import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Form, Input} from 'antd'
import {observer} from 'mobx-react'
import {decorate, observable, reaction} from 'mobx'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};


function onChange2(value) {
    console.log("***1",value);
}

function onChange3(allFields) {
    console.log("***2",allFields);
    values = allFields;
}

var values ={};
var ref = React.createRef();
var ref2 = React.createRef();

function onCkick() {
    ref.current.submit();
    console.log("ref",ref);
    console.log("ref2",ref2);
}

const CustomizedForm = ({onChange, fields}) => (

    
    <React.Fragment>

        Hello!
        <pre className="language-bash">{JSON.stringify(values, null, 2)}</pre>

        <Form
            ref={ref}
            name="global_state"
            layout="inline"
            fields={fields}
            onFieldsChange={(changedFields, allFields) => {
                onChange(allFields);
            }}

            onValuesChange={(changedFields, allFields) => {
                onChange3(allFields);
            }}

            onFinish={(value)=>{
                console.log("온서븜밋",value);}}

        >
            <Form.Item
                name="username"
                label="Username"
                /* rules={[
                     {
                         required: true,
                         message: 'Username is required!',
                     },
                 ]}*/
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['root','item1']}
                label="Lable Item1"
                id={"testid1"}
            ><Input onChange={onChange2}/></Form.Item>
        </Form>

        <button ref={ref2} onClick={onCkick}>테스트</button>
    </React.Fragment>
);


class AddressInput extends Component {

    fields = [{
        name: ['username'],
        value: 'Ant Design',
    },
        {
            name: ['root', 'item1'],
            value: 'Test2',
        }
    ];

    address;

    dto = {};

    setFields = (newFields) => {
        // console.log(newFields);
        this.fields = newFields;
        let find = newFields.find(value => {
            return value.name[0] == "username"
            // console.log(value);
            // return true;
        });

        this.address = find.value;

        console.log(find.value);

    }

    fillDto = () => {

    }

    render() {
        return (
            <div>
                hello!
                <CustomizedForm
                    fields={this.fields}
                    onChange={newFields => {
                        this.setFields(newFields);
                    }}
                />
                <pre className="language-bash">{JSON.stringify(this.fields, null, 2)}</pre>
            </div>
        );
    }
}

decorate(AddressInput, {
    fields: observable,
    address: observable
})


export default observer(AddressInput);
// export default AddressInput;
