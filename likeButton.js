
$(function(){
    $('.glyphicon-heart').click(function(event){
       
        // console.log(this)
        let currentCount = $(this).next().text()
        console.log(currentCount)
    })
//    ".glyphicon glyphicon-heart"
//  ,'.glyphicon glyphicon-heart'
//     '.likeButton', 
});


// let buttons = document.getElementsByClassName('glyphicon glyphicon-heart');
// buttons = Array.from(buttons); //create array from the node list
// buttons.forEach(button => { //traverse through array of buttonS, foreach buttoN
//     button.addEventListener("click", e=>{ //e=event
//         let currentCount = button.nextSibling.textContent.trim()
//         currentCount = parseInt(currentCount)
//         newCount  = currentCount + 1
//         button.nextSibling.textContent = newCount
//     })
// })



// buttons[0].addEventListener("click", function( onClick ) {
//     // display the current click count inside the clicked div
//     event.target.textContent = event.detail += 1;
//   });

// var clickCount = 0;
// function onClick() {
//     clickcount += 1;
//     document.getElementByClassName("glyphicon glyphicon-heart").innerHTML = clickCount;
//    };