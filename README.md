Got it! Here’s your rewritten README formatted **plain text for direct copy-paste into GitHub** (Markdown-ready, terminal-friendly):

````markdown
# 🌱 Green Earth – Plant a Tree, Grow a Future

Welcome to **Green Earth**, a responsive web application dedicated to our mission of making the planet greener, one tree at a time. This platform lets you explore different tree categories, add trees to your cart, and actively participate in environmental conservation—all from the comfort of your browser.

---

## 🌐 Live Demo

Check out the app live here: [Live Site URL](https://ph-a6-hemel.netlify.app/)

---

## ✨ Key Features

- **Browse Trees:** Explore trees by categories easily.  
- **Cart Management:** Add your favorite trees and manage quantities.  
- **Real-Time Pricing:** See total cost update automatically.  
- **Responsive Design:** Enjoy a seamless experience on desktop, tablet, or mobile.  
- **Loading Spinner:** Enhances UX while content is loading.  
- **Tree Details Modal:** View detailed information about each tree.  
- **Interactive Categories:** Easily select and filter trees.

---

## 🛠 Technologies Used

- **HTML5** – Semantic structure and accessibility.  
- **CSS3 (Tailwind + DaisyUI)** – Modern, responsive, and customizable styles.  
- **Vanilla JavaScript** – Dynamic interactivity and DOM manipulation.  
- **Font Awesome Icons** – Beautiful, scalable icons.

---

## 🔗 API Endpoints

The app fetches data dynamically via the following endpoints:

- **All Plants:** `https://openapi.programming-hero.com/api/plants`  
- **All Categories:** `https://openapi.programming-hero.com/api/categories`  
- **Plants by Category:** `https://openapi.programming-hero.com/api/category/${id}`  
- **Plant Details:** `https://openapi.programming-hero.com/api/plant/${id}`

---

## 💡 JavaScript Insights

### 1️⃣ `var`, `let`, `const`

- **var:** Function-scoped, can be redeclared, hoisted.  
- **let:** Block-scoped, cannot be redeclared, temporal dead zone.  
- **const:** Block-scoped, must be initialized, content immutable but objects/arrays can be modified.

```javascript
var x = 1; var x = 2; // ✅
let y = 1; let y = 2; // ❌
const z = 1; z = 2;   // ❌
````

---

### 2️⃣ Array Methods: `forEach`, `map`, `filter`

* **forEach:** Executes a function per element; no return.
* **map:** Returns a new array after transforming elements.
* **filter:** Returns a new array containing only elements that pass a test.

```javascript
const numbers = [1,2,3,4,5];

numbers.forEach(n => console.log(n*2)); // side effects
const doubled = numbers.map(n => n*2); // [2,4,6,8,10]
const evens = numbers.filter(n => n%2===0); // [2,4]
```

---

### 3️⃣ Arrow Functions

Compact function syntax introduced in ES6. Lexically binds `this`.

```javascript
const add = (a,b) => a+b;
const square = x => x*x;
const greet = () => "Hello World!";
```

**Differences from regular functions:**

* No own `this`, cannot be constructors, no `arguments` object, shorter syntax.

---

### 4️⃣ Destructuring Assignment

Easily extract values from arrays or objects:

```javascript
const fruits = ["apple", "banana"];
const [first, second] = fruits;

const person = {name:"John", age:30};
const {name, age, city="Unknown"} = person;
```

Also works directly in function parameters:

```javascript
function greet({name, age}) {
  return `Hello ${name}, age ${age}`;
}
```

---

### 5️⃣ Template Literals

Strings with embedded expressions and multi-line support:

```javascript
const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
```

**Advantages over concatenation:** cleaner, readable, supports multi-line, expression evaluation, no manual `\n`.

---

## 🚀 Getting Started

1. Clone this repository.
2. Open `index.html` in your favorite browser.
3. Start exploring, adding trees to your cart, and making an impact!


## 🤝 Contributing

We welcome contributions! Fork the repo, make your improvements, and submit a pull request.


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
