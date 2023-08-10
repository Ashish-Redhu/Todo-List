// JS says whenever you declare a variable inside a class, you have to initialize it at the same time.

// The objects of data class are the tasks that we are adding, deleting, editing.
class data{
    constructor(heading,details,time)
    {
        this.heading=heading;
        this.details=details;
        this.time=time;
    }    
}
let arr=[]; // This array will contain the objects of data class. 
// ---------------------------------------------------------------------------------------



// Add button ----------------------------------------------------------------------------
// Form open code.
function openform1(){
    document.querySelector('.overlay').classList.add('openoverlay');
    document.querySelector('.form1').classList.add('openform');
 }

let add=document.getElementById("button1");
add.addEventListener('click',openform1);

// Form close code.
function closeform1(){
    document.querySelector('.overlay').classList.remove('openoverlay');
    document.querySelector('.form1').classList.remove('openform');
}
let cross=document.getElementById("cross");
cross.addEventListener('click', closeform1);
// ----------------------------------------------------------------------------------------



// Add button of form --------------------------------------------------------------------
function convertTime(timeInput) {
    // const timeInput = document.getElementById("timing").value;
    const timeParts = timeInput.split(":");
    const hours24 = parseInt(timeParts[0]);
    const minutes = timeParts[1];
    
    let hours12 = hours24 % 12;
    if (hours12 === 0) {
      hours12 = 12;
    }
    
    const amPm = hours24 < 12 ? "AM" : "PM";
    
    const convertedTime = `${hours12}:${minutes} ${amPm}`;
    return convertedTime;
  }
function addElements(){

   // To show elements on screen.
    const h=document.getElementById('heading').value; 
    const d = document.getElementById('details').value;
    const tt = document.getElementById('timing').value;
    
    const t=convertTime(tt);
    
    const ob=new data(h,d,t);
    arr.push(ob);
    // The values entered in the form will come in h,d,t. Then we created an object and append the object in array. 
     
    let para1=document.createElement('p');
    let para2=document.createElement('p');
    let para3=document.createElement('p');
     
    para1.textContent=`Time: ${arr[arr.length-1].time}`;
    para2.textContent=`Heading: ${arr[arr.length-1].heading}`;
    para3.textContent=`Details: ${arr[arr.length-1].details}`;

    let divtag=document.createElement('div');

    divtag.appendChild(para1);
    divtag.appendChild(para2);
    divtag.appendChild(para3);
     
    document.getElementById("workcontainer").appendChild(divtag);
    // Then we made 3-paragraphs that will contain the h,d,t values. Then we created one div that will contain all the 3-paras. At the end the div will pe added as a child of workcontain (big div).
    console.log("Ok done");

    // Before storing anything in session/local storage we have to convert it into string.
    const userInputJSON=JSON.stringify(arr[arr.length-1]);
    const keyInputJSON=JSON.stringify(arr[arr.length-1].time);


    // We are not using LocalStorage becuause it is possible that user will refresh, the page after adding some tasks. Then his tasks will be cleared from screen but available in Localstorage which has no meaning.
    // localStorage.setItem(keyInputJSON,userInputJSON);

    // That's why we are using sessionstorage. Valid upto a particular refresh/page change......
    sessionStorage.setItem(keyInputJSON,userInputJSON);
    // Storing the elements in session storage as well. Because it may happen that in future user may want to delete/edit some task. 
    closeform1();
}
let addbutton=document.getElementById("addbuttonform");
addbutton.addEventListener('click',addElements);

// ---------------------------------------------------------------------------------------



// Remove Button: -----------------------------------------------------------------------
function removeElement(){
    document.querySelector('.overlay').classList.add('openoverlay')
    document.querySelector('.form2').classList.add('form2open');
}
let removebutton=document.getElementById("button3");
removebutton.addEventListener('click', removeElement);

// Cross icon of Remove form:
function closeform2(){
    document.querySelector('.overlay').classList.remove('openoverlay');
    document.querySelector('.form2').classList.remove('form2open');
}
let cross2=document.getElementById("cross2");
cross2.addEventListener('click',closeform2);

// Remove button of Remove form:
function removetask(){
    let tt=document.getElementById("time").value;
    let t=convertTime(tt);
    let getelement=sessionStorage.getItem(JSON.stringify(t));
    console.log(t);
    console.log(getelement);
    if(getelement!=null)
    {
        sessionStorage.removeItem(t); 

        // Don't know why. But this below for loop is not letting code working fine.
        // for(let i=0; i<arr.length; i++)
        // {
        //     if(arr[i].time==t)
        //     {remove(arr[i]);}
        // }
        
        // To select all the divs.
        let divs=document.querySelectorAll('#workcontainer > div');
        // Now iterating through each div.
        for(let i=0; i<divs.length; i++)
        {   
            // Storing the div temporarily.
            const tempdiv=divs[i];
            // Selecting first para of each div in every iteration.
            let para=divs[i].querySelector("p");
                if(para!=null && para.textContent.includes(t))
                {
                   tempdiv.remove();
                }
        }

        closeform2();
        alert("Item successfully removed from taskbar.");
        
    }
    else
    {alert("Oops! The item is not present. Check Hours, Minutes, Am/Pm properly.");}
}
let removebuttonform=document.getElementById("removebuttonform");
removebuttonform.addEventListener('click',removetask);



