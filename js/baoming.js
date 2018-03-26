var voteID = "1";
function checkMobile(str) {
  var re = /^1\d{10}$/
  if (re.test(str)) {
    $("#tel_ipt").parent().css("borderColor","#bbb")
  } else {
    $("#tel_ipt").parent().css("borderColor","red")
  }
}

$(function() {
    $("#tel_ipt").on('input propertychange',
    function(e) {
        var tel_num = $(this).val();
        checkMobile(tel_num);
        console.log(tel_num);
    });
})

function myData() {
  var slogan = $("#slogan_ipt").val();
  var intro = $("#introduction").val();
  var name = $("#name_ipt").val();
  var tel = $("#tel_ipt").val();
  var address_1 = $("#select_add").val();
  var address_2 = $("#address_all").val();
  var address_all = address_1 + "," +address_2;

  var data = {
    "openId": "1234",
    "voteTopic": slogan,
    "intro": intro,
    "name": name,
    "tel": tel,
    "address": address_all,
    "image": ""
  }

  return data;
}


function file_data() {
  var formData = new FormData($("#form-data" )[0]);
  $.ajax({
          url: 'http:' ,
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function (returndata) {
              alert(returndata);
          },
          error: function (returndata) {
              alert(returndata);
          }
     });
   }
