import React from 'react';
import { Col, Row } from 'antd';
import PostCard from './postcard';
import { status, json } from '/utilities/requestHandlers';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import PostIcon from './posticon';
const { Meta } = Card;
import { Link} from 'react-router-dom'; 

class DetailDog extends React.Component {

  
  



  render() {
    
    return(
        
        //<h1>{this.props.dogname}</h1>
        <h2><>About</></h2>
    )
  }




        
  }

export default DetailDog;


