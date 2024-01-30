var array = [1, 2, 1, 3, 5, 3, 6, 1, 1, 7, 6, 3, 4, 4, 2, 3, 3, 1, 4, 6, 8, 9, 0, 1];

function calculateFrequency() {
  var frequency = {};

  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }

  var show = '';

  for (var item in frequency) {
    show += item + ' appeared ' + frequency[item] + ' times. ';
  }

  document.getElementById('cool').innerHTML = show;
  document.getElementById('cool').style.display = 'block';
}