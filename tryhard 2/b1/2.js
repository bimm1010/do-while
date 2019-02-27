var i = 0;
var j = 1;
var f;
//////////-----//////////
var num = prompt("nhập ý muốn hiện bao số trong dãy fibo");
document.write(i + "<br/>");
document.write(j +"<br/>");
//////////-------////////////////
for(var o = 3; i < num; i++){
    f = i + j;
    i = j;
    j = f;
    document.write(f + "<br/>");
}
///////////////////////////////////
