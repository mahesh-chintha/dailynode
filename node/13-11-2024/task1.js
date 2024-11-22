var otp=function(n){
    var out=""
    for(var i=0;i<n;i++){
    var y=Math.floor(Math.random()*10)
        out+=y
    }
    return out
}


export default otp;