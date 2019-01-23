$(document).ready(function() {
  suits.forEach(function(sweet){
    values.forEach(function(value){
      cards.push(" " + value + " of " + sweet );
      $("." + sweet).text(filterItems(sweet));
    });
  });
  const noComma = cards.join('\n');
  alert(noComma);
});
// Variables
const suits = ["spades", "clubs", "hearts", "diamonds"];
const values= ["2","3","4","5","6","7","8","9","10", "Jack", "Queen", "King", "Ace"];
let cards = [];
function filterItems(query) {
  return cards.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};
