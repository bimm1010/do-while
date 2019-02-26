let sout, i, j;
sout = "<table border='4' width='400' cellspacing='3' cellpadding='4'>";
i = j = 1;
while (i <= 10){
    sout = sout + "<tr>";
    while (j <= 10){
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;
}
sout = sout + "</table>";
document.write(sout);