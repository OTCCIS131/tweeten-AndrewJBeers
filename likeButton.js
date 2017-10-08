

$(function(){
    $('.btn').click(function(e){
        let currentCount = $(this).next().text()
        currentCount = parseInt(currentCount)
        let newCount  = currentCount + 1
        $(this).next().text(" " + newCount) 
    })
});
