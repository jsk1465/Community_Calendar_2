window.onload = function(){
    genHead();
}

function genHead(){
    // debugger;
    var content = startTag(tagTr,clsWeekDayHead);
    for(var i = 0; i < days.length; i++){
        var day = days[i];
        var tags = [day];
        content+=createTag(tagTh,concatClasses(tags),day);
    }
    content+=finishTag(tagTr);
    document.getElementsByClassName(clsCalendar)[0].children[0].innerHTML = content;
}

function addDays(month,year){
    var t_0 = new Date(year,month,1);
    var t_f_date = new Date(year,month+1,0).getDate();
    var t = t_0;
    var content = "";
    while(t.getDate()<t_f_date){
        var t_day = t.getDay();
        if(day==0){
            content += startTag("tr","");
            continue;
        } else if(day==6) {
            content += finishTag("tr");
            continue;
        } else {
            var innerContent = t.getDay().toString();
            content += createTag("td","",innerContent);
        }
        t.setDate(t.getDate()+1);
    }
    return content;
}