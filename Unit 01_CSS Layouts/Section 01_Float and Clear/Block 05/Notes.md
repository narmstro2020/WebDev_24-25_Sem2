
# CSS Grid Tutorial

## Introduction to CSS Grid
CSS Grid is a powerful layout system in CSS that provides a way to design web pages using a grid-based approach. Unlike Flexbox, which is one-dimensional (either row or column), CSS Grid operates in two dimensions, allowing for layouts that can handle both rows and columns simultaneously.

### Vocabulary
- **Grid Container**: The element that establishes a grid formatting context. It contains grid items.
- **Grid Item**: Direct children of the grid container.
- **Grid Line**: The dividing lines that make up the grid structure. They can be horizontal or vertical.
- **Grid Track**: The space between two grid lines. It forms rows or columns.
- **Grid Cell**: The smallest unit in the grid where a grid item can be placed.
- **Grid Area**: A rectangular space that consists of one or more grid cells.
- **Implicit Grid**: Tracks created automatically by the grid layout when there are more items than explicitly defined tracks.
- **Explicit Grid**: Tracks defined by the developer using CSS grid properties.

---

## Setting Up a Grid Container
To use CSS Grid, you need to define a grid container.

```html
<div class="grid-container">
    <div class="item1">Item 1</div>
    <div class="item2">Item 2</div>
    <div class="item3">Item 3</div>
</div>
```

```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px;
    gap: 10px; /* Space between rows and columns */
}
```

### Explanation
1. **`display: grid;`**: Turns the container into a grid container.
2. **`grid-template-columns`**: Defines three columns, each 100px wide.
3. **`grid-template-rows`**: Defines two rows, each 50px high.
4. **`gap`**: Adds 10px spacing between grid items.

---

## Placing Items on the Grid
CSS Grid allows precise placement of items within the grid.

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* Fractional units */
    grid-template-rows: auto 100px auto;
}

.item1 {
    grid-column: 1 / 3; /* Spans from column line 1 to 3 */
    grid-row: 1 / 2;   /* Spans from row line 1 to 2 */
}

.item2 {
    grid-column: 3;    /* Starts and ends at column line 3 */
    grid-row: 2 / 4;   /* Spans from row line 2 to 4 */
}

.item3 {
    grid-column: 1 / 4; /* Spans all columns */
    grid-row: 4;       /* Starts and ends at row line 4 */
}
```

---

## Advanced Features
### Grid Areas
Grid areas allow you to define named sections for your layout.

```css
.grid-container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
}

.header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.content {
    grid-area: content;
}
.footer {
    grid-area: footer;
}
```

### Auto-placement
CSS Grid automatically places items using the `grid-auto-rows` and `grid-auto-columns` properties.

```css
.grid-container {
    display: grid;
    grid-auto-rows: 100px;
    grid-auto-columns: 100px;
}
```

## Conclusion
CSS Grid is a versatile layout system that simplifies complex web layouts. By mastering its properties and techniques, you can create responsive and efficient designs with ease. Practice with the assignments and experiment with different grid configurations to deepen your understanding.
