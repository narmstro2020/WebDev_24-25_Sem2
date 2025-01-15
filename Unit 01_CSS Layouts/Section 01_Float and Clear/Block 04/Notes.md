
# CSS Flexbox Tutorial

## Introduction to Flexbox
Flexbox, short for "Flexible Box Layout," is a CSS layout model designed to provide a more efficient way to align and distribute space among items in a container. Flexbox is especially useful for creating responsive designs, as it allows elements to adjust their size and position dynamically based on the container and available space.

### Vocabulary
- **Flex container**: The parent element that applies the `display: flex` or `display: inline-flex` property.
- **Flex items**: The child elements of a flex container.
- **Main axis**: The primary axis along which flex items are placed. Defined by the `flex-direction` property.
- **Cross axis**: The axis perpendicular to the main axis.
- **Align**: Positioning items along the cross axis.
- **Justify**: Positioning items along the main axis.

### Key Concepts
1. Flex container properties define the behavior of the flex items.
2. Flex items adapt dynamically to the available space.
3. Items can be aligned both horizontally and vertically using Flexbox.

---

## Flex Container Properties

### `display`
The `display` property is the foundation of Flexbox. Setting `display` to `flex` or `inline-flex` activates Flexbox for a container.

```css
.container {
  display: flex; /* Block-level flex container */
}

.inline-container {
  display: inline-flex; /* Inline-level flex container */
}
```

### `flex-direction`
Defines the direction of the main axis.

- `row` (default): Items are placed left to right.
- `row-reverse`: Items are placed right to left.
- `column`: Items are placed top to bottom.
- `column-reverse`: Items are placed bottom to top.

```css
.container {
  flex-direction: row;
}
```

### `flex-wrap`
Determines whether items should wrap onto a new line if there's insufficient space.

- `nowrap` (default): Items do not wrap.
- `wrap`: Items wrap onto new lines.
- `wrap-reverse`: Items wrap onto new lines in reverse order.

```css
.container {
  flex-wrap: wrap;
}
```

### `justify-content`
Aligns items along the main axis.

- `flex-start` (default): Items align to the start.
- `flex-end`: Items align to the end.
- `center`: Items align to the center.
- `space-between`: Items have equal space between them.
- `space-around`: Items have equal space around them.
- `space-evenly`: Items have equal space between and around them.

```css
.container {
  justify-content: center;
}
```

### `align-items`
Aligns items along the cross axis.

- `stretch` (default): Items stretch to fill the container.
- `flex-start`: Items align to the start.
- `flex-end`: Items align to the end.
- `center`: Items align to the center.
- `baseline`: Items align based on their baseline.

```css
.container {
  align-items: flex-end;
}
```

### `align-content`
Aligns a multi-line flex container along the cross axis (used with `flex-wrap`).

- `stretch` (default): Lines stretch to fill the container.
- `flex-start`: Lines align to the start.
- `flex-end`: Lines align to the end.
- `center`: Lines align to the center.
- `space-between`: Lines have equal space between them.
- `space-around`: Lines have equal space around them.
- `space-evenly`: Lines have equal space between and around them.

```css
.container {
  align-content: space-around;
}
```

---

## Flex Item Properties

### `flex`
A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
  flex: 1; /* Grow equally, shrink equally, basis auto */
}
```

### `flex-grow`
Defines how much an item can grow relative to others.

```css
.item {
  flex-grow: 2; /* Grows twice as much as items with flex-grow: 1 */
}
```

### `flex-shrink`
Defines how much an item can shrink relative to others.

```css
.item {
  flex-shrink: 0; /* Prevents shrinking */
}
```

### `flex-basis`
Defines the initial size of a flex item.

```css
.item {
  flex-basis: 200px;
}
```

### `align-self`
Overrides `align-items` for a specific item.

```css
.item {
  align-self: center;
}
```

---

## Examples

### Basic Flexbox Layout
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #f4f4f4;
}

.item {
  flex: 1;
  margin: 0 10px;
  background-color: #ccc;
  text-align: center;
}
```

### Responsive Navigation Bar
```html
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="menu">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.menu {
  display: flex;
  list-style: none;
}

.menu li {
  margin: 0 10px;
}
```