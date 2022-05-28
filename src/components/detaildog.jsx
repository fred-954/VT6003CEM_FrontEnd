import React from 'react';
import articles from '../../data/articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

function DetailDog(props){
	var { id } = useParams();
	if(!id)id=1; // set default id=1
	const navigate = useNavigate();
  const keys = Object.keys(articles)
  const values = Object.values(articles)  
  var match=0; // set matching flag
    
  
/**  
 
for(var i=0; i<values.length;i++){
   console.log("keys[i] ", keys[i])
   console.log("values[i] ", values[i])
}
console.log("values[0]  keys ", Object.keys(values[0])) 
  
*/
  
 
  
  

			return (
				<>
					<p>Nothing Found</p>{' '}
					<Button
						type="primary"
						icon={<RollbackOutlined />}
						onClick={() => navigate(-1)}
					/>
				</>
			);
			
}
export default DetailDog;


