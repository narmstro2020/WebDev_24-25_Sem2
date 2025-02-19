# HTML Canvas Tutorial

## Table of Contents
1. Introduction to HTML Canvas
2. The `<canvas>` Element
3. The Canvas Rendering Context
4. Drawing Shapes
5. Working with Colors and Styles
6. Working with Text
7. Images and Patterns
8. Transformations
9. Animation with Canvas
10. Handling Mouse and Keyboard Events
11. Using Canvas for Games
12. Assignments
13. Assignment Solutions

---

## 1. Introduction to HTML Canvas
### Vocabulary
| Term            | Definition |
|----------------|------------|
| Canvas        | An HTML element used to draw graphics dynamically using JavaScript. |
| Context       | The object that provides methods and properties for drawing on the canvas. |
| Rendering     | The process of drawing graphics on the canvas. |
| API           | Application Programming Interface, which allows interactions with the canvas element. |

### Description
The `<canvas>` element is a powerful tool for rendering graphics, including shapes, images, and animations. It relies on JavaScript to manipulate its contents dynamically.

### Example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Canvas Example</title>
    </head>
    <body>
        <canvas id="myCanvas" width="500" height="300" style="border:1px solid #000;"></canvas>
    </body>
</html>
```

---

## 2. The `<canvas>` Element
### Vocabulary
| Term            | Definition |
|----------------|------------|
| Width          | Defines the canvas width in pixels. |
| Height         | Defines the canvas height in pixels. |
| Border         | A CSS property used to outline the canvas. |

### Description
The `<canvas>` element is used to define a drawable region in an HTML document.

### Example
```html
<canvas id="canvasExample" width="400" height="400" style="border:2px solid black;"></canvas>
```

---

## 3. The Canvas Rendering Context
### Vocabulary
| Term            | Definition |
|----------------|------------|
| 2D Context    | The rendering context for drawing in two dimensions. |
| `getContext`  | A method used to obtain the rendering context of the canvas. |

### Description
To draw on a canvas, you must first obtain the rendering context.

### Example
```html
<script>
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
</script>
```

---

## 4. Drawing Shapes
### Vocabulary
| Term            | Definition |
|----------------|------------|
| `fillRect`     | Draws a filled rectangle. |
| `strokeRect`   | Draws an outlined rectangle. |
| `beginPath`    | Starts a new drawing path. |

### Example
```html
<script>
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 150, 100);
</script>
```

---

## 5. Working with Colors and Styles
### Example
```html
<script>
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 100, 100);
</script>
```

---

## 6. Working with Text
### Example
```html
<script>
    ctx.font = "30px Arial";
    ctx.fillText("Hello Canvas", 50, 50);
</script>
```

---

## 7. Images and Patterns
### Example
```html
<script>
    var img = new Image();
    img.src = "image.png";
    img.onload = function() {
        ctx.drawImage(img, 50, 50);
    };
</script>
```

---

## 8. Transformations
### Example
```html
<script>
    ctx.rotate(45 * Math.PI / 180);
</script>
```

---

## 9. Animation with Canvas
### Example
```html
<script>
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, 50, 50, 50);
        x += 5;
        requestAnimationFrame(animate);
    }
    animate();
</script>
```

---

## 10. Handling Mouse and Keyboard Events
### Example
```html
<script>
    canvas.addEventListener("click", function(event) {
        console.log("Mouse clicked at: " + event.clientX + ", " + event.clientY);
    });
</script>
```

---

## 11. Using Canvas for Games
### Example
```html
<script>
    function drawBall() {
        ctx.beginPath();
        ctx.arc(100, 100, 10, 0, Math.PI * 2);
        ctx.fill();
    }
</script>
```

---

## 12. Extra Examples
1. **Draw a House**: Use basic shapes to draw a simple house on the canvas.
2. **Interactive Drawing App**: Build a simple drawing application where the user can draw using the mouse.

---

## 13. Extra Examples Solutions
### 1. Draw a House
```html
<script>
    ctx.fillRect(50, 150, 200, 100); // House body
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(150, 50);
    ctx.lineTo(250, 150);
    ctx.closePath();
    ctx.stroke();
</script>
```

### 2. Interactive Drawing App
```html
<script>
    canvas.addEventListener("mousemove", function(event) {
        if (event.buttons == 1) {
            ctx.fillRect(event.clientX, event.clientY, 2, 2);
        }
    });
</script>
```

---

This concludes the tutorial!
