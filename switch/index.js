let x = 0;
let bulb; 

switch (x) {
    case 0:
        bulb = "Light is off";
        console.log(bulb);
        break;
    case 1: 
        bulb = "Ligh is on";
        console.log(bulb);
        break;
    default:
        bulb = "There is no bulb plugged";
        console.log(bulb)


}

let accountStatus = 100;
let treshold;

switch(accountStatus) {
    case 0:
        treshold = "You do not have funds to complete this transfer"
        console.log(treshold);
        break;
    case 50:
        treshold = `You have ${accountStatus}, pay attention not to go below this amount`;
        console.log(treshold);
        break;
    default:
        treshold = `You have ${accountStatus}`;
        console.log(treshold);
        break;
}