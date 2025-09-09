Got it! So you want the **Q\&A sections to remain labeled the same way**, but the **answers can be reworded and formatted differently**—more concise, clear, or in your own style. Here's a version ready to paste into GitHub:

````markdown
# 🌱 Green Earth – Plant a Tree, Grow a Future

Welcome to **Green Earth**, a responsive web application dedicated to planting trees and promoting environmental conservation. Browse trees by category, add them to your cart, and help make the planet greener—right from your browser.

---

## 🌐 Live Demo

[Live Site URL](https://ph-a6-hemel.netlify.app/)

---

## ✨ Features

- Browse trees by categories  
- Add trees to cart and manage quantities  
- Real-time price updates  
- Fully responsive layout  
- Loading spinner for smoother UX  
- Detailed tree info via modal  
- Interactive category selection  

---

## 🛠 Technologies Used

- HTML5  
- CSS3 (Tailwind CSS + DaisyUI)  
- Vanilla JavaScript  
- Font Awesome Icons  

---

## API Endpoints

- **Get All Plants:** `https://openapi.programming-hero.com/api/plants`  
- **Get All Categories:** `https://openapi.programming-hero.com/api/categories`  
- **Get Plants by Category:** `https://openapi.programming-hero.com/api/category/${id}`  
- **Get Plant Details:** `https://openapi.programming-hero.com/api/plant/${id}`  

---

## Questions & Answers

### 1) What is the difference between var, let, and const?

- **var:** Function-scoped, can be redeclared, hoisted with `undefined`.  
- **let:** Block-scoped, cannot be redeclared in same scope, hoisted but in temporal dead zone.  
- **const:** Block-scoped, cannot be reassigned, must be initialized, but object properties or array elements can be modified.

```javascript
var x = 1; var x = 2; // ✅ works
let y = 1; let y = 2; // ❌ error
const z = 1; z = 2;   // ❌ error
````

---

### 2) What is the difference between map(), forEach(), and filter()?

* **forEach():** Runs a function for each element; no new array is returned; mainly used for side effects.
* **map():** Returns a new array with transformed elements; same length as original; chainable.
* **filter():** Returns a new array with elements that satisfy a condition; length can change; chainable.

```javascript
const nums = [1,2,3,4,5];

nums.forEach(n => console.log(n*2)); // prints doubled numbers
const doubled = nums.map(n => n*2); // [2,4,6,8,10]
const evens = nums.filter(n => n%2===0); // [2,4]
```

---

### 3) What are arrow functions in ES6?

Arrow functions offer a compact syntax for functions and inherit `this` from the surrounding scope.

```javascript
const add = (a,b) => a+b;
const square = x => x*x;
const greet = () => "Hello World!";
```

**Key points:**

* Shorter syntax than traditional functions
* Lexical `this` binding
* Cannot be used as constructors
* No `arguments` object
* Implicit return for single-expression functions

---

### 4) How does destructuring assignment work in ES6?

Destructuring lets you unpack values from arrays or objects into separate variables.

**Array destructuring:**

```javascript
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;
const [first, , third] = fruits; // skip second
const [first, ...rest] = fruits; // rest operator
```

**Object destructuring:**

```javascript
const person = { name:"John", age:30, city:"NY" };
const { name, age, city } = person;
const { name: fullName, age } = person; // rename
const { name, country="USA" } = person;   // default value
```

**In function parameters:**

```javascript
function greetUser({ name, age }) {
  return `Hello ${name}, you are ${age} years old`;
}
```

---

### 5) Explain template literals in ES6. How are they different from string concatenation?

Template literals allow embedded expressions and multi-line strings using backticks (\`).

```javascript
const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
const multiLine = `This is
a multi-line
string`;
```

**Advantages vs. traditional concatenation:**

* Cleaner and more readable
* Supports multi-line strings
* Easy expression evaluation with `${expression}`
* No need for cumbersome `+` or `\n`

---

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Browse trees, add to cart, and support a greener planet!

---

## 🤝 Contributing

Fork the repo, make your improvements, and submit a pull request.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

```

