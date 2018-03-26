var voteId = "1";
$(document).ready(function(){
  $("a[name='search']").click(search)
  $('#full_feature').swipeslider();
});



//======搜索被我设置成一个了 搜索为空就显示全部===================



function search() {
  var keyW = $("#search_ipt").val();
  var url = "/api/vote/"+voteId+"/list-goods?search=" + keyW;
    $.ajax({
              type: "get",
              url: url,
              success: function (data) {
                  console.log(data);
                  //这里需要传递所有的选手的数组
                  var playerData = data.data;
                  creat_html(playerData);
              }
          });
}

function creat_html(data) {
  var html_right = "",
      html_left = "";

  $("#player ul").empty();
  //这他妈的数组取单双的能不能优化一下 暂时用这种垃圾方法了
  var dataEven = data.filter(function(index, value){
      if (index%2==0) {
          return true;
      }
  });
  var dataOdd = data.filter(function(index, value){
      if (index%2!=0) {
          return true;
      }
  });
  for (var i = 0; i < dataEven.length; i++) {
    var goodsId = ataEven[i].goodsId,
        voteCount = ataEven[i].voteCount,
        openId = ataEven[i].openId,
        voteTopic = ataEven[i].voteTopic,
        intro = ataEven[i].intro,
        name = ataEven[i].name,
        image = ataEven[i].image;
  //这里用选手的那个标签作为他的个人主页？我暂时用goodsID
    html_right += "<a href=\"/"+goodsId+".html\"><li>";
    html_right += "<img src=\""+image+"\" alt=\"\">";
    html_right += "<p>"+signOrder+"&nbsp;"+name+"</p>";
    html_right += "<i>投票</i>";
    html_right += "<b>"+voteCount+"票</b>";
    html_right += "</li></a>";
  }
  for (var i = 0; i < dataOdd.length; i++) {
    var goodsId = ataOdd[i].goodsId,
        voteCount = ataOdd[i].voteCount,
        openId = ataOdd[i].openId,
        voteTopic = ataOdd[i].voteTopic,
        intro = ataOdd[i].intro,
        name = ataOdd[i].name,
        image = ataOdd[i].image;
  //这里用选手的那个标签作为他的个人主页？我暂时用goodsID
    html_left += "<a href=\"/"+goodsId+".html\"><li>";
    html_left += "<img src=\""+image+"\" alt=\"\">";
    html_left += "<p>"+signOrder+"&nbsp;"+name+"</p>";
    html_left += "<i>投票</i>";
    html_left += "<b>"+voteCount+"票</b>";
    html_left += "</li></a>";
  }
  $("#left ul").html(html_left);
  $("#right ul").html(html_right);
}

//倒计时
var endDate=new Date("2018-2-16 0:0:0").getTime();
var today = new Date().getTime();

var intDiff = parseInt((endDate - today)/1000);//倒计时总秒数量



function timer(intDiff){
   	window.setInterval(function(){
   	var day=0,
   		hour=0,
   		minute=0,
   		second=0;//时间默认值
   	if(intDiff > 0){
   		day = Math.floor(intDiff / (60 * 60 * 24));
   		hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
   		minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
   		second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
   	}
   	if (minute <= 9) {minute = '0' + minute;}
   	if (second <= 9) {second = '0' + second;}
   	$('#countdown .countdown_list span').eq(0).html(day);
   	$('#countdown .countdown_list span').eq(1).html(hour);
   	$('#countdown .countdown_list span').eq(2).html(minute);
   	$('#countdown .countdown_list span').eq(3).html(second);
   	intDiff--;
   	}, 1000);
}

$(function(){
	timer(intDiff);
});
