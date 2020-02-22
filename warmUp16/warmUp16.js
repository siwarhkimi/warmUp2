$(document).ready(function() {
    var j=1;
    var i=1;
    $('#left').click(function() {
        $('#leftList').prepend('<li>Left Side '+j+'</li>')
        j++
    })
    $('#right').click(function() {
        $('#rightList').prepend('<li>Right Side '+i+'</li>')
        i++
    })
    $('#create').click(function() {
        
    })
})