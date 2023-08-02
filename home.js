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
let add=document.getElementById("button1");
let workcontainer=document.getElementById("workcontainer");
add.onclick=adding;
let clickcount=0;
function adding(){
    clickcount++;
    let head=prompt("Enter the heading: ");
    let det=prompt("Enter the details: ");
    let tim=prompt("Time on which you want to do the work: ");
    let ob1=new data(head,det, tim);
    arr.push(ob1);

//    workcontainer.appendChild(`Heading=${ob1.heading} Details=${ob1.details} time=${ob1.time}`); This is not the right way to directly append in DOM. First you have to create an element then you can append it.
    
   if((ob1.heading!='' && ob1.time!='') && (ob1.heading!=null && ob1.time!=null))
   {
   let p=document.createElement("p");
   p.textContent=`Heading=${ob1.heading} Details=${ob1.details} time=${ob1.time}  * ${clickcount} *`;
   workcontainer.appendChild(p);
   }
   
}
 


