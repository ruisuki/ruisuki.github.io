var wrap = document.getElementsByClassName('wrap')[0];
var cards = wrap.getElementsByClassName('card')


for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mousemove', function () {
    removeActive()
    this.className = "card active"
  })
}

function removeActive() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].className = "card";
  }
}