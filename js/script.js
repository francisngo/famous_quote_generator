function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

var currentQuote = '', currentAuthor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=0');
}
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "de4QhiUZ2HmshaWFtUs7qftPreZyp1OFiH6jsnOYZxqIFfJRat",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      if(inIframe())
      {
        $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
      $(".quote-text").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#text').text(r.quote);
      });

      $(".quote-author").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#author').html(r.author);
      });
    }
  });
}
$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
});
