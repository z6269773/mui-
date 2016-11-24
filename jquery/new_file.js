$(document).ready(function(){
	$("#btnBlock").click(function(){
		var strVlue = document.getElementById("txtAerea").value;
		var mYthis = new Date;
		var myGetYear = mYthis.getYear();
		var myMonth = mYthis.getMonth();
		var myDate = mYthis.getDate();
		var myHours = mYthis.getHours();
		var myMinutes = mYthis.getMinutes();
		var mySeconds = mYthis.getSeconds();
		var totalTime = myGetYear+"年"+myMonth+"月"+myDate+"日"+myHours+"时"+myMinutes+"分"+mySeconds+"秒";	
		$("#tianjia").prepend("<div class='addRows'>"+
		                       "<div class='totaltime'>"+totalTime+"</div>"+
		                       "<div class='mingzi'>"+"<span class='mingzi_span'></span>"+"<span style='position:absolute; top:0px; left:30px;'>我是Vip用户</span>"+"</div>"+
		                       "<div class='lenrong'>"+strVlue+"</div>"
		                       + "</div>");
		$("#tianjia").prepend("");
	});
});
