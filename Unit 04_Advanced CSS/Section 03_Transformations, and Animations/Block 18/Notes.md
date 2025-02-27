# CSS Transforms, Transitions, Animations, and Tooltips Tutorial

## 1. Introduction to CSS Transforms, Transitions, Animations, and Tooltips
CSS provides powerful ways to create visually engaging web pages through transformations, transitions, and animations. Tooltips enhance user experience by providing contextual information on hover or focus.

---

# 2. CSS 2D Transforms

## Vocabulary
| Term | Definition |
|------|------------|
| Transform | A CSS property that applies transformations to elements like scaling, rotating, translating, and skewing. |
| Scale | A function that resizes an element. |
| Rotate | A function that rotates an element around a point. |
| Translate | A function that moves an element from its original position. |
| Skew | A function that distorts an element along the X or Y axis. |

## Transform Functions
| Function | Description | Example |
|-----------|-------------|----------|
| `translate(x, y)` | Moves an element along the X and Y axis. | `transform: translate(50px, 100px);` |
| `scale(x, y)` | Resizes an element. | `transform: scale(1.5, 1.5);` |
| `rotate(angle)` | Rotates an element by a given degree. | `transform: rotate(45deg);` |
| `skew(x, y)` | Skews an element along the X and Y axes. | `transform: skew(20deg, 10deg);` |
| `matrix(a, b, c, d, e, f)` | Applies multiple transformations at once. | `transform: matrix(1, 0.5, 0.5, 1, 20, 30);` |

## Example Code
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transform: rotate(45deg) scale(1.2);
}
```

---

# 3. CSS 3D Transforms

## Vocabulary
| Term | Definition |
|------|------------|
| Perspective | Determines the depth of a 3D transformation. |
| RotateX | Rotates an element around the X-axis. |
| RotateY | Rotates an element around the Y-axis. |
| RotateZ | Rotates an element around the Z-axis. |
| TranslateZ | Moves an element along the Z-axis. |

## Transform Functions
| Function | Description | Example |
|-----------|-------------|----------|
| `perspective(value)` | Defines the perspective depth. | `perspective: 500px;` |
| `rotateX(angle)` | Rotates around the X-axis. | `transform: rotateX(45deg);` |
| `rotateY(angle)` | Rotates around the Y-axis. | `transform: rotateY(60deg);` |
| `rotateZ(angle)` | Rotates around the Z-axis. | `transform: rotateZ(30deg);` |
| `translateZ(value)` | Moves along the Z-axis. | `transform: translateZ(100px);` |

## Example Code
```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotateY(45deg) translateZ(50px);
  perspective: 500px;
}
```

---

# 4. CSS Transitions

## Vocabulary
| Term | Definition |
|------|------------|
| Transition | A gradual change between states of a CSS property. |
| Duration | The time the transition takes. |
| Timing Function | Controls the speed curve of a transition. |
| Delay | Sets when the transition should start. |

## Transition Properties
| Property | Description | Example |
|-----------|-------------|----------|
| `transition-property` | Specifies the property to animate. | `transition-property: background-color;` |
| `transition-duration` | Defines the time for the transition. | `transition-duration: 1s;` |
| `transition-timing-function` | Defines the acceleration curve. | `transition-timing-function: ease-in-out;` |
| `transition-delay` | Delays the transition start. | `transition-delay: 0.5s;` |

## Example Code
```css
.box {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: background-color 1s ease-in-out;
}

.box:hover {
  background-color: orange;
}
```

---

# 5. CSS Animations

## Vocabulary
| Term | Definition |
|------|------------|
| Keyframes | Define the animation steps. |
| Duration | Specifies the animation length. |
| Iteration Count | Defines how many times the animation runs. |
| Direction | Determines the animation flow (normal, reverse, alternate). |

## Animation Properties
| Property | Description | Example |
|-----------|-------------|----------|
| `@keyframes` | Defines the animation sequence. | `@keyframes bounce { from { transform: translateY(0); } to { transform: translateY(-20px); } }` |
| `animation-name` | Name of the keyframes. | `animation-name: bounce;` |
| `animation-duration` | Animation duration. | `animation-duration: 2s;` |
| `animation-iteration-count` | Number of repetitions. | `animation-iteration-count: infinite;` |

## Example Code
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  animation: bounce 2s infinite;
}
```

---

# 6. CSS Tooltips

## Vocabulary
| Term | Definition |
|------|------------|
| Tooltip | A small popup text that appears on hover. |
| Positioning | Defines where the tooltip appears (top, bottom, left, right). |

## Example Code
```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-text {
  visibility: hidden;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  border-radius: 5px;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}
```
