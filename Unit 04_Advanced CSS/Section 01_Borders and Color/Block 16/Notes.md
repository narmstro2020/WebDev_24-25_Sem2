
# CSS Tutorial: Rounded Corners, Border Images, Backgrounds, and Colors

## Table of Contents
1. **Rounded Corners**
    - Vocabulary
    - Detailed Descriptions
    - Example Code
2. **Border Images**
    - Vocabulary
    - Detailed Descriptions
    - Example Code
3. **Backgrounds**
    - Vocabulary
    - Detailed Descriptions
    - Example Code
4. **Colors**
    - Vocabulary
    - Detailed Descriptions
    - Example Code
5. **Assignments**
6. **Solutions**

---

## 1. Rounded Corners

### Vocabulary
- **Border Radius**: A CSS property used to round the corners of an element.
- **Elliptical Corner**: A corner with different horizontal and vertical radii.

### Detailed Description
The `border-radius` property in CSS is used to create rounded corners for elements. You can apply the same radius to all corners or specify each corner individually.

#### Syntax:
```css
/* All corners */
border-radius: 10px;

/* Top-left, top-right, bottom-right, bottom-left */
border-radius: 10px 20px 30px 40px;

/* Elliptical shape (horizontal radius / vertical radius) */
border-radius: 50px / 25px;
```

#### Example:
```html
<div class="rounded-box"></div>
```

```css
.rounded-box {
  width: 200px;
  height: 200px;
  background-color: #4CAF50;
  border-radius: 20px;
}
```

---

## 2. Border Images

### Vocabulary
- **Border Image**: An image that replaces the border of an element.
- **Slice**: Defines how the image is divided.
- **Repeat**: Controls how the image is repeated (stretched or tiled).

### Detailed Description
The `border-image` property allows using images as borders.

#### Syntax:
```css
border-image: url('image.png') 30 round;
```
- **URL**: Path to the image file.
- **Slice**: Specifies how the image is sliced (in pixels or percentages).
- **Repeat**: Options include `stretch`, `repeat`, and `round`.

#### Example:
```css
.border-image-box {
  width: 300px;
  height: 150px;
  border: 10px solid transparent;
  border-image: url('border.png') 30 stretch;
}
```

---

## 3. Backgrounds

### Vocabulary
- **Background Image**: An image applied to the background of an element.
- **Background Position**: Determines the starting position of the background.
- **Background Repeat**: Specifies if/how a background image will repeat.

### Detailed Description
CSS background properties allow customization of element backgrounds using images, colors, or gradients.

#### Properties:
| Property           | Description                           |
|--------------------|---------------------------------------|
| `background-color` | Sets the background color             |
| `background-image` | Sets the background image             |
| `background-size`  | Controls size of background image     |
| `background-repeat`| Specifies if background repeats       |
| `background-position`| Defines position of background image |

#### Example:
```css
.background-example {
  background-color: #f0f0f0;
  background-image: url('pattern.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## 4. Colors

### Vocabulary
- **Hex Code**: A six-digit code for specifying colors (e.g., `#FF5733`).
- **RGBA**: Red, Green, Blue, Alpha (transparency) color model.
- **HSL**: Hue, Saturation, Lightness color model.

### Detailed Description
CSS supports several color formats:
- **Hexadecimal:** `#RRGGBB`
- **RGB:** `rgb(255, 255, 255)`
- **RGBA:** `rgba(255, 255, 255, 0.5)`
- **HSL:** `hsl(120, 100%, 50%)`

#### Example:
```css
.color-example {
  background-color: #3498db;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
}
```

---

## 5. Examples

### Examples 1: Decorative Border Image
Create a box with a decorative image as its border using `border-image`.
```css
.decorative-border {
    width: 250px;
    height: 250px;
    border: 15px solid transparent;
    border-image: url('decorative-border.png') 20 round;
}
```
### Examples 2: Custom Background Section
Create a full-page section with:
- A background image covering the whole section.
- Overlay color using RGBA.
```css
.full-page-section {
  height: 100vh;
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
}
```


