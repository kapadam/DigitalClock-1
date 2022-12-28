function numberFormat(n){
    return n > 9 ? "" + n: "0" + n;
}

function timer(){
    let hour=document.getElementById("hr");
    let minute=document.getElementById("min");
    let second=document.getElementById("sec");
    let date=new Date();
    let hr=date.getHours();
    hour.innerText = `${numberFormat(hr%12||12)}`;
    let min=date.getMinutes();
    minute.innerText =`${numberFormat(min)}`;
    let sec=date.getSeconds();
    second.innerText = `${numberFormat(sec)}`;
  
    let am=document.getElementById("am");
    
    if(hr>=12 && min>=00 && sec>=01){
        
      am.innerText="PM";
    }
    else{
      am.innerText="AM";
    }
    setMessage(numberFormet(hr%12||12),am.innerText);
}

setInterval(function(){
    timer()
},1000);


// let btn=document.getElementById("alarm");
// btn.addEventListener("click",function(){
//     const wt=document.getElementById("wt").value;
//     const ft=document.getElementById("ft").value;
//     const nt=document.getElementById("nt").value;
//     const st=document.getElementById("st").value;
//         let wat=document.getElementById("wat");
//         wat.innerText=wt;
//         let lut=document.getElementById("lut");
//         lut.innerText=ft;
//         let nat=document.getElementById("nat");
//         nat.innerText=nt;
//         let slt=document.getElementById("slt");
//         slt.innerText=st;
// })

let wakeUpTimeTable = document.getElementById('wake-up-time-table');
let lunchTimeTable = document.getElementById('lunch-time-table');
let napTimeTable = document.getElementById('nap-time-table');
let nightTimeTable = document.getElementById('night-time-table');
let setBtn = document.getElementById('alarm');
let timeTableArray = [];
function timeTable(timeEventArray) {
    //event.target -->it gets you the targeted element
    //event.target.value --> it will give u the value of the selected option
    //event.target.selectedOptions will give you the collection of all the options that you have
    //selected
    let array = document.getElementById('time-show').getElementsByTagName('p');
    for(let i =0;i<array.length;i++) {
        for(let j =0;j<timeEventArray.length;j++) {
            if(array[i].getElementsByTagName('span')[0].innerText === timeEventArray[j].timeText) {
                array[i].getElementsByTagName('span')[1].innerText = timeEventArray[j].timeEvent;
            }
        }
    }

    let hour = d.getHours();
    let timeUnit = hour >= 12 ? 'PM' : 'AM';
    let grabmessage  = document.getElementById('grab');
    let Image    = document.getElementById('Img').getElementsByTagName('img');

    for(let i=0;i<timeEventArray.length;i++) {
        if(timeEventArray[i].timeEvent.split(" ")[0].includes(numberFormat(hour % 12 || 12)) && timeEventArray[i].timeEvent.split(" ")[0].includes(timeUnit)) {
            if(timeEventArray[i].timeText === "Wake Up Time : ") {
                grabmessage.innerText = 'GRAB SOME HEALTHY BREAKFAST';
                Image[0].src = 'morning.png';
            } else if(timeEventArray[i].timeText === "Lunch Time : ") {
                grabmessage.innerText = `LET'S HAVE SOME LUNCH !!`;
                Image[0].src = 'lunch.png';
            } else if(timeEventArray[i].timeText === "Nap Time : ") {
                grabmessage.innerText = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!';
                Image[0].src = 'evening.png';
            } else if(timeEventArray[i].timeText === "Night Time : ") {
                grabmessage.innerText = 'CLOSE YOUR EYES AND GO TO SLEEP';
                Image[0].src = 'sleep.png';
            } else {
                grabmessage.innerText = 'Take care of yourself';
                Image[0].src = 'default.jpg';
            }
        }
    }
}
wakeUpTimeTable.addEventListener("change", function(event) {
    let obj = {
        timeText: document.getElementById('time-show').getElementsByTagName('p')[0].getElementsByTagName('span')[0].innerText,
        timeEvent: event.target.selectedOptions[0].innerText
    }

    timeTableArray.push(obj);
});

lunchTimeTable.addEventListener("change", function(event){
    let obj = {
        timeText: document.getElementById('time-show').getElementsByTagName('p')[1].getElementsByTagName('span')[0].innerText,
        timeEvent: event.target.selectedOptions[0].innerText
    }

    timeTableArray.push(obj);
});

napTimeTable.addEventListener("change", function(event){
    let obj = {
        timeText: document.getElementById('time-show').getElementsByTagName('p')[2].getElementsByTagName('span')[0].innerText,
        timeEvent: event.target.selectedOptions[0].innerText
    }

    timeTableArray.push(obj);
});

nightTimeTable.addEventListener("change", function(event){
    let obj = {
        timeText: document.getElementById('time-show').getElementsByTagName('p')[3].getElementsByTagName('span')[0].innerText,
        timeEvent: event.target.selectedOptions[0].innerText
    }

    timeTableArray.push(obj);
});

setBtn.addEventListener('click', function() {
    timeTable(timeTableArray);
});
function setMessage(hour, timeUnit) {
    let heading= document.getElementById('heading');

    if((hour >=10 || hour < 12) && timeUnit === 'AM') {
        heading.innerText = 'GOOD MORNING!! WAKE UP !!';
    } else if((hour >= 12 || hour < 4) && timeUnit === 'PM') {
        heading.innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP';
    } else if((hour >=4 || hour < 8) && timeUnit === 'PM') {
        heading.innerText = 'GOOD EVENING !!';
    } else {
        heading.innerText = 'GOOD NIGHT !!';
    }
}