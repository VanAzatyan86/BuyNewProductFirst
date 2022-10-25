let userOne = 5000;
let userTwo = 10000;
let pruductOne=1000;
let productTwo=2000;
let productThre=3000;
let pruductValue=pruductOne + productTwo + productThre;
if(pruductValue <= userOne && pruductValue !==0 ){
    let takeChange = userOne-pruductValue;
    if(takeChange == 0){
        console.log("you dont have chang");
    }else{
        console.log(`take change ${takeChange} dr`)
    }    
}else if(pruductValue>userOne && pruductValue<=userTwo){
    let takeChange = userTwo-pruductValue;
    if(takeChange == 0){
        console.log("you dont have chang");
    }else{
        console.log(`take change ${takeChange} dr`)
    }
}else if(pruductValue<=(userOne+userTwo)){
    let takeChange = ((userOne+userTwo)-pruductValue);
    if(takeChange == 0){
        console.log("you dont have chang");
    }else{
        console.log(`take change ${takeChange} dr`)
    }
}else{
     console.log("you cannot buy this product");
}