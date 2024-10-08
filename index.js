// Write your solution in this file!
// Object representing an employee
const employee = {
    name: "Modo wa kibiria",
    streetAddress: "South c"
  };
  
  // Function to update an employee object with a new key-value pair without modifying the original object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, // Creates a copy of the employee object
      [key]: value // Adds the new key-value pair to the copy
    };
  }
  
  // Function to update an employee object with a new key-value pair, modifying the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly modifies the original employee object
    return employee;
  }
  
  // Example of destructively updating the employee object
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Kinoo');
  
  // Function to delete a property from an employee object without modifying the original object
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; // Creates a copy of the employee object
    delete newEmployee[key]; // Deletes the specified key-value pair from the copy
    return newEmployee;
  }
  
  // Function to delete a property from an employee object, modifying the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly modifies the original employee object
    return employee;
  }