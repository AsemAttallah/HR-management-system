"use strict";

function Employees (employeeID,fullName,department,level,imageURL){
    this.employeeID =employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
};

Employees.prototype.salary=function(){
   if (this.level=="Senior") {
    return Math.floor(((Math.floor(Math.random() * (2000 - 1500) )) + 1500) * 0.925);
   }
   if (this.level=="Mid-Senior") {
    return Math.floor(((Math.floor(Math.random() * (1500 - 1000) )) + 1000) * 0.925);
   }
   if (this.level=="Junior") {
    return Math.floor(((Math.floor(Math.random() * (1000 - 500) )) + 500) * 0.925) ;
   }
}

Employees.prototype.InfoHome=function(){
    return this.fullName + " " +this.salary();
}

Employees.prototype.render=function(){
    return document.write(`<h4>Employee name is  ${this.fullName} & his net salay is ${this.salary()} $</h4>`);
}

let employee1 = new Employees(1000,"Ghazi Samer","Administration","Senior",  );
let employee2 = new Employees(1001,"Lana Ali","Finance","Senior",  );
let employee3 = new Employees(1002,"Tamara Ayoub","Marketing","Senior",  );
let employee4 = new Employees(1003,"Safi Walid","Administration","Mid-Senior", );
let employee5 = new Employees(1004,"Omar Zaid","Development","Senior",  );
let employee6 = new Employees(1005,"Rana Saleh","Development","Junior",  );
let employee7 = new Employees(1006,"Hadi Ahmad","Finance","Mid-Senior",  );

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();







