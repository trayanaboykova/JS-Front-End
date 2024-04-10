function towns(info) {
    let town={};
   
       for (let el of info) {
           let info = el.split(' | ');
           town.town = info[0];
           town.latitude = parseNumbers(Number(info[1]));
           town.longitude = parseNumbers(Number(info[2]));
           console.log(town);
       }
       function parseNumbers(n){
           return n.toFixed(2);
       }
   
   }