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

## Credit
All credit is due to Tokimon on [StackOverflow](http://stackoverflow.com/a/5354536/579018).  I've just put it together and made a library out of it.

## Contributing
Yes!  Please do.  For starters we could increase the meaningfulness of this README 