function sum(){
    let a = document.getElementById("number 1").value;
    let b = document.getElementById("number 2").value;

    if(a ==''|| b == ''){
        alert(` vui longf nhập vào 2 số `);
        return false;
    }
    // ép kiểu dữ liệu 
    a = Number(a);
    b = Number(b);
    if(isNaN(a)|| isNaN(b)){
        alert(`bạn phải nhập 2 số`);
        return false;
    }
    let sum = parseInt(a) + b;
    document.getElementById("result").innerHTML = sum;
}