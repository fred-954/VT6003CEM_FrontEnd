import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { status, json } from '/utilities/requestHandlers';
import  GoHomeButton  from './goHome';
import UserContext from '../contexts/user';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

function handleChange(value) {
  message.info("Pls. enter at least three characters to search by email or username otherwise leave the input empty")
  
  setPress(value);
  console.log(`selected ${value}`);
}

class UpdateDog extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected   
    };
   this.onFinish = this.onFinish.bind(this);
    
   }
   
  static contextType = UserContext; 
  
  
  onFinish = (values) => { 
  console.log('Received values of form: ', values);
  const {confirm,...data } = values;  // ignore the 'confirm' value
    console.log("Json  ",JSON.stringify(data))
    fetch('https://BackEndS.fred954.repl.co/api/v1/dogs', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }        
    })
    .then(status)
    .then(json)
    .then(data => {
        // For you TODO: display success message and/or redirect
        console.log(data);  
          this.context.regComplete(); 
   //     alert(`Registration Completed! Pls. press login or green button to continue `)      
			  
    })
    .catch(errorResponse => {
        // For you TODO: show nicely formatted error message and clear form
	 console.error(errorResponse);
        alert(`Error: ${errorResponse}`);
    });  
  }
    


render() {
    return (
      <Form {...formItemLayout} name="register" scrollToFirstError onFinish={this.onFinish}>
        
        <Form.Item name="dogname" label="Dog Name">
            <Input />
        </Form.Item>
        <Form.Item name="dogtype" label="Dog type">
            <Input />
        </Form.Item>
        <Form.Item name="dogage" label="Dog Age">
            <Input />
        </Form.Item>
        <Form.Item name="site" label="Site">
          <Select defaultValue="male" style={{ width: 120 }} onChange={handleChange}>
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        </Select>
        </Form.Item>
        <Form.Item name="gender" label="Dog">
        <Select defaultValue="male" style={{ width: 120 }} onChange={handleChange}>
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        </Select>
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit"  >
                Register
            </Button>
      
        </Form.Item>
      </Form>
    );
    
  };



}

export default UpdateDog;