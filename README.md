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
&lt;style&gt;
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
&lt;/style&gt;
&lt;ul id="newsTicker"&gt;
	&lt;li&gt;BREAKING NEWS: I spilled the milk :(&lt;/li&gt;
	&lt;li&gt;Follow me on twitter, or don't! &lt;a href="http://twitter.com/grrowl"&gt;@grrowl&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;Very interesting news coming up.&lt;/li&gt;
	&lt;li&gt;Look at my other cool things at &lt;a href="http://github.com/grrowl"&gt;github.com/grrowl&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;More items.&lt;/li&gt;
	&lt;li&gt;Crazy, crazy things.&lt;/li&gt;
&lt;/ul&gt;
```