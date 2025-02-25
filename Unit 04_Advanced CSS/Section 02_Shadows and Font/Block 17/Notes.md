
# CSS Gradients, Shadows, Text Effects, and Web Fonts Tutorial

## Table of Contents
1. **CSS Gradients**
    - Vocabulary
    - Types of Gradients
    - Syntax and Usage
    - Example Code
2. **CSS Shadows**
    - Vocabulary
    - Box Shadows
    - Text Shadows
    - Example Code
3. **CSS Text Effects**
    - Vocabulary
    - Common Text Effects
    - Advanced Effects with Pseudo-elements
    - Example Code
4. **Web Fonts**
    - Vocabulary
    - Importing Web Fonts
    - Custom Font Styles
    - Example Code
5. **Assignments**
6. **Solutions**

---

## 1. CSS Gradients
### Vocabulary
- **Gradient:** A gradual transition between two or more colors.
- **Linear Gradient:** A gradient that moves along a straight line.
- **Radial Gradient:** A gradient radiating from a central point.
- **Conic Gradient:** A gradient that rotates around a center point.

### Types of Gradients
| Type | Syntax Example |
|------|----------------|
| Linear | `linear-gradient(direction, color1, color2, ...)` |
| Radial | `radial-gradient(shape size at position, color1, color2, ...)` |
| Conic | `conic-gradient(from angle at position, color1, color2, ...)` |

### Syntax and Usage
**Linear Gradient Example:**
```css
background: linear-gradient(to right, #ff7e5f, #feb47b);
```
**Radial Gradient Example:**
```css
background: radial-gradient(circle, #ff7e5f, #feb47b);
```
**Conic Gradient Example:**
```css
background: conic-gradient(from 90deg, #ff7e5f, #feb47b);
```

---

## 2. CSS Shadows
### Vocabulary
- **Box Shadow:** Adds shadow effects around an element's frame.
- **Text Shadow:** Adds shadow effects to text content.

### Box Shadows
**Syntax:**
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```
**Example:**
```css
box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
```

### Text Shadows
**Syntax:**
```css
text-shadow: offset-x offset-y blur-radius color;
```
**Example:**
```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
```

---

## 3. CSS Text Effects
### Vocabulary
- **Text Decoration:** Styles like underline or line-through applied to text.
- **Letter Spacing:** Controls space between characters.
- **Text Transform:** Changes capitalization of text.

### Common Text Effects
| Property | Example |
|----------|---------|
| `text-transform` | `uppercase`, `lowercase`, `capitalize` |
| `letter-spacing` | `letter-spacing: 2px;` |
| `word-spacing` | `word-spacing: 4px;` |

### Advanced Effects with Pseudo-elements
**Syntax:**
```css
h1::before {
  content: '★';
  color: gold;
}
```

---

## 4. Web Fonts
### Vocabulary
- **Web Fonts:** Fonts loaded over the web using `@font-face` or services like Google Fonts.
- **Font Family:** A specific set of fonts used in styling.

### Importing Web Fonts
**Google Fonts Example:**
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```
**CSS Usage:**
```css
font-family: 'Roboto', sans-serif;
```

### Custom Font Styles
**Syntax:**
```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('myfont.woff2') format('woff2');
}
```

---

## 5. Examples

### Example 1:
Design a heading with a radial gradient background and a text shadow that makes it appear glowing.
```html
<h1 class="glow">Glowing Heading</h1>
<style>
  .glow {
    background: radial-gradient(circle, #ff9a9e, #fad0c4);
    text-shadow: 0 0 10px #ff9a9e, 0 0 20px #fad0c4;
    padding: 20px;
    border-radius: 10px;
  }
</style>
```
### Example 2:
Import a custom web font from Google Fonts and apply advanced text effects, including letter-spacing, word-spacing, and pseudo-elements for decorative purposes.
```html
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<h2 class="fancy-text">Decorative Text</h2>
<style>
  .fancy-text {
    font-family: 'Pacifico', cursive;
    letter-spacing: 3px;
    word-spacing: 5px;
  }
  .fancy-text::before {
    content: '✨';
    margin-right: 10px;
  }
  .fancy-text::after {
    content: '✨';
    margin-left: 10px;
  }
</style>
```
---
