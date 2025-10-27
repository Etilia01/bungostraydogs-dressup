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
    target14.style.display = 'none'
    target15.style.display = 'none'
    target16.style.display = 'none'
    target17.style.display = 'none'
    target19.style.display = 'none'
    target20.style.display = 'none'
    target21.style.display = 'none'
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
const target14= document.getElementById("hair9");
const target15= document.getElementById("pants1");
const target16= document.getElementById("pants2");
const target17= document.getElementById("pants3");
const target18= document.getElementById("base1");
const target19= document.getElementById("base2");
const target20= document.getElementById("base3");
const target21= document.getElementById("base4");
let shirt= 0;
let hair= 0;
let pants=0;
let skin=0;

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
    if (hair==0) {
        target6.style.display = 'block'
        target13.style.display = 'none'
        hair = 1
    }
    else{
       if (hair==1) {
        target7.style.display = 'block'
        target6.style.display = 'none'
        hair = 2
       } else {
        if (hair==2) {
        target8.style.display = 'block'
        target7.style.display = 'none'
        hair = 3  
        } else {
        if (hair==3) {
        target9.style.display = 'block'
        target14.style.display = 'block'
        target8.style.display = 'none'
        hair = 4  
        } else {
          if (hair==4) {
        target10.style.display = 'block'
        target9.style.display = 'none'
        target14.style.display = 'none'
        hair = 5
          }
        else {
          if (hair==5) {
        target11.style.display = 'block'
        target10.style.display = 'none'
        
        hair = 6 
       
       } 
       else {
          if (hair==6) {
        target12.style.display = 'block'
        target11.style.display = 'none'
        
        hair = 7  
       
       } 
       else {
          if (hair==7) {
        target13.style.display = 'block'
        target12.style.display = 'none'
        
        hair = 0  
       
       } 
       
       }
       }
       
       }
     
    }
}
}
}
}

function toggle3(){
    if (pants==0) {
        target15.style.display = 'block'
        target17.style.display = 'none'
        pants = 1
    }
    else{
       if (pants==1) {
        target16.style.display = 'block'
        target15.style.display = 'none'
        pants = 2
       } else {
        if (pants==2) {
        target17.style.display = 'block'
        target16.style.display = 'none'
        pants = 0  
        } 
}
        }
    }

function toggle4(){
    if (skin==0) {
        target18.style.display = 'block'
        target21.style.display = 'none'
        skin = 1
    }
    else{
       if (skin==1) {
        target19.style.display = 'block'
        target18.style.display = 'none'
        skin = 2
       } else {
        if (skin==2) {
        target20.style.display = 'block'
        target19.style.display = 'none'
        skin = 3  
        } else {
        if (skin==3) {
        target21.style.display = 'block'
        target20.style.display = 'none'
        skin = 0  
        } 
}
}     
        }
    }

