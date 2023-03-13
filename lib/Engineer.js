
const Employee = require("./Employee");


class Engineer extends Employee {
    // brings in values from Employee.js and adds github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    // returns github input
    getGithub() {
        return this.github;
    }

    
    getRole()  {
        return "Engineer";
    }
}


module.exports = Engineer;