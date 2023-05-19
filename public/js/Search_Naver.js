var date = new Date();
var day = 1000*60*60*24


var yesterday = new Date((new Date()).valueOf() - day);
var day7ago = new Date((new Date()).valueOf() - day*180);

document.getElementById('date_start').valueAsDate = day7ago;
document.getElementById('date_end').valueAsDate = yesterday;


$('#submit-graph').on('click',function() {
    var x = $('#stat-select').val()

    if (x === "abs") { 
        document.getElementById("title").innerHTML = "마케팅 지수 - 네이버 검색량(절대값)"
    } else if (x === "rel") {
        document.getElementById("title").innerHTML = "마케팅 지수 - 네이버 검색량(상대값)"
    }
    
  });