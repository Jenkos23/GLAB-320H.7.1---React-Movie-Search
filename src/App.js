import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



//import components
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';



function App() {
//constant with Api Key
  const apiKey = " 850d03ac";

  //State to hold the movies data
  const[movie, setMovie] =  useState(null);

  

  //Function to get movies
  const getMovie = async(searchTerm) => {
    try {

      //make fetch request and store the responses
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      // https://www.omdbapi.com/?apikey=850d03ac&t=godfather

    );

    //Parse Json response into a JavaScript object
    const data = await response.json()
      // Set the Movie state to the received data
      setMovie(data)
      
    } catch (error) {
      console.error(error)
    };
    
  };
 // This will run on the first render but not on subsquent renders
 useEffect(() => {
  getMovie('clueless'); //fetch a
}, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch = {getMovie}/>
      <MovieDisplay movie = {movie}/>
     
    </div>
  );
}

export default App;
