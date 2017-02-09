//Creating some global variables off the bat

var websiteTitle = $('#input-title');
var websiteUrl = $('#input-url');
var $submitBtn = $('#enter-btn');
var $cardList = $('.bookmarks');

//user arrives at site. two input fields. one for the name/title of a site, and another for the site URL. second input can only take a valid url.

window.onload = function() {
  disableEnter();
};

//keyup listener
$('#input-title, #input-url').on('keyup', function(){
  disableEnter();
  // $('#enter-btn').prop('disabled', false);
  // checkInput(websiteTitle.val(), websiteUrl.val());
});

// $('#input-url').on('keyup', function(){
//   disableEnter();
// });

//disable button function
function disableEnter () {
  if (websiteTitle.val() === "" || websiteUrl.val() === "") {
    $('#enter-btn').prop('disabled', true);
  } else {
    $('#enter-btn').prop('disabled', false);
  }
  // var submitBtn = document.querySelector('#enter-btn');
  // submitBtn.disabled = true;
}

function clearInputs() {
  $('#input-title').val('');
  $('#input-url').val('');
  // websiteTitle.innerText = ""
  // websiteUrl.innerText = ""
}
// //check input
// function checkInput (title, url) {
//   if (title === "" || url === "") {
//       // return console.log('fuckup');
//       disableEnter ()
//       alert('Missing input') //later, turn field red.
//     }
// }


//User submits title and url via the enter button. event listener.
function Bookmark (title, url) {
  this.title = title;
  this.url = url;
  $cardList.prepend(this.createHtml())
}

Bookmark.prototype.createHtml = function () {
  return ('<article class="card">' +
            '<h2 class="card-title">' + this.title + '</h2>'+
            '<hr>' +
            '<p><a class="card-url" href="' + this.url +'" target="_blank">'+ this.url+'</a></p>' +
            '<hr>' +
            '<a class="unread">Read</a>' +
            '<a class="card-delete">Delete</a>' +
          '</article>')
}

//toggle class unread to read
$($cardList).on('click', '.unread', '.card', function() {
  $(this).toggleClass('read');
  $(this).parent().toggleClass('card-background');
  console.log("having been read...ENGAGED");
})



$($cardList).on('click','.card-delete', function() {
  console.log("Removed!");
  $(this).parent().remove();
})


$('#enter-btn').on('click', function() {
  // checkInput (websiteTitle.val(), websiteUrl.val())
    // return alert('Missing Input')
    // Create a function that does regex, alerts user if no match


  new Bookmark(websiteTitle.val(), websiteUrl.val());
  console.log(websiteTitle.val(), websiteUrl.val());
  clearInputs();
})

 /* submitBtn.addEventListener('click', function() {
  new Bookmark(websiteTitle.val(), websiteUrl.val())
  console.log('bookmark added')
}) */

//card is generated with title, url, read and delete links and added to the .bookmarks section of the page.
$('card-delete').on('click', 'a', function() {
  $(this).parent().remove($cardList);
  console.log('Delete function check');
});


//read link either has class of .read or doesn't



//delete link with remove the card from the bookmarks section.
