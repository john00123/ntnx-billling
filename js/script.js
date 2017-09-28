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
            <h4>${cardData.cardInfo[index]}</h4><a>Add Funds</a>
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
        <td><code>2017</code>${billingData.Months[i]}</td>
        <td>$ ${billingData.Ammounts[i]}</td>
    </tr>`);
  }

  $('.balance').append(`$${billingData.Ammounts[0]}`);
  for(let i=0; i<creditData.Ammounts.length; i++){
    $('.prev-creds').append(
      `<tr>
        <td><code>2017</code>${creditData.Months[i]}</td>
        <td><code>+</code>$ ${creditData.Ammounts[i]}</td>
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
    'Add Funds',
    'Tax Documents',
    'Payment',
    'Change Password',
    'Setup Active Directory',
    'Active Directory Options'
  ],

  body: [
    `<code class="count money">853</code>
    <h3 style='margin-bottom:0px'>Reedem code</h3>
    <p style='margin-bottom:10px; width:100%'>Get started by adding some funds to your account</p>
    <input type="text" value='' id='redeem-input' autocomplete='off'>
    `,

    `<h3 class='initial-tax'>Nutanix is required to collect sales tax documents.</h3>
    <p style='margin: -8px 0 20px 0;' class='consult'>Consult a tax advisor if unsure your Nutanix usage is subject to sales tax.</p>

    <label id='tax-label'for="tax">Tax Document number</label>
    <input type="text" id="tax" placeholder='000 000 0000' onkeypress="return event.charCode >= 48 && event.charCode <= 57" style='margin-bottom:20px'/>


    <input type="file" id='file' accept=".xml">
    <label for='path2'>Select file</label>
    <div class='upload-file'>
    <input class='path' readonly type='text' id='path2'></input>
    <label class='file-button' for='file'>Select File</label>
    </div>`,

    `<div id="formDialog" class="formDialog ui-dialog-content ui-widget-content" style="width: auto; min-height: 93.53125px; max-height: none; height: auto;"><div id="zuora_payment_modal"><div id="zuora-container"><div id="credit-card-spinner" style="height: auto"></div><div id="zuora_payment" style="display: inline-block !important"><iframe src="https://apisandbox.zuora.com/apps/PublicHostedPageLite.do?method=requestPage&amp;host=https%3A%2F%2Fdemo-billing.nutanix.com%2Fsummary&amp;signature=QgMIwgm6P7qWt4g6FoJ8TzbA81Vc1f%2F9RkMCeVdZCj4OUAjCyYzmpCKVeb2iqegCFKGVSnm4v1E7Dpr5vlrTO7l1%2Be%2BoEowkb0V55KeTrb3JibrPNztFYfHeT5bb3IxZnOdwb7Sd%2F9hbwj%2BFDGkQWWWLAviJ%2F6lqexOqCEb5n9WaUpPDaHh7Dc2IWZ8rm64UtZPcH%2Fjb506C5N7zJEWie7tBRw9ZwvJLYsw3m2nnWDixvfHtNrU2lOBqsiEnWTzb6PcT8QkW9d6454exI1N3TbkmAbKYPesJv9Z7dqwjWwgAJ%2BFC0DiP0wNePp%2FvmPQ54cakLMIix6u4xxOtlOwkfQ%3D%3D&amp;token=6BC890imMM17lZsEbqnW79QbiW8unHje&amp;tenantId=14890&amp;style=inline&amp;submitEnabled=true&amp;param_supportedTypes=AmericanExpress%2CJCB%2CVisa%2CMasterCard%2CDiscover&amp;paymentGateway=Auth.net&amp;id=2c92c0f95a64a713015a6b19fe65250b&amp;field_passthrough1=0011800000TvduUAAR&amp;field_accountId=2c92c0fb5e7f8f35015e828d8c706aab&amp;customizeErrorRequired=true&amp;" id="z_hppm_iframe" overflow="visible" scrolling="no" frameborder="0" allowtransparency="true" class="z_hppm_iframe" width="375" height="479" style="display: block;"></iframe></div><div class="zuorastatus"><hr class="zuorabluebar"></div></div></div></div>`,

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
    `<button class="primary redeem">Redeem</button>`,
    `<div class='tax-block'>
    <input type="checkbox" id='exempted'>
    <p>I'm exempt from state taxes.</p>
    </div><button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save">Save</button>`,
    `<button class="primary save upload">Upload</button>`,
    `<button class="secondary save">Done</button>`,
  ]
}

function popAnimate(){
  window.scroll(0, 0);
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

function pdfContent(){
  $('body').append(
  `<div class='pdf-chrome'>
  <div class="popup-header pdf-preview"> PDF Previewer</div>
  <object class='invoice' data="pdf/004174.pdf" type="application/pdf">
  <p>Alternative text - include a link <a href="/pdf/004174.pdf">to the PDF!</a></p>
  </object>
  </div>`
);
  window.scroll(0, 0);
  $('html').css('overflow','hidden');
  $('.pdf-preview').click(function(){
    $('.pdf-chrome').remove();
    $('html').css('overflow','');
  })
}

$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.popup-header').click();
  if (e.keyCode === 13) $('.primary').click();
});

//counter
function countNumbers(){
  let j = 0;
  $('.redeem').click(function() {
    if($('#redeem-input').val() === 'NTNX'){
      $('#redeem-input').val('');
      $('.popup-body').before(`<div class='banner'>$4200 have been credited to your account.</div>`);
      $('.banner').toggle();
      $('.popup-header').css('border-bottom','none');
      $('.banner').slideDown();
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
      setTimeout(function(){
        $('.banner').slideUp();
        $('.popup-header').css('border-bottom','');
        setTimeout(function(){
          $('.banner').remove();
        },300);
      },7000);
    }
    else{
      $('.banner').remove();
      $('.popup-body').before(`<div class='banner error-ban'>Invalid code</div>`);
      $('.banner').toggle();
      $('.popup-header').css('border-bottom','none');
      $('.banner').slideDown();

      $('#redeem-input').css('color','#F16363');
      $('#redeem-input').css('border-color','#F16363');
      setTimeout(function(){
        $('#redeem-input').css('border-color','');
        $('#redeem-input').css('color','');
      },3000);
      setTimeout(function(){
        $('.banner').slideUp();
        $('.popup-header').css('border-bottom','');
        setTimeout(function(){
          $('.banner').remove();
        },300);
      },3000);
    }
  });

}

function uploadPath(){
  let one = $(this).val().replace("C:\\fakepath\\",'');
  $('.path').val(one);
}

function ex(){
  checkoff();
  $("input[type='file']").change(uploadPath);
  $('input[type="checkbox"]').click(function() {
    if (this.checked) {
      $('.initial-tax').html(`If you're <code>exempt from state tax</code>, attach an electronic copy of a valid tax exemption certificate authorized by the appropriate taxing authority.`);
      $('#tax, #tax-label, .consult').hide();
      $('.save').click(function(){
        $('.card-body:eq(2) h4').text('Tax exemption uploaded');
      })
    }
    else{
      checkoff();
    }
});
}

function checkoff(){
$('.initial-tax').html(`Nutanix is required to collect sales tax documents.`);
$('#tax, #tax-label, .consult').show()
$('.save').click(function(){
  $('.card-body:eq(2) h4').text('221-222-333-44');
});
}

$(document).ready(function() {
  cardsData();
  chartData();
  tableData();
  $('.card:eq(2) a').click(function(){
    popupContent(1);
    ex();
  });
  $('.card:eq(3) a').click(function(){popupContent(0)});
  $('.card:eq(1) a').click(function(){popupContent(2)});
  $('.prev-bills td:eq(0)').click(pdfContent);
});
