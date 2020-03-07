let today = new Date();
let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let timeDisplay = (`The time now is ${currentTime}.`);
document.write(timeDisplay);


let nm1 = document.testform.num1;
let nm2 = document.testform.num2;

///function Math(nm1, nm2){

//    this.nm1 = nm1;
//    this.nm2 = nm2;
//}

       let total = nm1 + nm2;
  //      document.write(add);

document.write("<br /><br />Total: <br /><em>" + total);
