import React, {  useContext, useState } from 'react';
import UserContext from '../contexts/user';
import { PageHeader, Input, message } from 'antd';
import { status, json } from '/utilities/requestHandlers';
import {Table, Alert, Select,Col} from 'antd';
import { Tag, Space } from 'antd';

const { Column} = Table;
const  { Search } = Input;

function SearchDog(props) {
 
 const [press, setPress] = useState("");
 const [usersData, setUsers] = useState([]);
 const[isSearchOK,setSearch]=useState(false);
 const authbasic =props.authbasic;

const onSearch= value => {
  console.log("value ",value)
  console.log("press ",`${press}`)
 let urlPath="https://BackEndS.fred954.repl.co/api/v1/dogs";
 if (press==="gender"||press==="dogtype") 
   urlPath+=`/search/?fields=${press}&q=${value}`
 else
  if(press==="dogtype&fields=gender"&&value==="")
     urlPath+=`/search/?fields=${press}`
 
  console.log("urlPath ",urlPath)
  return(fetch(`${urlPath}`,{
        method: "GET"
  })
  .then(status)
  .then(json)
  .then(data => { 
   console.log("dog return  ",JSON.stringify(data) );
   console.log("dog data  ",data );
   setUsers(data);
   setSearch(true); 
    value="";
  })
  .catch(err => console.log("Error fetching dogs", err)) 
  ) 
}

const { Option } = Select;

function handleChange(value) {
  message.info("Pls. enter at least one character to search by dog type or gender")
  
  setPress(value);
  console.log(`selected ${value}`);
}
   	

  return (
   <>
     <Col span={16}>   
        <PageHeader
            title="Dogs in The Canine Shelter"
            subTitle="Here are the dogs in our centres"/>       
       <Search placeholder="Search..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}/>
       <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
        <Option value="dogtype">dogtype</Option>
        <Option value="gender">gender</Option>
        <Option value="all">Get all dog list</Option>
        </Select>	      
  {isSearchOK&&<Table dataSource={usersData}>
   <Column title="ID" dataIndex="id" key="id" />
   <Column title="Dogname" dataIndex="dogname" key="dogname" />
   <Column title="Dog Type" dataIndex="dogtype" key="dogtype" />
   <Column title="Dog Age" dataIndex="dogage" key="dogage" />
    <Column title="Gender" dataIndex="gender" key="gender" /> 
   <Column title="Shelter Location" dataIndex="site" key="site" /> 
   </Table>}
   </Col>  

    </>  
  );
  }

export default SearchDog;

  