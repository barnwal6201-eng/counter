const userInput = document.getElementById("input-sentences");
const lowerCase = document.getElementById("lower-case");
const upperCase = document.getElementById("upper-case");
const camelCase = document.getElementById("camel-case");
const snakeCase = document.getElementById("snake-case");
const pascalCase = document.getElementById("pascal-case");
const kebabCase = document.getElementById("kebab-case");

userInput.addEventListener('input', (e) => {
    const inputData = e.target.value;
    
    lowerCase.innerHTML = inputData.toLowerCase();
    
    upperCase.innerHTML = inputData.toUpperCase();

    camelCase.innerHTML = toCamelCase(inputData);

    pascalCase.innerHTML = toPascalCase(inputData);

    snakeCase.innerHTML = toSnakeCase(inputData);

    kebabCase.innerHTML = toKebabCase(inputData);

})
function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}


function toPascalCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function toSnakeCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("_");
}

function toKebabCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("-");
}






