$('#date-select').on('change',function() {
    var x = $(this).val()

    fbAdTable(x);
    document.getElementById("title").innerHTML = "지난 " + x + "일 Meta 광고 성적표"
  });