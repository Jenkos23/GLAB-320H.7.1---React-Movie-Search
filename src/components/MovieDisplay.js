export default function MovieDisplay({movie}){
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