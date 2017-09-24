const cardData ={
  cardInfo : ['Profile','Account','Authentication & Users'],
  cardBody :['Pay as you go','Credit Card','221-222-333-44'],
  cardSecondary : ['Renews end of day June 22','Visa ending 4204 · Exp 12/19','Last updated Oct 2016'],
}

function popAnimate(){
  $('.overlay').addClass('show');
  setTimeout(function(){
    $('.show').css('animation-play-state','paused');
  },600);


  setTimeout(function(){
    $('.popup').addClass('appear');

    setTimeout(function(){
      $('.appear').css('animation-play-state','paused');
    },600);
  },200);

  $('.popup-header, .save').click(function(){
      $('.appear').css('animation-play-state','running');
      setTimeout(function(){
        $('.overlay').css('animation-play-state','running');
      },200);

      setTimeout(function(){
        $('.overlay').remove();
      },1000);
    }
  );
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

function chngPswd(){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">Change Password</div>
        <div class="popup-body">
          <label for="other">Previous Password</label>
          <input type="password" id='old-pswd'>
          <label for="other">New Password</label>
          <input type="password" id='new-pswd'>
          <label for="other">Retype new password</label>
          <input type="password" id='retype'>
        </div>
        <div class="popup-footer">
          <!-- <button class="secondary">Cancel</button> -->
          <button class="primary save">Save</button>
        </div>
      </div>
    </div>`
  );
  popAnimate();
}


$(document).ready(function() {
  $('.chng-pswd').click(chngPswd);
});
