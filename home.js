// JS says whenever you declare a variable inside a class, you have to initialize it at the same time.

class data{
    constructor(heading,details,time)
    {
        this.heading=heading;
        this.details=details;
        this.time=time;
    }    
}

let arr=[];
// let add=document.getElementById("button1");
// let workcontainer=document.getElementById("workcontainer");
// add.onclick=adding;
// let clickcount=0;
// function adding(){
//     clickcount++;
//     let head=prompt("Enter the heading: ");
//     let det=prompt("Enter the details: ");
//     let tim=prompt("Time on which you want to do the work: ");
//     let ob1=new data(head,det, tim);
//     arr.push(ob1);

// //    workcontainer.appendChild(`Heading=${ob1.heading} Details=${ob1.details} time=${ob1.time}`); This is not the right way to directly append in DOM. First you have to create an element then you can append it.
    
//    if((ob1.heading!='' && ob1.time!='') && (ob1.heading!=null && ob1.time!=null))
//    {
//    let p=document.createElement("p");
//    p.textContent=`Heading=${ob1.heading} Details=${ob1.details} time=${ob1.time}  * ${clickcount} *`;
//    workcontainer.appendChild(p);
//    }
   
// }
 


// Add button ----------------------------------------------------------------------------------------------
// Form open code.
function openform(){
    document.querySelector('.overlay').classList.add('openoverlay');
    document.querySelector('.form').classList.add('openform');
 }

let add=document.getElementById("button1");
add.addEventListener('click',openform);


// Form close code.
function closeform(){
    document.querySelector('.overlay').classList.remove('openoverlay');
    document.querySelector('.form').classList.remove('openform');
}
let cross=document.getElementById("cross");
cross.addEventListener('click', closeform);
// ---------------------------------------------------------------------------------------------------------


// Add button of form
function addElements(){
   // Show elements on screen.
    const h=document.getElementById('heading').value; 
    const d = document.getElementById('details').value;
    const t = document.getElementById('timing').value;
    const ob=new data(h,d,t);
    arr.push(ob);
    let para=document.createElement('p');
    // Both of the below will work.
    // 1.) 
    // para.textContent=`Heading=${ob.heading}, Details=${ob.details}, Time=${ob.time}`;
    // 2.) 
    para.textContent=`Heading=${arr[arr.length-1].heading}, Details=${arr[arr.length-1].details}, Time=${arr[arr.length-1].time}`;
    document.getElementById("workcontainer").appendChild(para);
    console.log("Ok done");
    const userInputJSON=JSON.stringify(arr[arr.length-1]);
    const keyInputJSON=JSON.stringify(arr[arr.length-1].heading);
    localStorage.setItem(keyInputJSON,userInputJSON);
    closeform();
}
let addbutton=document.getElementById("addbuttonform");
addbutton.addEventListener('click',addElements);






