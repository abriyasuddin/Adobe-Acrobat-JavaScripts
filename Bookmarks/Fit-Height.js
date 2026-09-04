var d=this;function f(b){if(!b||!b.children)return;for(var i=0;i<b.children.length;i++){var x=b.children[i];x.execute();var p=d.pageNum;x.setAction("this.pageNum="+p+";this.zoomType=zoomtype.fitH;");f(x)}}function s(b){if(!b||!b.children)return;for(var i=0;i<b.children.length;i++){var x=b.children[i];if(x.name=="PARENT BOOKMARK")f(x);else s(x)}}s(d.bookmarkRoot);
// ===== USER SETTINGS =====
// Change this "PARENT BOOKMARK" With Bookmark level you want.
