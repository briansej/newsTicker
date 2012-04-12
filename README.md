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

The list operates on all children of the element, so it's reccommended you use a list. Here's some
suggested HTML, required CSS is marked:
```
	<style>
		ul {
			height: 40px; /* or similar value */
			position: relative; /* required. Also good: 'absolute' */
			overflow: hidden; /* required */
		}
		li {
			/* position: absolute; -- will be set by the plugin */
			height: 40px;
			line-height: 40px;
		}
	</style>
	<ul id="newsTicker">
		<li>BREAKING NEWS: I spilled the milk :(</li>
		<li>Follow me on twitter, or don't! <a href="http://twitter.com/grrowl">@grrowl</a></li>
		<li>Very interesting news coming up.</li>
		<li>Look at my other cool things at <a href="http://github.com/grrowl">github.com/grrowl</a></li>
		<li>More items.</li>
		<li>Crazy, crazy things.</li>
	</ul>
```