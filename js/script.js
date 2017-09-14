const cardData ={
  cardInfo : ['Account type','Payment type','Tax documents'],
  cardBody :['Pay as you go','Credit Card','221-222-333-44'],
  cardSecondary : ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016'],
}

const billingData ={
  Months
  :['December','November','October','September','August','July','June','May','April','March','February','January'],
  Ammounts :['2023.00','2827.00','3100.00','2908.00','2789.03','2499.00','3154.79','3200.00','3170.00','3048.43','2999.03','3317.32'],
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
      </div>`
    );
    cards--;
    index++;
  }
}

function chartData(){
  var july=31;
  for(i=01; i<=july; i++){
    if (i<=9){
      i = '0'+i;
    }
    $('.x-values').append("<p>"+ i +"</p>");
  }

  $('.x-values p').mouseenter(function(){
    $(this).append("<kbd class='tooltip-graph'>$3780.00</kbd>");
  })

  $('.x-values p').mouseleave(function(){
    $(this).find('kbd').remove();
  })

  $('.x-values p').click(function(){
    $('.click').remove();
    $(this).append("<span class='tooltip-graph click'>$3780.00</span>");
  })

  $('.trend').mouseleave(function(){
    $('.click').remove();
  })
}

function tableData(){

  for(let i=0; i<billingData.Ammounts.length; i++){
    $('tbody').append(
      `<tr>
        <td>2017 / ${billingData.Months[i]}</td>
        <td>$ ${billingData.Ammounts[i]}
        <kbd>•</kbd>
        </td>
    </tr>`);
  }
}


$(document).ready(function() {
  dragon();
  chartData();
  tableData();
});
