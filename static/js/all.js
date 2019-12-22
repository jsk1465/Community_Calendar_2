// for getting the day from a class list
function getDay(classList){
    for(var i = 0; i<classList.length; i++){
        if(days.indexOf(classList[i])>=0){
            return classList[i];
        }
    }
    console.log(this,"does not contain a day");
    return "";
}

// creates the time class given hours and minutes
function getTimeClass(hour,minutes){
    var strH = parseInt(hour).toString(10);
    var strM = parseInt(minutes)%60 == 30 ? "30" : "00";
    return "t_" + strH + "_" + strM;
}

// this retreives the time class
function getTime(classList){
    for(var i = 0; i<classList.length; i++){
        var time = classList[i];
        if(time.charAt(0)=="t" && time.charAt(1)=="_"){
            var times = time.split("_");
            return times[1] + ":" + times[2];
        }
    }
    console.log(this,"does not contain a time class");
    return "";
}

// for creating the tr/th/td
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