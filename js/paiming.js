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
  /**

  清除rank
  $("section").remove()
  $.ajax({
            type: "get",
            url: "/api/vote/1/rank",
            success: function (data) {
                console.log(data);
                //这里需要传递所有的选手的数组
                var playerData = data.data.list;
                rank(playerData);
            }
        });

    **/
});

//接收参数 data.data.list
function rank(data) {
  var html_rank = "";
  for (var i = 0; i < data.length; i++) {
    var goodsId = data[i].goodsId,
        voteCount = data[i].voteCount,
        voteTopic = data[i].voteCount;
    html_rank += "<section>";
    html_rank += "<div class=\"top_box clearfix\">";
    html_rank += "<div class=\"left\">";
    html_rank += "</div>";
    html_rank += "<div class=\"right\">";
    html_rank += "<ul>";
    html_rank += "<li>"+goodsId+"号</li>";
    html_rank += "<li>票数"+voteCount+"</li>";
    html_rank += "<li>"+voteTopic+"</li>";
    html_rank += "</ul>";
    html_rank += "</div>";
    html_rank += "</div>";
    html_rank += "</section>";

  }
  $("body").html(html_rank);
}
