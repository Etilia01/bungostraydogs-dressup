window.onload = () => {
    target1.style.display = 'none'
    target2.style.display = 'none'
    target3.style.display = 'none'
    target4.style.display = 'none'
    target5.style.display = 'none'
    target6.style.display = 'none'
    target7.style.display = 'none'
    target8.style.display = 'none'
    target9.style.display = 'none'
    target10.style.display = 'none'
    target11.style.display = 'none'
    target12.style.display = 'none'
    target13.style.display = 'none'
}
const target1= document.getElementById("shirt1");
const target2= document.getElementById("shirt2");
const target3= document.getElementById("shirt3");
const target4= document.getElementById("shirt4");
const target5= document.getElementById("shirt5");
const target6= document.getElementById("hair1");
const target7= document.getElementById("hair2");
const target8= document.getElementById("hair3");
const target9= document.getElementById("hair4");
const target10= document.getElementById("hair5");
const target11= document.getElementById("hair6");
const target12= document.getElementById("hair7");
const target13= document.getElementById("hair8");
let shirt= 0;

function toggle1(){
    if (shirt==0) {
        target1.style.display = 'block'
        target5.style.display = 'none'
        shirt = 1
    }
    else{
       if (shirt==1) {
        target2.style.display = 'block'
        target1.style.display = 'none'
        shirt = 2
       } else {
        if (shirt==2) {
        target3.style.display = 'block'
        target2.style.display = 'none'
        shirt = 3  
        } else {
        if (shirt==3) {
        target4.style.display = 'block'
        target3.style.display = 'none'
        shirt = 4  
        } else {
          if (shirt==4) {
        target5.style.display = 'block'
        target4.style.display = 'none'
        shirt = 0  
       
       } 
       
       }
     
    }
}
}
}

function toggle2(){
    if (shirt==0) {
        target1.style.display = 'block'
        target5.style.display = 'none'
        shirt = 1
    }
    else{
       if (shirt==1) {
        target2.style.display = 'block'
        target1.style.display = 'none'
        shirt = 2
       } else {
        if (shirt==2) {
        target3.style.display = 'block'
        target2.style.display = 'none'
        shirt = 3  
        } else {
        if (shirt==3) {
        target4.style.display = 'block'
        target3.style.display = 'none'
        shirt = 4  
        } else {
          if (shirt==4) {
        target5.style.display = 'block'
        target4.style.display = 'none'
        shirt = 0  
       
       } 
       
       }
     
    }
}
}
}

function toggle3(){
    if (target3.style.display === 'block') {
        target3.style.display = 'none'
    }
    else{
       target3.style.display = 'block'
     
    }
}
