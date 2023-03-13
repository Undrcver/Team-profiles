
const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set school via constructor arguments", () => {

    const testValue = "TU";
    
    const e = new Intern("Undrcver", 100, "loualicea@hotmail.com", testValue);
 
    expect(e.school).toBe(testValue);
});

// test for getters
test("Can get school via getSchool()", () => {

    const testValue = "TU";

    const e = new Intern("Undrcver", 100, "loualicea@hotmail.com", testValue);
    
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    
    const e = new Intern("Undrcver", 100, "loualicea@hotmail.com", "TU");
  
    expect(e.getRole()).toBe("Intern");
});
