import React from 'react';
import '../App.css';
import Article from '../articles'
import DogGrid from './doggrid'


function Home() {
  return (
    <> 
    <h2 style={{ color: 'green' }}> Welcome to Blog client Demo</h2>     
     
      <DogGrid />
    </>
  )
}
export default Home;