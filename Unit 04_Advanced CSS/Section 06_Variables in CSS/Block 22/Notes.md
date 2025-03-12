# **CSS Variables, The `@property` Rule, and Box Sizing**

## **Table of Contents**
1. [CSS Variables (Custom Properties)](#css-variables-custom-properties)
    - [What are CSS Variables?](#what-are-css-variables)
    - [Declaring and Using CSS Variables](#declaring-and-using-css-variables)
    - [Global vs Local Scope](#global-vs-local-scope)
    - [Changing Variables Dynamically with JavaScript](#changing-variables-dynamically-with-javascript)
    - [Fallback Values](#fallback-values)
    - [Example: Theming with CSS Variables](#example-theming-with-css-variables)
2. [CSS `@property`](#css-property)
    - [What is the `@property` Rule?](#what-is-the-property-rule)
    - [Defining Custom Properties with `@property`](#defining-custom-properties-with-property)
    - [Using `@property` in Animations](#using-property-in-animations)
    - [Example: Smooth Color Transition with `@property`](#example-smooth-color-transition-with-property)
3. [CSS Box Sizing](#css-box-sizing)
    - [Understanding Box Sizing](#understanding-box-sizing)
    - [Content-Box vs Border-Box](#content-box-vs-border-box)
    - [Why Use `box-sizing: border-box`?](#why-use-box-sizing-border-box)
    - [Example: Fixing Layout Issues with `border-box`](#example-fixing-layout-issues-with-border-box)
4. [Examples](#examples)

---

## **CSS Variables (Custom Properties)**

### **What are CSS Variables?**
CSS variables, also called **custom properties**, allow you to define reusable values in your CSS code.

- They are defined using `--` (double hyphen) and can store values like colors, font sizes, margins, etc.
- You can update them dynamically using JavaScript.

🔗 **Reference:** [CSS Variables - W3Schools](https://www.w3schools.com/css/css3_variables.asp)

### **Declaring and Using CSS Variables**
#### **Syntax**
```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}

body {
  background-color: var(--primary-color);
  font-size: var(--font-size);
}
```

### **Global vs Local Scope**
```css
/* Global variable */
:root {
  --main-bg: lightgray;
}

/* Local variable */
.card {
  --card-color: white;
  background-color: var(--card-color);
}
```

### **Changing Variables Dynamically with JavaScript**
```js
document.documentElement.style.setProperty('--primary-color', 'red');
```

### **Fallback Values**
```css
background-color: var(--undefined-color, black);
```

### **Example: Theming with CSS Variables**
```css
:root {
  --bg-color: white;
  --text-color: black;
}

.dark-mode {
  --bg-color: black;
  --text-color: white;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

---

## **CSS `@property`**

### **What is the `@property` Rule?**
The `@property` rule allows defining **typed CSS variables**, which can animate smoothly.

🔗 **Reference:** [CSS `@property` - W3Schools](https://www.w3schools.com/css/css3_property.asp)

### **Defining Custom Properties with `@property`**
```css
@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

div {
  transform: rotate(var(--angle));
}
```

### **Using `@property` in Animations**
```css
@keyframes rotate {
  0% { --angle: 0deg; }
  100% { --angle: 360deg; }
}

.box {
  animation: rotate 2s linear infinite;
}
```

### **Example: Smooth Color Transition with `@property`**
```css
@property --hue {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}

div {
  background-color: hsl(var(--hue), 100%, 50%);
  animation: colorChange 5s infinite linear;
}

@keyframes colorChange {
  0% { --hue: 0; }
  100% { --hue: 360; }
}
```

---

## **CSS Box Sizing**

### **Understanding Box Sizing**
🔗 **Reference:** [CSS Box Sizing - W3Schools](https://www.w3schools.com/css/css3_box-sizing.asp)

### **Content-Box vs Border-Box**
| **Value**        | **Effect** |
|-----------------|-----------|
| `content-box`   | Default. Width includes only content. |
| `border-box`    | Width includes padding and border. |

### **Example: Fixing Layout Issues with `border-box`**
```css
.box {
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
}
```

---

## **Examples**

### Custom Animations with `@property`**
1. Define a custom property `--rotate-angle` using `@property`.
2. Animate the property smoothly using `@keyframes`.
```css
@property --rotate-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.box {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  from { --rotate-angle: 0deg; }
  to { --rotate-angle: 360deg; }
}
```


### **Fixing Layout Issues with Box Sizing**
1. Create two boxes, one using `content-box` and another `border-box`.
2. Compare and fix layout inconsistencies.
```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}
```
---
