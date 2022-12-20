function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}

function timer(){
    let hour=document.getElementById("hr");
    let minute=document.getElementById("min");
    let second=document.getElementById("sec");
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    hour.innerText=`${numberFormat(hr)}`;
    minute.innerText=`${numberFormat(min)}`;
    second.innerText=`${numberFormat(sec)}`;
    // setMessage(hr%12||12);
    if(hr>=12 && min>=00 && sec>=01){
        let am=document.getElementById("am");
        am.innerText="PM";
    }
    else{
        am.innerText="AM";
    }
}
setInterval(function(){
    timer()
},1000);


let btn=document.getElementById("alarm");
btn.addEventListener("click",function(){
    const wt=document.getElementById("wt").value;
    const ft=document.getElementById("ft").value;
    const nt=document.getElementById("nt").value;
    const st=document.getElementById("st").value;
        let wat=document.getElementById("wat");
        wat.innerText=wt;
        debugger;
        let lut=document.getElementById("lut");
        lut.innerText=ft;
        let nat=document.getElementById("nat");
        nat.innerText=nt;
        let slt=document.getElementById("slt");
        slt.innerText=st;
})