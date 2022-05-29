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
 if (press==="email"||press==="username") 
   urlPath+=`/search/?fields=${press}&q=${value}`
 else
  if(press==="username&fields=email"&&value==="")
     urlPath+=`/search/?fields=${press}`
 
  console.log("urlPath ",urlPath)
  return(fetch(`${urlPath}`,{
        method: "GET",
        headers:{"Authorization": "Basic " +`${authbasic}`}
  })
  .then(status)
  .then(json)
  .then(data => { 
   console.log("user return  ",JSON.stringify(data) );
   console.log("user data  ",data );
   setUsers(data);
   setSearch(true); 
    value="";
  })
  .catch(err => console.log("Error fetching users", err)) 
  ) 
}

const { Option } = Select;

function handleChange(value) {
  message.info("Pls. enter at least three characters to search by email or username otherwise leave the input empty")
  
  setPress(value);
  console.log(`selected ${value}`);
}
   	

  return (
   <>
     <Col span={16}>   
        <PageHeader
            title="Dogs in Dog Charity"
            subTitle="Here are the dogs in our centres"/>       
       <Search placeholder="Search Users"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}/>
       <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
        <Option value="username">username</Option>
        <Option value="email">email</Option>
        <Option value="username&fields=email">Get all-filter by username & email</Option>
        <Option value="all">Get all-without filter</Option>
        </Select>	      
  {isSearchOK&&<Table dataSource={usersData}>
   <Column title="ID" dataIndex="id" key="id" />
   <Column title="Dogname" dataIndex="dogname" key="dogname" />
   <Column title="Dog Type" dataIndex="dogtype" key="dogtype" />
   <Column title="Dog Age" dataIndex="dogage" key="dogage" />
   <Column title="Site" dataIndex="site" key="site" /> 
   </Table>}
   </Col>  

    </>  
  );
  }

export default SearchDog;

  