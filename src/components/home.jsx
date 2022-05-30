import React from 'react';
import '../App.css';
import DogGrid from './doggrid'


function Home() {
  return (
    <> 
    <h2 style={{ color: 'green' }}> Welcome to The Canine Shelter</h2>    
      Here are the dogs in our Centres:
      <DogGrid />
    </>
  )
}
export default Home;