 // Declare the part codes
let code1 = "ACME:123-1";
let code2 = "DI:12345-M";
let code3 = "ACE:1-12";

// Define the functions
function getSupplier(code) {
  let colonIndex = code.indexOf(":");
  return code.substring(0, colonIndex);
}

function getProductNumber(code) {
  let colonIndex = code.indexOf(":");
  let dashIndex = code.indexOf("-");
  return code.substring(colonIndex + 1, dashIndex);
}

function getSize(code) {
  let dashIndex = code.indexOf("-");
  return code.substring(dashIndex + 1);
}

// Call the functions for each part code
console.log("Part code: " + code1);
console.log("Supplier: " + getSupplier(code1));
console.log("Product Number: " + getProductNumber(code1));
console.log("Size: " + getSize(code1));

console.log("Part code: " + code2);
console.log("Supplier: " + getSupplier(code2));
console.log("Product Number: " + getProductNumber(code2));
console.log("Size: " + getSize(code2));

console.log("Part code: " + code3);
console.log("Supplier: " + getSupplier(code3));
console.log("Product Number: " + getProductNumber(code3));
console.log("Size: " + getSize(code3));
