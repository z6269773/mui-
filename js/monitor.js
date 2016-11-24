//使用正则表达式去除字符串中的标点符号，并将字符串分解至数组的函数
var chkStrOld = function(strOld) {
	//去除字符串中的标点符号
	strOld = strOld.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\，|\。|\<|\.|\>|\/|\?]/g, "");
	//分解字符串中的字符存入数组
	var obj = strOld.replace(/(.)(?=[^$])/g, "$1,").split(",");
    return obj;
}

var getGrade=function(rate){
			var grade;
			if (rate<60) {
				grade="你的pia teng话好low哦";
			} 
			else if(rate>=60 && rate<80)
			{
				grade="你一般般子咯";
			}
			else{
				grade="你好棒哦big bang";
			}
			return grade;
		}