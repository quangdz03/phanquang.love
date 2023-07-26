function giaiphuongtrinh(){
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2"),value;
    if(a==''|| b==''){
        alert(`bạn hãy nhập số`);
        return false;
    }
    a= Number(a);
    b= Number(b);
    if(a==0){
        alert(`phương trình lỗi`)
        return false;
    }
    else{
        let x = parseFloat(-b)/a;
        document.getElementById("button").innerHTML = x;
    }
}