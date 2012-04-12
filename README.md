# newsTicker

Basic news ticker, you give it a list and it cycles through each item. You can write:

```javascript
$('ul#latestNews').newsTicker();
```
or define the following awesome options (defaults shown):

```javascript
$('ul#latestNews').styledForms({
	timeout: 4500, // timeout between auto-progression
	direction: 'down', // or 'up'
	animSpeed: 'slow', // or 'fast' or a time in milliseconds
	nextSelector: '', // selector for a "next" button
	prevSelector: '' // selector for a "prev" button
});
```

the direction is reversed when you go to a previous item.

The plugin operates on all children of the element you run it on, so it's reccommended you use a list. You're displaying a list of stuff after all. There is some required CSS:

```css
ul {
	position: relative; /* required, or use 'absolute' */
	overflow: hidden; /* required */
	
	height: 40px; /* or similar value */
}
ul li {
	/* position: absolute; -- not required, will be set by the plugin.
		not setting it in CSS will mean users without JS enabled will only see your first item */
	
	height: 40px; /* from the parent ul */
	line-height: 40px;
}
```

I encourage you to [check out demo.html](https://github.com/grrowl/newsTicker/blob/master/demo.html) to see it all in action.