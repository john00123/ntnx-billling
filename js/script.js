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
  },200);

  $('.popup-header, .save').click(function(){
      $('.popup').addClass('disappear');

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


function profile(){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">Profile Information</div>
        <div class="popup-body">
          <label for="other">Name</label>
          <input type="text" value='Lipa Dua' id='old-pswd'>
          <label for="other">Email</label>
          <input type="email" value='dualipa@nutanix.com' id='new-pswd'>
          <label for="other">Phone Number</label>
          <input type="Phone" value='+ 1-(408)-000-0000' id='retype'>
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


function account(){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">Account Information</div>
        <div class="popup-body">
          <label for="other">Company Name</label>
          <input type="text" value='Nutanix Corporate' id='old-pswd'>
          <label for="other">Address</label>
          <input type="Address" value='1740 Technology Drive' id='new-pswd' style='margin-bottom:10px'>
          <input type="Address" value='San Jose, California, 95110, United States' id='new-pswd2' >
          <label for="other">Phone Number</label>
          <input type="Phone" value='+ 1-(408)-000-0000' id='retype'>
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
  $('.profile .card-title a').click(profile);
  $('.account .card-title a').click(account);
});
