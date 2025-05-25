/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = []
  let pathArray = path.split('/')
  for (let i = 0; i < pathArray.length; i++) {
    if(pathArray[i] === "" || pathArray[i] === ".") {
      continue
    } else if(pathArray[i] === "..") {
      stack.pop()
    } else {
      stack.push(pathArray[i])
    }
  }
  return '/' + stack.join('/')
};

console.log(simplifyPath("/home/"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/a/../../b/../c//.//"))
console.log(simplifyPath("/a//b////c/d//././/.."))
console.log(simplifyPath("/..."))
console.log(simplifyPath("/..hidden"))
console.log(simplifyPath("/a/b/c/../.."))
console.log(simplifyPath("/a/b/c/../../d"))