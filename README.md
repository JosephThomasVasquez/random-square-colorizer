# **Random Square Colorizer**

Made using only Javascript, HTML, and CSS

[Demo here](https://josephthomasvasquez.github.io/random-square-colorizer/)

<hr>
<br>

## **About**:

A single HTML element with id `grid` is 600 pixels in width and height and contains 16 quares that are randomly selected and assigned a random color if it has been greater than 2 seconds since the last time the suqare's color has been changed.

<hr>
<br>

## **Features**:

All DOM elements such as the 16 squares are generated using javascript in the `app.js` file.

### **Variables and Functions**

Variables

- `squares` is the amount of squares to generate, i.e. `16`

- `ms2Seconds` is set to 8000 milliseconds to reference 2 seconds.

- `lastChanged` is a map `{object}` to check and keep track of the elements and timestamps as they are being selected.

Functions

- The function `generateSquares` create the div elements and assigns the class `color-square` and `id` attributes to each div.

- The function `randomInt` generates a random number from 1 to 16.

- The function `randomizeColor` generates 3 random colors to serve as RGB values to insert into each square's CSS `background-color` attribute.

<hr>
<br>

## **How it works**

1. Every 250ms using the `setInterval` method a random square is selected using the `randomInt` function. If the element does not exist in the map then it is added with keys `id` and `timeChanged` with the id of the element and the time using the `Date.now()` method to keep track of the time the element was selected.

2. Once the square is first initially selected, random RGB values are created using the `randomizeColor` function and the CSS `background-color` declaration is set with these values.

3. If the square already exists in the map, then we check if the time now `Date.now()` minus the squares `timeChanged` valueif it is greater or equal to 2 seconds. ( This was defined using the variable `ms2Seconds = 8000`, in milliseconds. )

4. If it has been 2 seconds or greater from the last time the square was checked then we set the `timeChanged` value to the current time using `Date.now()` again.

5. Additional: If the square has changed its color in less than 2 seconds then we add the CSS class `.flash` with an animation to show visual feedback if the square was recently changed and skipping to the next randomly selected square as this loops.
