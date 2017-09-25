const userData={
  Emails:['a','b','c','d','e','f'],
  Roles:['Admin','Admin','Owner','User','User','User'],
}

const adData={
  Groups:['Medical','Technology','Finance','Engineering','Marketing','Design'],
  Roles:['Owner','Admin','Owner','User','User','User'],
}

// adds data to the table and graphs

function tableData(){
  for(let i=0; i<userData.Roles.length; i++){
    $('.prev-bills').append(
      `<tr>
        <td><input class="checkBox" type="checkbox">${userData.Emails[i]}@nutanix.com</td>
        <td>${userData.Roles[i]}<kbd>•</kbd></td>
    </tr>`);
  }

  for(let i=0; i<adData.Roles.length; i++){
    $('.groups').append(
      `<tr>
        <td><input class="checkBox" type="checkbox">${adData.Groups[i]}</td>
        <td>${adData.Roles[i]}<kbd>•</kbd></td>
    </tr>`);
  }
}

function selectAll(){
  $('#checkBox0').click(function(){
    $(".checkBox").prop('checked', $(this).prop('checked'));
    if($(".checkBox").prop('checked')){
      $('#maindrop').removeAttr('disabled');
    }
  });
};



$(document).ready(function() {
  tableData();
  selectAll();
});
