# Gitbook plugin component

With this plugin, a book can contain UI component demos. It takes content of the block and creates and inject content to an resizable iframe, and prints a codeblock for documentation purpose.

## How to use it?

To use the component plugin in your Gitbook project, add the component plugin to the book.json file, then install plugins using gitbook install.

```json
{
    "plugins": ["component"]
}
```

## component format

A component consists of a single block, in this example it's demonstrating the use of a web component, but it could be anything.

```html
{% component %}
<my-element>I'm an webcomponent, rendered in an iframe loading my own script.</my-element>
<script src="/assets/my-element.js"></script>
{% endcomponent %}
```

If you are writing ui documentation using gitbook, you might like some of my other plugins:

* [gitbook-plugin-jsdoc]() - Inject jsdoc directly into a page from a source js file.
* [gitbook-plugin-watch]() - Set up file-watching for assets used in your gitbook.