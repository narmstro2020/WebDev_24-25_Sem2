# CSS Image Styling Tutorial

## 1. Introduction
Images are a crucial part of web design, and CSS provides various properties to control their appearance. This tutorial covers different techniques for styling images, centering them, applying filters, shaping images, and using properties like `object-fit`, `object-position`, and `masking`.

## 2. Vocabulary
| Term | Definition |
|------|------------|
| `object-fit` | Specifies how an image should fit within its container. |
| `object-position` | Defines the position of an image within its container. |
| `filter` | Applies graphical effects like blur or brightness to images. |
| `masking` | Uses a mask to control which parts of an image are visible. |
| `border-radius` | Creates rounded corners on images. |
| `clip-path` | Clips an image to a specific shape. |

---

## 3. Image Styling

### 3.1 Border and Shadow
Images can be styled using CSS properties like `border`, `box-shadow`, and `border-radius`.

#### Example Code:
```css
img {
  border: 5px solid #333;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
```

---

## 4. Image Centering

### 4.1 Centering with `display: block`
To center an image inside a container:

#### Example Code:
```css
img {
  display: block;
  margin: 0 auto;
}
```

### 4.2 Centering with Flexbox
#### Example Code:
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

---

## 5. Image Filters
CSS filters allow you to apply visual effects to images.

### 5.1 Common Filters
| Filter | Description |
|--------|-------------|
| `blur(px)` | Blurs the image. |
| `brightness(%)` | Adjusts brightness. |
| `contrast(%)` | Adjusts contrast. |
| `grayscale(%)` | Converts image to grayscale. |

#### Example Code:
```css
img {
  filter: grayscale(100%);
}
```

---

## 6. Image Shapes
You can create various image shapes using `border-radius` and `clip-path`.

### 6.1 Rounded Image
```css
img {
  border-radius: 50%;
}
```

### 6.2 Clipped Image
```css
img {
  clip-path: circle(50% at center);
}
```

---

## 7. Object-Fit and Object-Position

### 7.1 Object-Fit
| Value | Description |
|--------|-------------|
| `fill` | Stretches the image to fit. |
| `contain` | Resizes to fit without cropping. |
| `cover` | Fills container, cropping as needed. |

#### Example Code:
```css
img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
```

### 7.2 Object-Position
Controls the alignment of the image within its container.

#### Example Code:
```css
img {
  object-position: top;
}
```

---

## 8. Masking
CSS masking allows defining visible parts of an image.

#### Example Code:
```css
img {
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
```

---

## 9. More Examples

### Example 1: Create a Profile Picture
- Apply a circular shape.
- Add a border and shadow.
- Use `object-fit` to ensure it scales properly.
```css
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}
```

### Example 2: Implement a Masking Effect
- Apply a gradient mask to an image.
- Experiment with different masking shapes.
```css
img {
  mask-image: radial-gradient(circle, rgba(0,0,0,1), rgba(0,0,0,0));
}
```
---