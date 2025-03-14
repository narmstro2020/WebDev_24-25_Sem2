# **CSS Media Queries Tutorial**

## **1. Introduction to CSS Media Queries**
### **Vocabulary**
| Term            | Definition |
|----------------|------------|
| **Media Query** | A CSS technique used to apply styles based on the characteristics of the user's device, such as screen width, height, resolution, or orientation. |
| **Breakpoint** | A specific screen width where a different set of styles is applied. |
| **Responsive Design** | A web design approach that makes web pages look good on all devices by using flexible layouts and media queries. |
| **Viewport** | The user's visible area of a webpage on a device. |

### **What Are CSS Media Queries?**
CSS Media Queries allow developers to apply styles based on different conditions such as screen width, device type, resolution, and orientation. This helps create a **responsive** web design that adapts to different screens.

🔗 [W3Schools: Media Queries](https://www.w3schools.com/css/css3_mediaqueries.asp)

---

## **2. Basic Syntax of Media Queries**
### **Vocabulary**
| Term       | Definition |
|-----------|------------|
| **@media** | The CSS rule that defines a media query. |
| **only** | A keyword that prevents older browsers from applying media query styles. |
| **and** | A keyword used to combine multiple conditions. |
| **not** | A keyword that negates the media query condition. |

### **Basic Syntax**
A **media query** consists of:
1. `@media` keyword
2. A media type (`screen`, `print`, `all`)
3. A media feature (e.g., `max-width: 600px`)

```css
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
🔗 [W3Schools: Media Query Syntax](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)

---

## **3. Media Query Breakpoints**
### **Vocabulary**
| Term | Definition |
|------|------------|
| **Mobile First Design** | A design approach where styles are first written for small screens and then enhanced for larger screens. |
| **Breakpoint** | A specific screen width at which styles change. |

### **Common Breakpoints**
| Device Type | Screen Width (px) |
|-------------|------------------|
| Small Phones | `max-width: 480px` |
| Tablets | `min-width: 481px` and `max-width: 768px` |
| Laptops | `min-width: 769px` and `max-width: 1024px` |
| Desktops | `min-width: 1025px` and above |

### **Example**
```css
/* Mobile */
@media screen and (max-width: 480px) {
  body {
    background-color: pink;
  }
}

/* Tablet */
@media screen and (min-width: 481px) and (max-width: 768px) {
  body {
    background-color: yellow;
  }
}

/* Desktop */
@media screen and (min-width: 1025px) {
  body {
    background-color: blue;
  }
}
```
🔗 [W3Schools: Media Queries for Breakpoints](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

---

## **4. Media Features in Media Queries**
### **Vocabulary**
| Media Feature | Definition |
|--------------|------------|
| **width** | The width of the viewport. |
| **height** | The height of the viewport. |
| **min-width** | The minimum width of the viewport where styles should apply. |
| **max-width** | The maximum width of the viewport where styles should apply. |
| **orientation** | Whether the screen is in `portrait` or `landscape` mode. |

### **Example: Orientation**
```css
/* Portrait Mode */
@media screen and (orientation: portrait) {
  body {
    background-color: green;
  }
}

/* Landscape Mode */
@media screen and (orientation: landscape) {
  body {
    background-color: purple;
  }
}
```
🔗 [W3Schools: Media Query Features](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

---

## **5. Combining Multiple Conditions**
### **Vocabulary**
| Operator | Definition |
|----------|------------|
| **and** | Combines multiple conditions. |
| **not** | Excludes a specific condition. |
| **only** | Ensures compatibility with older browsers. |

### **Example: Combining Conditions**
```css
@media screen and (min-width: 600px) and (max-width: 900px) {
  body {
    background-color: orange;
  }
}
```
🔗 [W3Schools: Combining Media Queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)

---

## **6. Media Queries for Retina Displays**
### **Vocabulary**
| Term | Definition |
|------|------------|
| **DPI (Dots Per Inch)** | A measure of screen resolution. |
| **Retina Display** | High-resolution screens that require special CSS adjustments. |

### **Example: High-Resolution Displays**
```css
@media only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and (min-resolution: 192dpi) {
  body {
    background-color: red;
  }
}
```
🔗 [W3Schools: Retina Media Queries](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)

---

## **7. Examples**
### **Example 1: Responsive Image**
Create an image that resizes proportionally when the screen width changes.
```css
img {
  width: 100%;
  height: auto;
  max-width: 800px;
}
```
### **Example 2: Dark Mode**
Use a media query to change a webpage to **dark mode** when the user prefers dark themes.
```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```
---