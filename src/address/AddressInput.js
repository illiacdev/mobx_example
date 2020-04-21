import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Form, Input} from 'antd'
import {observer} from 'mobx-react'
import {decorate, observable, reaction} from 'mobx'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};


function onChange2(value,arg2) {
    console.log("***1",value);
    console.log("***2",arg2);
}

const CustomizedForm = ({onChange, fields}) => (

    <React.Fragment>

        Hello!
        {/*<pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>*/}

        <Form
            name="global_state"
            layout="inline"
            fields={fields}
            onFieldsChange={(changedFields, allFields) => {
                onChange(allFields);
            }}
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
                name='item2'
                label="Lable Item2"
            ><Input onChange={onChange2}/></Form.Item>
        </Form>

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
