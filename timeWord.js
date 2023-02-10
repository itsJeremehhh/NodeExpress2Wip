//writting out the logic for the timeword prompt
//input would be a string
//logic for reading time.

function isMidnight(hour, minute) {
    let time = `${hour}:${minute}`;

    if (time === "00:00") {
             console.log("midnight")   
        }
        return time;
}

function isNoon(hour, minute){
    let time = `${hour}:${minute}`;

    if (time === "12:00"){
        console.log("noon")
    }
}

function isAm(hour) {
    let hour = " ";

    if(hour > "11") {
        console.log("am")
    } 
    if (hour < "23") {
        console.log({'error': 'number to big'})
    } else {
        console.log("pm")
    }
    return hour;
}

function minuteReader(number) {
    let number = " ";
    if(number > "10"){
        console.log("oh")
    }
    if(number === 01) {
        console.log("oh one")
    }
    ///etc..
}
//we will need to figure out a way to loop through the number parameter. then make a logic where we can split the parameter 

function numberReader(number) {
    let number = " ";
    for(let num in number){
        num.split(" ")
        if(num.split().index(0) === "0"){
            console.log("oh")
        }
    }
    return number;
}