export default function MovieDisplay({movie}){
    const loaded = ()=> {
return(
 <>
    <h1>The MovieDisplay Component</h1>
    <h2>{movie.Title}</h2>
    <h3>{movie.Genre}</h3>
    <img src= {movie.Poster} alt ={movie.Title}/>
    <h2>{movie.Year}</h2>
 </>
);
};


//Function to return loading JSX


  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}