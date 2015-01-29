# is_hidden.js

Adds a method to the Element interface to determine if the given element is currently hidden from view.

```html
<html>
  <body>
    <div class="a"></div>
  </body>
</html>
```

```js
var tmp = document.getElementsByClassName('a')
for(var i = 0; i < tmp.length; i++){
  console.log(tmp[i].isHidden());
}
```

## Contributing
Yes!  Please do.  For starters we could increase the meaningfulness of this README 