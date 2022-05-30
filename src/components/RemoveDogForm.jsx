import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { status, json } from '/utilities/requestHandlers';
import  GoHomeButton  from './goHome';
import UserContext from '../contexts/user';

const  { Search } = Input;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

function handleChange(value) {
  setPress(value);
  console.log(`selected ${value}`);
}



class RemoveDogForm extends React.Component {

  
  
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
 let urlPath="https://BackEndS.fred954.repl.co/api/v1/dogs";
   urlPath+=`/delete/${values}`
  console.log("urlPath ",urlPath)
    alert(`Dog id with ${values} is removed`);
  fetch(`${urlPath}`,{
        method: "GET"
  })
    .then(status)
    .catch(errorResponse => {
        // For you TODO: show nicely formatted error message and clear form
	 console.error(errorResponse);
        alert(`Error: ${errorResponse}`);
    });  
  }
  

render() {
  return (
      <Search placeholder="Enter ID to Delete"
            allowClear
            enterButton="Remove"
            size="large"
            onSearch={this.onFinish}/>
      
  );
    
  };



}

export default RemoveDogForm;