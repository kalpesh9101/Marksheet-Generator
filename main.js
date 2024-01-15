function getData() {
    var fullName = document.getElementById('fullname').value;
    var mothername = document.getElementById('mothername').value;
    var seatNo = document.getElementById('seatNo').value;
    var prnNo = document.getElementById('prnNo').value;
    var m1 = Number(document.getElementById('python').value);
    var m2 = Number(document.getElementById('java').value);
    var m3 = Number(document.getElementById('dotnet').value);
    var m4 = Number(document.getElementById('javascript').value);
    checkEmpty(fullName);
    checkEmpty(mothername);
    checkEmpty(prnNo);
    checkEmpty(seatNo);
    checkEmpty1(m1);
    checkEmpty1(m2);
    checkEmpty1(m3);
    checkEmpty1(m4);
    document.getElementById('fullnameD').innerHTML=fullName;
    document.getElementById('mothernameD').innerHTML=mothername;
    document.getElementById('seatNoD').innerHTML=seatNo;
    document.getElementById('prnNoD').innerHTML=prnNo;
    document.getElementById('pythonM').innerHTML=m1;
    document.getElementById('javaM').innerHTML=m2;
    document.getElementById('dotM').innerHTML=m3;
    document.getElementById('jsM').innerHTML=m4;

    document.getElementById('pythonG').innerHTML=getGrade(m1);
    document.getElementById('javaG').innerHTML=getGrade(m2);
    document.getElementById('dotG').innerHTML=getGrade(m3);
    document.getElementById('jsG').innerHTML=getGrade(m4);

    var total=m1+m2+m3+m4;
    document.getElementById('total').innerHTML=total;
    document.getElementById('tgrade').innerHTML=getGrade(total);
    document.getElementById('sgpa').innerHTML=getSgpa(total);
    document.getElementById('percentage').innerHTML=total/4+" %";
    if(m1<=39 || m2<=39 ||m3<=39 ||m4<=39 ){
        document.getElementById('sgpa').innerHTML="ATKT";
        document.getElementById('tgrade').innerHTML="F";
    }
    if(m1===0 && m2===0 &&m3===0 &&m4===0 ){
        document.getElementById('sgpa').innerHTML="F";
        document.getElementById('tgrade').innerHTML="F";
    }
}

function getGrade(m){
    if(m>70){
        return 'O';
    }
    else if(m>60){
        return 'A';
    }
    else if(m>50){
        return 'B';
    }
    else if(m>40){
        return 'C';
    }
    else{
        return 'F';
    }
}

function getSgpa(total){
    var percentage=total/4;
    var SGPA=(percentage+7.5)/10
    return SGPA;
}
function checkEmpty(item){
    if (item==='') {
        alert('Please fill in all the required fields.');
        hideDive();
    }
    else{
        showDive();
    }
}
function checkEmpty1(item){
    if (item<0) {  
        alert('Please fill in all Marks.');
        hideDive();
    }
    else if(item>100){
        alert('Maximum Marks should be 100');
        hideDive();
    }
    else{
        showDive();
    }
}
function showDive(){
    document.getElementById("marksheet").style.visibility = 'visible';
    return;
}
function hideDive(){
    document.getElementById("marksheet").style.visibility = 'hidden';
    return;
}
function printDiv(divId) {
    var content = document.getElementById(divId).innerHTML;
    var myWindow = window.open('', 'Print', 'height=600,width=800');

    myWindow.document.write('<html><head><title>Marksheet</title>');
    myWindow.document.write('<link rel="stylesheet" href="style.css">');
    myWindow.document.write('</head><body>');
    myWindow.document.write(content);
    myWindow.document.write('</body></html>');
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();
}


