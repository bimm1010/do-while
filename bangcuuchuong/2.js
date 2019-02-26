var cc;
cc = "<table border='1' width='300' cellspacing= '0' cellpadding= '3'>";
for ( i = 1; i <= 9; i++){
    cc = cc + "<tr>";
    for (j = 2; j <= 9; j++){
        cc = cc + "<td>" + j + "x" + i + "=" + i * j + "</td>";
    }
    cc = cc +"</tr>";
}
cc = cc + "</table>";
document.write(cc);