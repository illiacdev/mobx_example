import React, {Component} from 'react';
import {Modal, Button, Form, Input} from 'antd'
import AddressInput from "./AddressInput";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

class CompoExample extends Component {
    state = {visible: false}
    ref = React.createRef();
    refAddrModal = React.createRef();

    render() {
        return (
            <Form layout={layout}
                  ref={this.ref}
            >
                <Form.Item name={"a1"} label={"시도"}><Input/></Form.Item>
                <Form.Item name={"a2"} label={"구군"}><Input/></Form.Item>
                <Form.Item name={"a3"} label={"읍면동"}><Input/></Form.Item>
                <Button onClick={this.onClick}>검색</Button>
                    <AddressInput ref={this.refAddrModal} onSelectAddr={this.hide}/>
            </Form>
        );
    }

    hide = (address) => {
        this.setState({...this.state, visible: false})
        this.ref.current.setFieldsValue({
            a1: address['1단계'],
            a2: address['2단계'],
            a3: address['3단계'],
        })
    }

    onClick = () => {
        this.refAddrModal.current.show();
    }
}

export default CompoExample;
