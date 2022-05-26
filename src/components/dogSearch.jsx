import React, {  useContext, useState } from 'react';
import DogContext from '../contexts/dog';
import { PageHeader, Input, message } from 'antd';
import { status, json } from '/utilities/requestHandlers';
import {Table, Alert, Select,Col} from 'antd';
import { Tag, Space } from 'antd';

const { Column} = Table;
const  { Search } = Input;

function DogSearch(props) {
 
 const [press, setPress] = useState("");
 const [usersData, setUsers] = useState([]);
 const[isSearchOK,setSearch]=useState(false);
 const authbasic =props.authbasic;

const onSearch= value => {
  console.log("value ",value)
  console.log("press ",`${press}`)
 let urlPath="https://BackEndS.fred954.repl.co/api/v1/dogs";
 if (press==="dogage"||press==="dogname") 
   urlPath+=`/search/?fields=${press}&q=${value}`
// else
//  if(press==="username&fields=email"&&value==="")
//     urlPath+=`/search/?fields=${press}`
 
  console.log("urlPath ",urlPath)
  
  return(fetch('${urlPath}',{
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
  .catch(err => console.log("Error fetching dogs", err)) 
  ) 
}

const { Option } = Select;

function handleChange(value) {
  message.info("Pls. enter at least three characters to search by dog name or age otherwise leave the input empty")
  
  setPress(value);
  console.log(`selected ${value}`);
}
   	

  return (
   <>
     <Col span={16}>   
        <PageHeader
            title="Dog Search"
            subTitle="Search a dog you want"/>       
       <Search placeholder="Search Dogs"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}/>
       <Select defaultValue="dogage" style={{ width: 120 }} onChange={handleChange}>
        <Option value="dogname">DogName</Option>
        <Option value="dogage">DogAge</Option>
        </Select>	      
  {isSearchOK&&<Table dataSource={usersData}>
   <Column title="DogAge" dataIndex="dogage" key="dogage" />
   <Column title="Dogname" dataIndex="dogname" key="dogname" />
   </Table>}
   </Col>  

    </>  
  );
  }

export default DogSearch;

  