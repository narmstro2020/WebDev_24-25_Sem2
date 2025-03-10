# CSS Buttons, Pagination, Multiple Columns, and UI Elements Tutorial

## 1. CSS Buttons
### 1.1 Vocabulary
| Term | Definition |
|------|------------|
| `button` | An HTML element that triggers an action when clicked. |
| `border-radius` | Rounds the corners of a button. |
| `box-shadow` | Adds shadow effects to elements. |
| `hover` | A pseudo-class that applies styles when the user hovers over an element. |
| `active` | A pseudo-class that applies styles when a button is clicked. |
| `transition` | Specifies how CSS properties change over time. |

### 1.2 Description
Buttons are essential UI components that enhance user interaction. CSS allows customization of buttons using colors, borders, shadows, and hover effects.

### 1.3 Example Code
#### HTML (`button.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Buttons</title>
    <link rel="stylesheet" href="button.css">
</head>
<body>
    <button class="btn">Click Me</button>
</body>
</html>
```

#### CSS (`button.css`)
```css
.btn {
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

.btn:active {
    background-color: #397d39;
    transform: scale(0.95);
}
```

### 1.4 Further Reading
[W3Schools - CSS Buttons](https://www.w3schools.com/css/css3_buttons.asp)

---

## 2. CSS Pagination
### 2.1 Vocabulary
| Term | Definition |
|------|------------|
| `pagination` | A UI component for navigating between multiple pages. |
| `display: flex` | Aligns pagination buttons in a row. |
| `justify-content` | Controls the alignment of elements inside a flex container. |
| `hover` | Changes button styles when hovered over. |

### 2.2 Description
Pagination is used for navigating through content, often in lists or tables. It improves usability by breaking down long content into multiple pages.

### 2.3 Example Code
#### HTML (`pagination.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Pagination</title>
    <link rel="stylesheet" href="pagination.css">
</head>
<body>
    <ul class="pagination">
        <li><a href="#">«</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">»</a></li>
    </ul>
</body>
</html>
```

#### CSS (`pagination.css`)
```css
.pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

.pagination li {
    margin: 5px;
}

.pagination a {
    text-decoration: none;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.pagination a:hover {
    background-color: #0056b3;
}
```

### 2.4 Further Reading
[W3Schools - CSS Pagination](https://www.w3schools.com/css/css3_pagination.asp)

---

## 3. CSS Multiple Columns
### 3.1 Vocabulary
| Term | Definition |
|------|------------|
| `column-count` | Defines the number of columns an element should be divided into. |
| `column-gap` | Specifies the gap between columns. |
| `column-rule` | Sets the border between columns. |

### 3.2 Description
The CSS Multiple Columns feature allows content to be split into multiple columns, similar to a newspaper layout.

### 3.3 Example Code
#### HTML (`columns.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Multiple Columns</title>
    <link rel="stylesheet" href="columns.css">
</head>
<body>
    <div class="multicol">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum.</p>
        <p>Nulla facilisi. Sed ac lacus in risus tristique condimentum.</p>
    </div>
</body>
</html>
```

#### CSS (`columns.css`)
```css
.multicol {
    column-count: 3;
    column-gap: 20px;
    column-rule: 2px solid #000;
}
```

### 3.4 Further Reading
[W3Schools - CSS Multiple Columns](https://www.w3schools.com/css/css3_multiple_columns.asp)
