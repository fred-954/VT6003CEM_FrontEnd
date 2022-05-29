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

  
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }



  render() {
    console.log(<>{this.props.id}</>);
    return(
        
        //<h1>{this.props.dogname}</h1>
        <h2><>{this.props.id}</></h2>
    )
  }




        
  }

export default DetailDog;


