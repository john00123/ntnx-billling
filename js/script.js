const cardData ={
  cardInfo : ['Current plan','Payment type','Tax documents','Available Credit'],
  cardBody :['Pay as you go','Credit Card','221-222-333-44', '$5000.00'],
  cardSecondary : ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016', 'Add credits'],
}

const billingData ={
  Months
  :['December','November','October','February  <a>Trial</a>','January <a>Trial</a>'],
  Ammounts :['3780.00','2827.00','3100.00','0.00','0.00'],
}

const usageData ={
  Title:['CPU hours','Data encryption','Support fees'],
  Numbers :['15000','1000','-'],
  Ammounts :['750.00','600.00','135.00'],
}

const creditData ={
  Months:['September','January'],
  Ammounts :['3000.00','2000.00'],
}

// creates cards
function cardsData() {
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

// adds points to the chart and hover behavior
function chartData(){
  var july=31;
  for(i = 31; i >= 1; i--){
    if (i <= 9){ i = '0'+ i; }
    $('.x-values').append("<p>"+ i +"</p>");
  }

  $('.x-values p').hover(function(){
    $(this).append(`<kbd class='tooltip-graph'>
    $${billingData.Ammounts[0]}</kbd>`);
    }, function(){
    $(this).find('kbd').remove();}
  );

  $('.x-values p').click(function(){
    $('.click').remove();
    $(this).append("<span class='tooltip-graph click'>$3780.00</span>");
  })

  $('.trend').mouseleave(function(){
    $('.click').remove();
  })
}

// adds data to the table and graphs

function tableData(){
  for(let i=0; i<billingData.Ammounts.length; i++){
    $('.prev-bills').append(
      `<tr>
        <td><code>2017</code> ${billingData.Months[i]}</td>
        <td>$ ${billingData.Ammounts[i]}<kbd>•</kbd></td>
    </tr>`);
  }

  $('.balance').append(`$${billingData.Ammounts[0]}`);
  for(let i=0; i<creditData.Ammounts.length; i++){
    $('.prev-creds').append(
      `<tr>
        <td><code>2017</code> ${creditData.Months[i]}</td>
        <td><code>+</code> $ ${creditData.Ammounts[i]}<kbd>•</kbd></td>
    </tr>`);
  }

  for(let i=0; i<usageData.Ammounts.length; i++){
    $('.usage').append(
      `<tr>
        <td> ${usageData.Title[i]}</td>
        <td> ${usageData.Numbers[i]}</td>
        <td> $ ${usageData.Ammounts[i]}</td>
    </tr>`);
  }
}





$('.first-layer').click(function() {
  $('.first-layer').addClass('back-layer');
  setInterval(function(){
    $('.second-layer').addClass('appear');
  },100);
});


$('.deck:eq(0)').click(function(){
  $('.overlay').addClass('show');
  $('.first-layer').addClass('appear');
});


$(document).ready(function() {
  cardsData();
  chartData();
  tableData();
});
