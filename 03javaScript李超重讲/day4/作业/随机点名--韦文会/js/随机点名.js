

var isRun=true;
var a = ["吴闻","刘世颖","俞钧龙","钟利民","陈键","程建政","邓晓丰","傅超军","李城",
    		 "刘驰誉","刘文兵","马红亮","张超凡","韦文会","钟伟伟","周喜良","朱何优",
    		 "贾亚丽","李家盛","陈峰","李君","刘志明","孙志亮",];
var a2 = new Array();
    
function action(str){
    var s = document.getElementById("bt").value;
    if(s=="开始点名"){
        isRun=true;
        run();
        document.getElementById("bt").value="结束点名";
    }else{
        isRun=false;
        document.getElementById("bt").value="开始点名";
    }
}
function run(){
    var i = Math.floor(Math.random() * a.length+ 1)-1;
    document.getElementById("show").innerHTML=a[i];
    if(isRun==false){
        var b =true;
        for(var j in a2){
            if(a2[j]==i){
                b=false;
            }
        }
        if(b){
            a2[a2.length]=i;
            return;
        }
    }
    setTimeout("run()",10);
}