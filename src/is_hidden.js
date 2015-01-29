Element.prototype.isHidden = function(){
    function _posY(elm) {
      var test = elm, top = 0;

      while(!!test && test.tagName.toLowerCase() !== "body") {
          top += test.offsetTop;
          test = test.offsetParent;
      }

      return top;
  }

  function _viewPortHeight() {
      var de = document.documentElement;

      if(!!window.innerWidth)
      { return window.innerHeight; }
      else if( de && !isNaN(de.clientHeight) )
      { return de.clientHeight; }

      return 0;
  }

  function _scrollY() {
      if( window.pageYOffset ) { return window.pageYOffset; }
      return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  }

  function _isHidden( elm ) {
      var vpH = _viewPortHeight(), // Viewport Height
          st = _scrollY(), // Scroll Top
          y = _posY(elm);

      return (y > (vpH + st));
  }

  return _isHidden(this);
}