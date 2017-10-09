

$(function(){
    $("#like").click(function(e){
        let currentCount = $(this).next().text()
        currentCount = parseInt(currentCount)
        let newCount  = currentCount + 1
        $(this).next().text(" " + newCount) 
    })

    $('#newTweet').click(function(e){
        e.preventDefault()
        console.log(this)
        alert("test")
    })



});
