var date = new Date();
var day = 1000*60*60*24


var yesterday = new Date((new Date()).valueOf() - day);
var day7ago = new Date((new Date()).valueOf() - day*15);

document.getElementById('date_start').valueAsDate = day7ago;
document.getElementById('date_end').valueAsDate = yesterday;


