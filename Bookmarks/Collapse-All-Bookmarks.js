  function f(b){if(b&&b.children){for(var i=0;i<b.children.length;i++){f(b.children[i]);b.children[i].open=false;}}}f(this.bookmarkRoot);
