function storeMovies(input) {
    let movies = {};
  
    for (let line of input) {
      if (line.startsWith("addMovie ")) {
        let movieName = line.substring(9);
        movies[movieName] = {};
      } else if (line.includes(" directedBy ")) {
        let [movieName, director] = line.split(" directedBy ");
        if (movies.hasOwnProperty(movieName)) {
          movies[movieName].director = director;
        }
      } else if (line.includes(" onDate ")) {
        let [movieName, date] = line.split(" onDate ");
        if (movies.hasOwnProperty(movieName)) {
          movies[movieName].date = date;
        }
      }
    }
  
    let validMovies = Object.entries(movies).filter(
      ([name, info]) => info.hasOwnProperty("director") && info.hasOwnProperty("date")
    );
  
    let output = "";
    for (let [name, info] of validMovies) {
      output += JSON.stringify({ name, ...info }) + "\n";
    }
  
    return output.trim();
  }
  