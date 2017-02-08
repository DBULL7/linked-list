//Creating some global variables off the bat

var websiteTitle = $('#input-title');
var websiteUrl = $('#input-url');
// var submitBtn = $('#enter-btn');
// var submitBtn = $('#enter-btn');
var $cardList = $('.bookmarks');

//user arrives at site. two input fields. one for the name/title of a site, and another for the site URL. second input can only take a valid url.



//User submits title and url via the enter button. event listener.
function Bookmark (title, url) {
  this.title = title;
  this.url = url;
  $cardList.append(this.createHtml())
}

Bookmark.prototype.createHtml = function () {
  return ('<article class="card"> <h2 class="card-title">'+this.title+'</h2> <hr><p class="card-url"><a href="' + this.url +'">'+ this.url+'</a></p> <hr> <a class="card-read">Read</a> <a class="card-delete">Delete</a> </article>')
}


$('#enter-btn').on('click', function() {
  //var websiteTitle = $('#input-title').val();
  //var websiteUrl = $('#input-url').val();
  new Bookmark(websiteTitle.val(), websiteUrl.val());
  console.log(websiteTitle.val(), websiteUrl.val());
})

 /* submitBtn.addEventListener('click', function() {
  new Bookmark(websiteTitle.val(), websiteUrl.val())
  console.log('bookmark added')
}) */

//card is generated with title, url, read and delete links and added to the .bookmarks section of the page.



//read link either has class of .read or doesn't



//delete link with remove the card from the bookmarks section.
