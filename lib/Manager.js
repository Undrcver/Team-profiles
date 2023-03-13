// accepts export from Employee.js
const Employee = require("./Employee");


class Manager extends Employee {
    // brings in values from Employee.js and adds office number
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

  
    getOfficeNumber() {
        return this.officeNumber;
    }

   
    getRole()  {
        return "Manager";
    }
}


module.exports = Manager;