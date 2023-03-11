"use strict";
var all =[];
function Employees (idNumber,fullName,department,level,URL){
    this.employeeID =idNumber ;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=URL;
    this.salary=this.salarys();
    all.push(this);
};

Employees.prototype.salarys=function(){
   if (this.level=="Senior") {
     this.salary=getRndInteger(1500, 2000);
   }
   if (this.level=="Mid-Senior") {
     this.salary=getRndInteger(1000, 1500);
   }
   if (this.level=="Junior") {
     this.salary=getRndInteger(500, 1000);
   }
   return this.salary=Net(this.salary);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let idNumber=getRndInteger(1100, 9000);

function Net(salary){
        return salary=Math.floor((salary*0.925));
 };
 let secsec=document.createElement("section");
 let main = document.getElementById("ma");
 secsec.style.background="#FFFFFF";
Employees.prototype.render=function(){
    let imgEl=document.createElement("img");
    imgEl.src=this.imageURL;
    imgEl.style.width="300px";
    secsec.appendChild(imgEl);

    let h4El=document.createElement("h4");
    h4El.textContent=`- Employee name : ${this.fullName}`;
    secsec.appendChild(h4El);

    let h4El2=document.createElement("h4");
    h4El2.textContent=`- Department : ${this.department}`;
    secsec.appendChild(h4El2);

    let h4El3=document.createElement("h4");
    h4El3.textContent=`- Level : ${this.level}`;
    secsec.appendChild(h4El3);

    let h4El4=document.createElement("h4");
    h4El4.textContent=`- ID Num. : ${this.employeeID}`;
    secsec.appendChild(h4El4);

    let h4El5=document.createElement("h4");
    h4El5.textContent=`- Net salay : ${this.salary} $`;
    secsec.appendChild(h4El5);

    let hrEl=document.createElement("hr");
    secsec.appendChild(hrEl);

    let brEl=document.createElement("br");
    main.appendChild(brEl);

    main.appendChild(secsec);
   
    
}

let employee1 = new Employees(1000,"Ghazi Samer","Administration","Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true");
let employee2 = new Employees(1001,"Lana Ali","Finance","Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let employee3 = new Employees(1002,"Tamara Ayoub","Marketing","Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let employee4 = new Employees(1003,"Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let employee5 = new Employees(1004,"Omar Zaid","Development","Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let employee6 = new Employees(1005,"Rana Saleh","Development","Junior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let employee7 = new Employees(1006,"Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");


function caller (all){
    for (let i=0;i<all.length;i++){
        all[i].render();
    }
}
caller(all);

let form =document.getElementById("form");
form.addEventListener("submit",submitting);
function submitting(event) {
    event.preventDefault();
    // alert("form successfully submitted")
    let fName=event.target.fName.value;
    let Department=event.target.department.value;
    let Level=event.target.level.value;
    let URL=event.target.imgUrl.value;
    // console.log(fName);
    // console.log(Department);
    // console.log(Level);
    // console.log(URL);

    let employee= new Employees(idNumber++,fName,Department,Level,URL);
    employee.render();
};














