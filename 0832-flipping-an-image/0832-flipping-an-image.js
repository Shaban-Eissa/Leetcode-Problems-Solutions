/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = image[i].reverse();
  }
  return image.map((row) => row.map((cell) => (cell === 0 ? 1 : 0)));
};