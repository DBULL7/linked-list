var $bookmarkTitle = $('#input-title');
var $websiteUrl = $('#input-url');
var $cardList = $('.bookmarks');



//////////////////////////Disable Button Functions//////////////////////////////



// Disable enter button when the page loads
window.onload = function() {
  disableEnter();
};


//keyup listener for both input fields
$('#input-title, #input-url').on('keyup', function(){
  disableEnter();
});


//disable button function
function disableEnter () {
  if ($bookmarkTitle.val() === "" || $websiteUrl.val() === "") {
    $('#enter-btn').prop('disabled', true);
  } else {
    $('#enter-btn').prop('disabled', false);
  }
}



/////////////////////Constructor and prototype///////////////////////////////



// Constructor of Bookmark object
function Bookmark (title, url) {
  this.title = title;
  this.url = url;
  $cardList.prepend(this.createHtml())
}


// Prototype of Bookmark object that creates cards in the DOM
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



///////////////////////// Buttons on the cards ////////////////////////////////



//If the Read button is toggled it adds UI feedback for the user
$($cardList).on('click', '.unread', '.card', function() {
  $(this).toggleClass('read');
  $(this).parent().toggleClass('card-background');
  console.log("Read class toggled");
})


//Deletes a card when clicked
$($cardList).on('click','.card-delete', function() {
  console.log("Removed!");
  $(this).parent().remove();
})


// When the enter button is clicked it checks the url field's value against a Regex statement
$('#enter-btn').on('click', function() {
  checkUrl($websiteUrl);
})



///////////////////////////// Regex Check /////////////////////////////////////



// Takes input, turns it into a local variable, compares it against a Regex, if it passes it generates a new instance of Bookmark
function checkUrl(url) {

  var url = $websiteUrl.val();
  var urlRegex = /http:www/;

  if (urlRegex.test(url) === false) {
    alert('Not a valid URL. Please be sure to include http://www Thank you!');
  } else {
    generateBookmark();
  }
}


// Function to clean up the checkUrl function for readability
function generateBookmark() {
  new Bookmark($bookmarkTitle.val(), $websiteUrl.val());
  console.log($bookmarkTitle.val(), $websiteUrl.val());
  $('#input-title').val('');
  $('#input-url').val('');
  disableEnter();
}
