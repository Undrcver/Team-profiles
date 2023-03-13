// bring in employee
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});


test("Can set name via constructor arguments", () => {
   
    const testValue = "Undrcver";

    const e = new Employee(testValue);

    expect(e.name).toBe(testValue);
});

test("Can set id via constructor argument", () => {
    
    const testValue = 100;
  
    const e = new Employee("Foo", testValue);
   
    expect(e.id).toBe(testValue); 
});

test("Can set email via constructor argument", () => {

    const testValue = "loualicea@hotmail.com";
    
    const e = new Employee("Undrcver", 100, testValue);
    
    expect(e.email).toBe(testValue);
});


test("Can get name via getName()", () => {
   
    const testValue = "Alicea";
    
    const e = new Employee(testValue);
   
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  
    const testValue = 100;
  
    const e = new Employee("Undrcver", testValue);
   
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
   
    const testValue = "loualicea@hotmail.com";
 
    const e = new Employee("Undrcver", 100, testValue);
   
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    
    const e = new Employee("Undrcver", 100, "loualicea@hotmail.com");
    
    expect(e.getRole()).toBe("Employee");
});