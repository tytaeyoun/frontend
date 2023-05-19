$('#type-select').on('change', function () {
    var x = $(this).val()

    showlive(x);
    if (x === "powder") {
        x = "칼슘파우더"
    } else if (x === "soap") {
        x = "모공팩바"
    } else if (x === "spray") {
        x = "살균탈취제"
    }
    document.getElementById("title").innerHTML = x + " 라이브 방송 정리"
});




$('#stat-select').on('change', function () {
    var x = $('#type-select').val()
    var y = $(this).val()

    showline(x, y);
});