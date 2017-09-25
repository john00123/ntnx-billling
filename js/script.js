const popupData ={
  title :[
    'Multifactor Authentication',
    'Account Information',
    'Profile Information',
    'Change Password',
    'Setup Active Directory',
    'Active Directory Options'
  ],

  body: [
    `<h3 style='margin-bottom:5px'>Improve your account security with a 2 step verification process</h3>
    <p>Each time you sign in you'll need your password and a verification code sent directly to a phone.</p>`,

    `<label for="other">Company Name</label>
    <input type="text" value='Nutanix Corporate' id='old-pswd'>
    <label for="other">Address</label>
    <input type="Address" value='1740 Technology Drive' id='new-pswd' style='margin-bottom:15px'>
    <input type="Address" value='San Jose, California, 95110, United States' id='new-pswd2' >
    <label for="other">Phone Number</label>
    <input type="Phone" value='(408) 000 0000' id='retype'>`,

    `<label for="other">Name</label>
    <input type="text" value='Lipa Dua' id='old-pswd'>
    <label for="other">Email</label>
    <input type="email" value='dualipa@nutanix.com' id='new-pswd'>
    <label for="other">Phone Number</label>
    <input type="Phone" value='(408) 000 0000' id='retype'>`,

    `<label for="other">Previous Password</label>
    <input type="password" id='old-pswd'>
    <label for="other">New Password</label>
    <input type="password" id='new-pswd'>
    <label for="other">Retype new password</label>
    <input type="password" id='retype'>`,

    `<h3>To enable Active Directory Federation Services in <b>Nutanix Corporate</b> a <code>&nbsp;FederationMetadata.xml&nbsp;</code> file is required.</h3>\
    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>
    <div class='upload-file'>
    <input class='path' readonly type='text' id='path2'></input>
    <label class='file-button' for='file'> Choose File</label>
    </div>
    `,

    `<h3 style='margin-bottom:5px'>Disable Federated Authentication</h3>
    <p>Allows login with you company Active Directory credentials</p>
    <button class="primary">Disable</button>
    <div class='separator'></div>
    <h3 style='margin-bottom:5px'>Remove AD</h3>
    <p>Remove AD for this account, this will render all access for the AD users and groups invalid type 'DELETE' to proceed.</p>
    <input type="text" class='confirm-deletion' id='remove'>
    <button class="primary delete">Remove</button>`
  ],

  footer:[
    `<button class="secondary">Cancel</button>
     <button class="primary save">Enable</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save upload">Upload</button>`,
    `<button class="secondary save">Done</button>`,
  ]
}

function popAnimate(){
  $('.overlay').addClass('show');
  $('html').css('overflow','hidden');
  setTimeout(function(){
    $('.popup').addClass('appear');
  },200);

  $('.popup-header, .save, .secondary').click(function(){
      $('.popup').addClass('disappear');
      $('.overlay').addClass('peek');
      $('.overlay').removeClass('show');
      $('html').css('overflow','');
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

function uploadPath(){
  let one = $(this).val().replace("C:\\fakepath\\",'');
  $('.path').val(one);
}

$(document).ready(function() {
  $('.AD .card-title a').click(function(){popupContent(5)});
  $('.adfs').click(function(){popupContent(4)
    $("input[type='file']").change(uploadPath);
  });
  $('.chng-pswd').click(function(){popupContent(3)});
  $('.profile .card-title a').click(function(){popupContent(2)});
  $('.account .card-title a').click(function(){popupContent(1)});
  $('.enable-mult-auth').click(function(){popupContent(0)});
});
