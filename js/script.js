
function dragon() {
  var cardInfo = ['Account type','Payment type','Tax documents'];

  var cardBody = ['Pay as you go','Credit Card','221-222-333-44'
  ];
  var cardSecondary = ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016' ];
  var cards = cardInfo.length;
  var index = 0;

  // function
  while (cards> 0){
    $('.deck').append(
      "<div class='card'><div class='card-title'><h4>"+cardInfo[index]+"</h4></div>" +
        "<div class='card-body'><h4>"+ cardBody[index]+"<h4>\
        <p>"+cardSecondary[index]+"</p>\
        </div>\
      </div>"
    );
    cards--;
    index++;
  }
}

$(document).ready(function() {
  dragon();
});
