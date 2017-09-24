const popupData ={
  title :[
    'Multifactor Authentication',
    'Account Information',
    'Profile Information',
    'Change Password'],

  body: [
    `<h1>Improve your account security with a 2 step verification process</h1>
    <p>Each time you sign in you'll need your password and a verification code sent directly to a phone.</p>`,

    `<label for="other">Company Name</label>
    <input type="text" value='Nutanix Corporate' id='old-pswd'>
    <label for="other">Address</label>
    <input type="Address" value='1740 Technology Drive' id='new-pswd' style='margin-bottom:10px'>
    <input type="Address" value='San Jose, California, 95110, United States' id='new-pswd2' >
    <label for="other">Phone Number</label>
    <input type="Phone" value='+ 1-(408)-000-0000' id='retype'>`,

    `<label for="other">Name</label>
    <input type="text" value='Lipa Dua' id='old-pswd'>
    <label for="other">Email</label>
    <input type="email" value='dualipa@nutanix.com' id='new-pswd'>
    <label for="other">Phone Number</label>
    <input type="Phone" value='+ 1-(408)-000-0000' id='retype'>`,

    `<label for="other">Previous Password</label>
    <input type="password" id='old-pswd'>
    <label for="other">New Password</label>
    <input type="password" id='new-pswd'>
    <label for="other">Retype new password</label>
    <input type="password" id='retype'>`
  ],

  footer:[
    `<button class="secondary">Cancel</button>
     <button class="primary save">Enable</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`]
}


function popAnimate(){
  $('.overlay').addClass('show');

  setTimeout(function(){
    $('.popup').addClass('appear');
  },200);

  $('.popup-header, .save, .secondary').click(function(){
      $('.popup').addClass('disappear');
      $('.overlay').addClass('peek');
      $('.overlay').removeClass('show');

      setTimeout(function(){
        $('.overlay').remove();
      },400);
    }
  );
}

function popupContent(i){
  $('body').append(
    `<div class="overlay" style='opacity:0'>
      <div class="popup" style='opacity:0'>
        <div class="popup-header">${popupData.title[i]}</div>
        <div class="popup-body">${popupData.body[i]}</div>
        <div class="popup-footer">${popupData.footer[i]}</div>
      </div>
    </div>`
  );
  popAnimate();
}

$(document).ready(function() {
  $('.chng-pswd').click(function(){popupContent(3)});
  $('.profile .card-title a').click(function(){popupContent(2)});
  $('.account .card-title a').click(function(){popupContent(1)});
  $('.enable-mult-auth').click(function(){popupContent(0)});
});
