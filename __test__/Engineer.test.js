
const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");


test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
});


test("Can set github via contructor arguments", () => {
   
    const testValue = "Undrcver";
   
    const e = new Engineer("Undrcver", 100, "loualicea@hotmail.com", testValue);
   
    expect(e.github).toBe(testValue);
});

// test for getters
test("Can get github via getGithub()", () => {
  
    const testValue = "Undrcver";
  
    const e = new Engineer("Undrcver", 100, "loualicea@hotmail.com", testValue);

    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
   
    const e = new Engineer("Undrcver", 100, "loualicea@hotmail.com", "Undrcver");
 
    expect(e.getRole()).toBe("Engineer");
});