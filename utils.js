/**
* Returns a random number between min (inclusive) and max (exclusive)
*/
function randArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
* Returns a random integer between min (inclusive) and max (exclusive).
*/
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/** 
 * Creates a readable timestamp from a Unix timestamp
 */
function timestamp() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millis = date.getMilliseconds();

  year = year.toString().substr(2);
  month = ("00" + month).substr(-2, 2);
  day = ("00" + day).substr(-2, 2);
  minute = ("00" + minute).substr(-2, 2);
  second = ("00" + second).substr(-2, 2);

  return [year, month, day, "_", hour, minute, second, "_", millis].join('');
}

/**
 * Checks whether two colors are equal
 */
function colorsEqual(col1, col2) {
  return col1.toString() == col2.toString()
}
