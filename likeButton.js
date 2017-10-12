

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
        this.elements.comment.value = ""
        console.log(tweet)

        $('#post').clone(true).insertBefore("#post")



        // alert("test")
    })



});
