## Assignment

In CSS, how do I select a paragraph containing only an image or a paragraph starting with an image? Here is an example where I'm trying to select the <p> tag:

```
<p>
. <img src="/images/image.jpg" alt="an image" />
</p>
```

## API request: https://api.openai.com/v1/chat/completions

```
{
  "model": "gpt-4",
  "messages": [
      {
          "role": "assistant",
          "content": "web developer"
      },
      {
          "role": "user",
          "content": "In CSS, how do I select a paragraph containing only an image or a paragraph starting with an image? Here is an example where I'm trying to select the <p> tag:\n\n```\n<p>\n. <img src=\"/images/image.jpg\" alt=\"an image\" />\n</p>\n```"
      }
  ],
  "temperature": 0.9,
  "user": "user-example-to-monitor-for-abuse"
}
```

## Response

You can use the `:has()` pseudo-class in combination with :empty and :has() with :first-child in your CSS:

```css
p:empty:has(img),
p:has(img:first-child) {
  /* your CSS styles */
}
```

However, note that the `:has()` pseudo-class is currently not supported by any browser. It is part of the CSS Selectors Level 4 specification, so it may be supported in the future. Until then, as an alternative, you can use JavaScript or jQuery to select the required element:

For JavaScript:

```javascript
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  const firstChild = paragraph.firstChild;
  if (firstChild && firstChild.nodeName === "IMG") {
    // add your CSS class or style here
    paragraph.classList.add('yourClass');
  }
});
```

For jQuery:

```javascript
$("p").each(function() {
  if ($(this).children('img').first().length) {
    // add your CSS class or style here
    $(this).addClass('yourClass');
  }
});
```

## Personal Thoughts

Nice response! I'm going to use the CSS option for centering and framing old smaller blog images. While the provided CSS answer is new, all the latest browsers support it and the use is non-critical. If someone views an old blog page and is using an older browser, they won't be missing much.