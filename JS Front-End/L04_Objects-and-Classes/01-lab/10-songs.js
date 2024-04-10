function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        
        getName() {
            return this.name;
        }
    }

    let songs = [];
    let numberOfSongs = Number(arr.shift());
    let typeOfSong = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = arr[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }
    
    let filteredSongs = (typeOfSong === 'all') ? songs : songs.filter(s => s.typeList === typeOfSong);
    filteredSongs.forEach(s => console.log(s.getName()));
}
