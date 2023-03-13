
const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set office number via constructor arguments", () => {
   
    const testValue = "123-456-7890";

    const e = new Manager("Undrcver", 100, "loualicea@hotmail.com", testValue);

    expect(e.officeNumber).toBe(testValue);
});

// test for getters
test("Can get office number via getOfficeNumber()", () => {
  
    const testValue = "123-456-7890";
  
    const e = new Manager("Undrcver", 100, "loualicea@hotmail.com", testValue);
   
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    
    const e = new Manager("Undrcver", 100, "loualicea@hotmail.com", "123-456-7890");
  
    expect(e.getRole()).toBe("Manager");
});