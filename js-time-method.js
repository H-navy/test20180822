/* 
js关于时间部分的方法 
*/

var seats = function(n){ //时间加0
    return Number(n) < 10 ? '0' + n : n;
}
// 取前一个月的第一天
var beforeMonthFirstDay = function(){
    var nowdays = new Date();
    var y = nowdays.getFullYear();
    var m = nowdays.getMonth();
    if (m == 0) {
        m = 12;
        y = y - 1;
    }
    if (m < 10) {
        m = "0" + m;
    }
    return y + m + "01";
}

//取当前天数的前后多少天
var nowAheadAfterDay = function(){
    //此方法不是很完善，在面对30或者是31的时候会出错
    var dd = new Date(); 
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth()+1;//获取当前月份的日期 
    var d = dd.getDate(); 
    return seats(y) + seats(m) + seats(d);
}


// 获取前一天或者是后一天的时间
var nowBeforeAfterDay = function(){
    var  curDate = new Date();
    var preDate = new Date(curDate.getTime() - 24*60*60*1000); //前一天
    var nextDate = new Date(curDate.getTime() + 24*60*60*1000); //后一天 
}

//将字符串形式的日期转换成日期对象
var stringChangeDay = function(strTime){
    //var strTime="2011-04-16";  //字符串日期格式           
    var date= new Date(Date.parse(strTime.replace(/-/g,   "/"))); //转换成Data();
    var y = date.getFullYear(); 
    var m = date.getMonth()+1;//获取当前月份的日期 
    var d = date.getDate(); 
    return y + m + d ;

}
//git提交测试

