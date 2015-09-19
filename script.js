var prevQuoteIndex = 0,
  randomQuotes = [{
    quote: "I want to believe that the past is done with us the moment we are done with it.",
    character: "Sun Bak"
  }, {
    quote: "Do you think other animals spend as much as us wishing for things they know they'll never get?",
    character: "Capheus 'Van Damme'"
  }, {
    quote: "What is human? An ability to reason? To imagine? To love or grieve? If so, we are more human than any human ever will be.",
    character: "Jonas Maliki"
  }, {
    quote: "Some things in our lives are inevitable.",
    character: "Wolfgang Bogdanow"
  }, {
    quote: "Look, love is not something we wind up, something we set or control. Love is just like art: a force that comes into our lives without any rules, expectations or limitations. Love like art, must always be free.",
    character: "Hernando"
  }, {
    quote: "Impossibility is a kiss away from reality.",
    character: "Amanita"
  }, {
    quote: "Death doesn't let you say goodbye. It just carves holes in your life, in your future, in your heart.",
    character: "Riley Blue"
  }, {
    quote: "Without the past, there would be nothing to think about, let alone someone to think it.",
    character: "Abraham"
  }, {
    quote: "It’s not the drugs that make a drug addict, it’s the need to escape reality.",
    character: "Riley Blue"
  }, {
    quote: "I’m one of those people who’s comfortable with the idea that there’s more going on in this world that we don’t understand than all the things that we do.",
    character: "Grace"
  }, {
    quote: "In this country, sometimes the only place you can find a brave and honest woman is in prison.",
    character: "Prisoner 818"
  }, {
    quote: "He's my brother. And not by something as accidental as blood...by something much stronger. By choice.",
    character: "Wolfgang Bogdanow"
  }, {
    quote: "At a certain point, I realized there's a huge difference between what we work for and what we live for.",
    character: "Nomi Marks"
  }, {
    quote: "This is what life is: fear, rage, desire...love. To stop feeling emotions, to stop wanting to feel them, is to feel...death.",
    character: "Sun Bak"
  }, {
    quote: "The real violence, the violence I realized was unforgivable, is the violence that we do to ourselves, when we’re too afraid to be who we really are.",
    character: "Nomi Marks"
  }, {
    quote: "Our existence depends on sheer implausibility.",
    character: "Abraham"
  }, {
    quote: "I was suddenly struck by her beauty and the knowledge that...all beauty is temporary. Decay and death haunt every breath we take.",
    character: "Lito Rodriguez"
  }, {
    quote: "I take everything I am feeling, everything that matters to me...I push all of it into my fist, and I fight for it.",
    character: "Sun Bak"
  }, {
    quote: "There are worse things than dying.",
    character: "Wolfgang Bogdanow"
  }, {
    quote: "The bed keeps you in the slum. The flat screen takes you out.",
    character: "Capheus 'Van Damme'"
  }, {
    quote: "For a long time, I was afraid to be who I am because I was taught by my parents that there’s something wrong with someone like me. Something offensive, something you would avoid, maybe even pity. Something that you could never love. I was afraid of this parade because I wanted so badly to be a part of it. So today, I’m marching for that part of me that was once too afraid to march. And for all the people who can’t march… the people living lives like I did. Today, I march to remember that I’m not just a me. I’m also a we. And we march with pride.",
    character: "Nomi Marks"
  }, {
    quote: "Sometimes...you make a mistake. You've got two choices: you live with it, or you fix it.",
    character: "Wolfgang Bogdanow"
  }, {
    quote: "That day, I learned life and death are always so mixed up together, in the same way some beginnings are endings, and some endings become beginnings",
    character: "Capheus 'Van Damme'"
  }, {
    quote: "The pleasure of your love must become your own. But at the same time, you must also remain...selfish, because wanting someone so much that it feels the same as the need...to eat...or to breathe...this is where desire becomes love, I guess.",
    character: "Lito Rodriguez"
  }, {
    quote: "I have this feeling I'm going to have a really good day today.",
    character: "Capheus 'Van Damme'"
  }, {
    quote: "I used to be like you. Like an exposed nerve of a broken tooth. I used anything I could to insulate. Music...books...booze. Anything I could keep myself separate from the rest of the world. Eventually I felt protected, you know, I...I felt safe. But also...I never felt so...completely alone.",
    character: "Nyx"
  }, {
    quote: "We, like these books, or these diamonds, have the secrets of our past hidden inside us.",
    character: "Abraham"
  }, {
    quote: "It's obedience, not resistance. That's the glue of every country, every army, every religion in the world.",
    character: "Felix"
  }, {
    quote: "In the end, we will all be judged by the courage of our hearts.",
    character: "Hernando"
  }]

function getNewQuote() {
  var randomQuoteIndex = 0;

  function getRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomQuoteIndex = getRandomRange(0, randomQuotes.length);

  //function to avoid getting same quote twice in a row
  while (randomQuoteIndex === prevQuoteIndex) {
    randomQuoteIndex = getRandomRange(0, randomQuotes.length);
  }
  prevQuoteIndex = randomQuoteIndex;

  document.getElementById('quote').innerHTML = randomQuotes[randomQuoteIndex].quote;
  document.getElementById('character').innerHTML = '<i>' + randomQuotes[randomQuoteIndex].character + '</i>'
}

function shareTwitter() {
  var tweetText = randomQuotes[prevQuoteIndex].quote + " -" + randomQuotes[prevQuoteIndex].character,
      tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText);
  
  if(tweetText.length > 140) {
    alert('Sorry. This quote is too long to tweet.');
  } else {
    window.open(tweetLink, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', getNewQuote);
document.getElementById('new-quote-button').addEventListener('click', getNewQuote);
document.getElementById('twitter-button').addEventListener('click', shareTwitter);