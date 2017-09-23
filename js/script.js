const cardData ={
  cardInfo : ['Profile','Account','Authentication & Users'],
  cardBody :['Pay as you go','Credit Card','221-222-333-44'],
  cardSecondary : ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016'],
}

function dragon() {
  var cards = cardData.cardInfo.length;
  var index = 0;
  // function
  while (cards> 0){
    $('.deck').append(
      `<div class='card'>
        <div class='card-title'>
          <h4>${cardData.cardInfo[index]}</h4>
        </div>
        <div class='card-body'>
          <h4>${cardData.cardBody[index]}</h4>
          <p>${cardData.cardSecondary[index]}</p>
        </div>
      </div>`);

      if(cards === 3){
        $('.deck').append(
          `<div class='card'>
            <div class='card-title'>
              <h4>${cardData.cardInfo[index]}</h4>
            </div>
            <div class='card-body'>
              <h4>${cardData.cardBody[index]}</h4>
              <h4>${cardData.cardSecondary[index]}</h4>
            </div>
          </div>`
      )};
    cards--;
    index++;
  }
}

$(document).ready(function() {
  // dragon();
  $('.chng-pswd').click(function(){
    $(this).css('color','red');
  });
});
