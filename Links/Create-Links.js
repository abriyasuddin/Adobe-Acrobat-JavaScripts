// Create Links from Bookmark Names
//
// PURPOSE:
// Creates clickable links for text that matches bookmark names.
//
// USER SETTINGS:
// LINK_MODE = "ROW" → Creates a link across the full row.
// LINK_MODE = "WORD" → Creates a link only around the matching word.
//
// START_PAGE = First page to process.
// END_PAGE   = Last page to process.
//
// IMPORTANT:
// Bookmark names must exactly match the text on the selected pages.
//
// EXAMPLE:
// var LINK_MODE = "ROW";
// var START_PAGE = 5, END_PAGE = 10;
var LINK_MODE="ROW";var START_PAGE=5,END_PAGE=5;function collect(b,p,m){if(!b||!b.children)return;for(var i=0;i<b.children.length;i++){var c=b.children[i],q=p+".children["+i+"]";if(m[c.name]===undefined)m[c.name]=q;collect(c,q,m);}}var bm={};collect(this.bookmarkRoot,"this.bookmarkRoot",bm);var total=0;for(var pg=START_PAGE-1;pg<=END_PAGE-1&&pg<this.numPages;pg++){var hits=[],nw=this.getPageNumWords(pg);for(var w=0;w<nw;w++){var t=this.getPageNthWord(pg,w,true);if(bm[t]){var qs=this.getPageNthWordQuads(pg,w);if(qs&&qs.length){var q=qs[0],l=999999,b=999999,r=-999999,top=-999999;for(var k=0;k<q.length;k+=2){if(q[k]<l)l=q[k];if(q[k]>r)r=q[k];if(q[k+1]<b)b=q[k+1];if(q[k+1]>top)top=q[k+1];}hits.push({t:t,b:b,top:top,l:l,r:r,path:bm[t]});}}}if(LINK_MODE=="ROW"){hits.sort(function(a,b){return b.top-a.top;});var box=this.getPageBox("Crop",pg);for(var h=0;h<hits.length;h++){var ytop=(h==0)?hits[h].top+5:(hits[h-1].b+hits[h].top)/2;var ybottom=(h==hits.length-1)?hits[h].b-5:(hits[h].b+hits[h+1].top)/2;var L=this.addLink(pg,[box[0]+5,ybottom,box[2]-5,ytop]);L.highlightMode="None";L.setAction(hits[h].path+".execute();");total++;}}else{for(var h=0;h<hits.length;h++){var L=this.addLink(pg,[hits[h].l,hits[h].b,hits[h].r,hits[h].top]);L.highlightMode="None";L.setAction(hits[h].path+".execute();");total++;}}}app.alert(total+" links created in "+LINK_MODE+" mode.");
