function sdee(event, vow) {
	if(event.length == 0) {
		vow.style.backgroundColor = "#ccc";
		vow.style.color = "#ACACB4";
		return false;
	} else {
		vow.style.backgroundColor = "#1fa5da";
		vow.style.color = "white";
	}
}

function getAjax(url, datas, successcallback, errorcallback) { //被调用的函数
	mui.ajax(url, { //mui.ajax是AJAX的规定前缀写法，后面的url是服务器的路径（库，表等等都在服务器内）
		data: JSON.stringify(datas), //也就是键值对可以
		contentType: "application/json", //解析你的内容是什么格式
		type: "post", //请求发送的方式，有post(快，安全低),get(慢，安全高)
		dataType: "json", //服务器返回的类型是什么，有"xml"(返回XML文档),"html"(返回纯文本HTML信息),"script"(返回纯文本JavaScript代码),"json"(返回JSON数据),"text"(返回纯文本字符串),
		timeout: 10000, //请求超时时间（毫秒），默认值为0，表示永不超时，如果超过请求时间还未依为收到，则失败
		success: function(da) { //正确的回调函数
			successcallback(da.d);
		},
		error: function(xhr, type, errorThrown) { //错误的回调函数
			errorcallback(xhr, type, errorThrown)
		}
	});
}

function setIten(key, value) { //被调用的函数
	plus.storage.setItem(key, value); //存储键值对
}

function deleteMe(event) { //删除购物车商品
	var myComNumber = event.innerHTML;
	var subNumber = myComNumber.substring(44, 45);
	var parNumber = parseInt(subNumber);
	if(confirm("你确认删除吗？")) {
		getAjax(url + "/Delete", { //调用公共函数
				id: 'www',
				table: 'shoppingCartInformation',
				key: 'sopBookID',
				value: parNumber
			},
			function(a) { //成功回调函数
				location.reload();
			},
			function(d) { //失败回调函数
				mui.toast("   失败      ")
			})
		getAjax(url + "/Delete", { //调用公共函数
				id: 'www',
				table: 'orderForm',
				key: 'orderID',
				value: parNumber
			},
			function(c) { //成功回调函数
				location.reload();
			},
			function(d) { //失败回调函数
				mui.toast("   失败      ")
			})
	} else {

	}

}
var men;

function Addend(even) { //商品加
	men = even.previousElementSibling.innerHTML;
	men++;
	even.previousElementSibling.innerHTML = men;
	var parEven = even.parentNode.parentNode.parentNode.parentNode;
	var parPrice = even.parentNode.parentNode;
	var evenPrice = parPrice.childNodes[1].childNodes[1].innerHTML; //获取价格
	var chiParEven = parEven.childNodes[2].childNodes[0].childNodes[1].childNodes[1]; //小计的标签所在
	var chiChe = parEven.childNodes[0].childNodes[0].childNodes[1]; //获取复选框标签
	var evrTotal = document.getElementById("Total").innerHTML;
	var parTotal = parseFloat(evrTotal); // 获取转换为字符型的合计总价
	var parPrice = parseFloat(evenPrice); // 获取转换为字符型的价格
	chiParEven.innerHTML = men * evenPrice;
	if(chiChe.checked == true) {
		document.getElementById("Total").innerHTML = parTotal + parPrice;
	} else {

	}

}

function Meiosis(meng) { //商品减
	men = meng.nextSibling.innerHTML;
	if(men == 1) {
		return false;
	} else {
		men--;
		meng.nextSibling.innerHTML = men;
		var parEven = meng.parentNode.parentNode.parentNode.parentNode;
		var parPrice = meng.parentNode.parentNode;
		var evenPrice = parPrice.childNodes[1].childNodes[1].innerHTML;
		var chiParEven = parEven.childNodes[2].childNodes[0].childNodes[1].childNodes[1];
		var chiChe = parEven.childNodes[0].childNodes[0].childNodes[1]; //获取复选框标签
		var evrTotal = document.getElementById("Total").innerHTML;
		var parTotal = parseFloat(evrTotal); // 获取转换为字符型的合计总价
		var parPrice = parseFloat(evenPrice); // 获取转换为字符型的价格
		chiParEven.innerHTML = men * evenPrice;
		if(chiChe.checked == true) {
			document.getElementById("Total").innerHTML = parTotal - parPrice;
		} else {

		}
	}
}
var several = 0;

function Selected(evenr) { //当当网选中和为选中的存值案例
	if(evenr.checked == true) {
        several++;
		var myTime = new Date();
		var myTotal = document.getElementById("Total").innerHTML;
		var myBianhao = evenr.nextSibling.innerHTML; //商品ID号
		var evrPar = evenr.parentNode.parentNode.parentNode; //获取父节点
		var evrSubtotal = evrPar.childNodes[2].childNodes[0].childNodes[1].childNodes[1].innerHTML; //获取子节点
		var evrPrice = evrPar.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerHTML; //获取价格
		var evrName = evrPar.childNodes[1].childNodes[1].childNodes[0].innerHTML; //获取名称
		var evrNumber = evrPar.childNodes[1].childNodes[1].childNodes[2].childNodes[2].innerHTML; //数量
		var imgSrc = evrPar.childNodes[1].childNodes[0].childNodes[0].src; //图片路径
		var parTotal = parseInt(myTotal); //总价1
		var parSubtotal = parseInt(evrSubtotal); //小计价格
		if(parTotal < 0) {
			document.getElementById("Total").innerHTML = 0;
		} else {
			var zongjia = document.getElementById("Total").innerHTML = parTotal + parSubtotal;
		}
		var userNameID = plus.storage.getItem('sopUserID');
		document.getElementById("jiesuan").innerHTML=several;
	} else {
		several--;
		var myTime = new Date();
		var myBianhao = evenr.nextSibling.innerHTML; //商品ID号
		var myTotal = document.getElementById("Total").innerHTML;
		var evrPar = evenr.parentNode.parentNode.parentNode;
		var evrSubtotal = evrPar.childNodes[2].childNodes[0].childNodes[1].childNodes[1].innerHTML;
		var parTotal = parseInt(myTotal); //总价
		var parSubtotal = parseInt(evrSubtotal); //小计价格
		if(parTotal < 0) {
			document.getElementById("Total").innerHTML = 0;
		} else {
			document.getElementById("Total").innerHTML = parTotal - parSubtotal;
		}
		document.getElementById("jiesuan").innerHTML=several;
	}

	var bankNote = document.getElementById("Total").innerHTML;
	var parNote = parseFloat(bankNote);
	if(parNote == 0) {
		document.getElementById("Settlement").style.backgroundColor = "#ccc";
	} else {
		document.getElementById("Settlement").style.backgroundColor = "orangered"
	}

}

function deleteOrder(event) {
	var evtOddNumbers = event.previousElementSibling.innerHTML;
	if(confirm("你确认删除吗？")) {
		getAjax(url + "/Delete", {
				id: 'www',
				table: 'orderForm',
				key: 'ordCommodityID',
				value: evtOddNumbers
			},
			function(ment) {
				mui.toast("   成功        ");
				location.reload();
			},
			function(en) {
				mui.toast("   失败        ");
			}
		)
	} else {

	}

}
var mycomNumber;

function myevaluate(eventr) {
	mycomNumber = eventr.previousElementSibling.innerHTML;
	mui('.mui-popover').popover('toggle');
}

var men = null;

function change(event) {
	document.getElementById("wwww").style.backgroundColor = "#F3F3F3";
	document.getElementById("wwww").style.borderLeft = "3px solid #f3f3f3";
	if(men != null) {
		men.style.backgroundColor = "#f3f3f3";
		men.style.borderLeft = "3px solid #f3f3f3";
	}
	event.style.backgroundColor = "#fff";
	event.style.borderLeft = "3px solid orangered";
	men = event;
}