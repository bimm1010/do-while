let value = null;

do{
    value = prompt('nhập só từ 1 -->10');
}while (value < 1 || value > 10);
alert('số bạn vừa nhập là' + value);