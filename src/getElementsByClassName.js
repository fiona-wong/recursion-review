// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
, node) {
  
  node = node || document.body;
  var children = node.children;
  var results = [];
  
  if (node.classList.contains(className)) {
    results.push(node);
  }
  
  if (children) {
      
    for (var i = 0; i < children.length; i++) {
      results = results.concat(getElementsByClassName(className, children[i]));
    }
  }
  
  return results;

};
