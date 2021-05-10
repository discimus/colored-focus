const names = [
    'Maia', 
    'Electra', 
    'Taygete', 
    'Celaeno', 
    'Alcyone',
    'Sterope',
    'Merope'
]

export const generateRandomName = () => {
    const number = Math.random() * names.length
    const index = Math.floor(number)

    return names[index]
}

export const getReadableTime = s => {
    // var ms = s % 1000;
    // s = (s - ms) / 1000;
    // var secs = s % 60;
    // s = (s - secs) / 60;
    // var mins = s % 60;
    // var hrs = (s - mins) / 60;
  
    // return hrs + ':' + mins + ':' + secs + '.' + ms;

    var date = new Date(null);
    date.setSeconds(s); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
}