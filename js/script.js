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
          <h4>${cardData.cardInfo[index]}</h4><a>Edit</a>
        </div>
        <div class='card-body'>
          <h4>${cardData.cardBody[index]}</h4>
          <p>${cardData.cardSecondary[index]}</p>
        </div>
      </div>`
    );

    if (index == 3){
      $('.card:eq(3)').html(
        `<div class='card-title'>
            <h4>${cardData.cardInfo[index]}</h4><a>Add Credits</a>
          </div>
          <div class='card-body'>
            <h4>${cardData.cardBody[index]}</h4>
            <p>${cardData.cardSecondary[index]}</p>
          </div>`
      );
    }

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

// Popup

const popupData ={
  title :[
    'Add Credit',
    'Account Information',
    'Profile Information',
    'Change Password',
    'Setup Active Directory',
    'Active Directory Options'
  ],

  body: [
    `<h3 style='margin-bottom:5px'>Improve your account security with a 2 step verification process</h3><span class="count">853</span>
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
    <h3 style='margin-bottom:5px'>Remove ADFS</h3>
    <p>Remove AD for this account, this will render all access for the AD users and groups invalid type 'DELETE' to proceed.</p>
    <input type="text" class='confirm-deletion' id='remove'>
    <button class="primary delete">Remove</button>`
  ],

  footer:[
    `<button class="primary save">Enable</button>`,
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
  countNumbers();
}


//counter
function countNumbers(){
  $('.count').click(function () {
    $('.count').each(function () {
      var $this = $(this);
      $({ Counter:$this.text() }).animate(
        { Counter:4900 }, {
        duration: 600,
        step: function () {
          $this.text(Math.ceil(this.Counter)+100);
        }
     });
    });
  });
}


$(document).ready(function() {
  cardsData();
  chartData();
  tableData();
  $('.card:eq(0) a').click(function(){popupContent(0)});
});
