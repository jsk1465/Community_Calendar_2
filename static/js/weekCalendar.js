// static globals
// classes
var clsWeekDayClicked = "weekDayClick";
var clsWeekDay = "weekDay";
var clsMonday = "Monday";
var clsTuesday = "Tuesday";
var clsWednesday = "Wednesday";
var clsThursday = "Thursday";
var clsFriday = "Friday";
var clsTime = "time";
var clsTimes = "times";
var clsCalendar = "calendar";
var clsWeekDayHead = "weekDayTr";
var clsUpperTime = "upperTime";
var clsLowerTime = "lowerTime";
// tags
var tagTr = "tr";
var tagTd = "td";
var tagTh = "th";

// data
var extraSpace = "&nbsp;";
var days = [clsMonday,clsTuesday,clsWednesday,clsThursday,clsFriday];

// dynamic globals
var initState = null;

function handleDown(){
    initState = this;
}

function handleUp(){
    var day = getDay(this.classList);
    if(getDay(initState.classList) == day){
        // highlight all days in between including down & up positions
        var timeO = getTime(initState.classList);
        var timeF = getTime(this.classList);
        var timeO_split = timeO.split(":");
        var timeF_split = timeF.split(":");
        var hourO = parseInt(timeO_split[0]);
        var hourF = parseInt(timeF_split[0]);
        var minuO = parseInt(timeO_split[1]);
        var minuF = parseInt(timeF_split[1]);
        if(hourO<6){
            hourO+=12;
        }
        if(hourF<6){
            hourF+=12;
        }
        var minH = null;
        var minM = null;
        if(hourO == hourF) {
            minH = hourO;
            if(minuO > minuF){
                minM = minuF;
            } else {
                minM = minuO;
            }
        } else if(hourO > hourF) {
            minH = hourF;
            minM = minuF;
        } else {
            minH = hourO;
            minM = minuO;
        }
        
        // set up
        var extraVal = (minuF == 30 ? 1 : 0) - (minuO == 30 ? 1 : 0);
        var length = Math.abs(hourF-hourO)*2 + extraVal;
        var curH = minH%12;
        curH = curH == 0 ? 12 : curH;
        var curM = minM;
        
        for(var i = 0; i <= length; i++){
            var className =  getTimeClass(curH,curM);
            var elem = document.getElementsByClassName(className+ " " + day)[0];
            if(elem.classList.contains(clsWeekDayClicked)){
                elem.classList.remove(clsWeekDayClicked);
            }
            else {
                elem.classList.add(clsWeekDayClicked);
            }
            curM+=30;
            if(curM%60==0){
                curH= (curH + 1)%12;
                if(curH==0){
                    curH = 12;
                }
            }
        }
    }
}

function getTimeClass(hour,minutes){
    var strH = parseInt(hour).toString(10);
    var strM = parseInt(minutes)%60 == 30 ? "30" : "00";
    return "t_" + strH + "_" + strM;
}

function getDay(classList){
    for(var i = 0; i<classList.length; i++){
        if(days.indexOf(classList[i])>=0){
            return classList[i];
        }
    }
    console.log(this,"does not contain a day");
    return "";
}

function getTime(classList){
    for(var i = 0; i<classList.length; i++){
        var time = classList[i];
        if(time.charAt(0)=="t" && time.charAt(1)=="_"){
            var times = time.split("_");
            return times[1] + ":" + times[2];
        }
    }
    console.log(this,"does not contain a time");
    return "";
}

window.onload = function(){
    genHead();
    genBody();
    
    var weekDays = document.getElementsByClassName(clsWeekDay);

    for(var i = 0; i<weekDays.length; i++){
        var weekDay = weekDays[i];
        weekDay.addEventListener("mouseup",handleUp);
        weekDay.addEventListener("mousedown",handleDown);
    }
    // set up touch
    function startup(){
        for(var i = 0; i<weekDays.length; i++){
            var weekDay = weekDays[i];
            weekDay.addEventListener("touchstart",handleDown);
            weekDay.addEventListener("touchend",handleUp);
        }
    }
    document.addEventListener("DOMContentLoaded", startup);
}

function getSelected(){
    var clickedItems = document.getElementsByClassName(clsWeekDayClicked);
    var data = [];
    for(var i = 0; i<clickedItems.length;i++){
        var classList = clickedItems[i].classList;
        // get cur day and time for the given item
        var day = "";
        var time = "";
        for(var i = 0; i < classList.length; i++){
            var test = classList[i];
            if(days.indexOf(test)>=0){
                day = test;
            } else if(test.charAt(0) == "t" && time.charAt(1)=="_"){
                var times = test.split("_");
                time = times[1] + ":" + times[2];
            }
        }
        // append it to the list
        var item = {"time":time,"day":day};
        data.push(item);
    }
    return data;
}

function genHead(){
    // debugger;
    var content = startTag(tagTr,clsWeekDayHead);
    var headTimeTag = getTimeClass(0,0);
    content+=createTag(tagTh,concatClasses([clsTime,headTimeTag]),"");
    for(var i = 0; i < days.length; i++){
        var day = days[i];
        var tags = [day,headTimeTag];
        content+=createTag(tagTh,concatClasses(tags),day);
    }
    content+=finishTag(tagTr);
    document.getElementsByClassName(clsCalendar)[0].children[0].innerHTML = content;
}

function createTime(hr,min,isLast){
    var minStr = min == 0 ? "00" : "30";
    var time = hr.toString() + ":" + minStr;
    var timeCls =  "t_" + hr.toString() + "_" + minStr;
    var classes = [clsTime,timeCls];
    
    var content = startTag(tagTd,concatClasses(classes));
    var outerContent = extraSpace;
    if(isLast){
        var nextHr = (hr + 1)%12;
        nextHr = nextHr == 0 ? 12 : nextHr;
        outerContent = min == 30 ? (nextHr).toString() + ":00" : (hr).toString() + ":30";
    }
    content += createTag("div",clsUpperTime,time) + createTag("div",clsLowerTime,outerContent);
    content += finishTag(tagTd);
    return {content:content,clsTime:timeCls};
}

function genBody(){
    var content = "";
    
    // var maxHours = 8*2 + 9;
    var curHour = 9;
    var curMin = 0;
    while(!(curHour==4 && curMin == 30)){
        var timeData = createTime(curHour,curMin);
        content += getRowContent(timeData.clsTime,timeData.content);

        // update time
        curMin+=30;
        if(curMin == 60){
            curMin = 0;
            curHour = (curHour + 1)%12;
            if(curHour == 0){
                curHour = 12;
            }
        }
    }
    var timeData = createTime(curHour,curMin,true);
    content += getRowContent(timeData.clsTime,timeData.content);

    document.getElementsByClassName(clsCalendar)[0].children[1].innerHTML = content;
}

function getRowContent(timeCls,timeContent){
    var content = startTag(tagTr,"") + timeContent;
    for(var i = 0; i < days.length; i++){
        var day = days[i];
        var classes = [clsWeekDay,timeCls,day];
        content+=createTag(tagTd,concatClasses(classes),"");
    }
    content+=finishTag(tagTr);
    return content;
}

function concatClasses(list){
    return list.join(" ");
}

function createTag(tag,className,content){
    return startTag(tag,className) + content + finishTag(tag);
}

function startTag(tag,className){
    var dataCls = className == "" ? "" : "class='" + className + "'";
    return "<"+tag +" " + dataCls+ ">";
}

function finishTag(tag){
    return "</"+tag + ">";
}