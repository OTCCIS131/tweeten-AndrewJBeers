

$(function () {
    $("#like").click(function (e) {
        let currentCount = $(this).next().text()
        currentCount = parseInt(currentCount)
        let newCount = currentCount + 1
        $(this).next().text(" " + newCount)
    })

    $('#newTweet').submit(function (e) {
        e.preventDefault()
        let tweet = this.elements.comment.value
        if (tweet.trim() == '') return
        this.elements.comment.value = ''
 
        let newElement =  $("li:last-child", $('#myTweets')).clone(true)
        newElement.find(".message").text(tweet)
        newElement.find("#like").next().text(" 0")
       
        // console.log("is this working ~~  " + newElement.find("#like").next().text())
        
       $("#myTweets").prepend(newElement)
    })



});
