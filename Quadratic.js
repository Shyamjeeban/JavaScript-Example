let root1, root2;
//take input form the user
let a = prompt("Enter the 1st No:");
let b = prompt("Enter the 2nd No:");
let c = prompt("Enter the 3rd No:");

//calculate discriminant
let discriminant = b * b - 4 * a * c;

//condition for real and different roots
if (discriminant > 0) {
  root1 = -b + (Math.sqrt(discriminant) / 2) * a;
  root2 = -b - (Math.sqrt(discriminant) / 2) * a;
  document.write(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  document.write(`The roots of quadratic equation are ${root1} and ${root2}`);
}
