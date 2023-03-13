
class Employee {
   
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    
    // returns name from input
    getName() {
      return this.name;
    }
    
    // returns id from input
    getId() {
      return this.id;
    }
    
    // returns email from input
    getEmail() {
      return this.email;
    }
    
    // returns "Employee" as a string for type of role
    getRole() {
      return "Employee";
    }
    
  }
  

  module.exports = Employee;