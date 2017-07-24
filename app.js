

$(document).ready(() => {
  $.get('https://quiet-badlands-94685.herokuapp.com/games')
  .then((data) => {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $('ul').append(`<li>${data[i].name}, published by ${data[i].publisher} in ${data[i].release}</li>`)
    }
  })
})
