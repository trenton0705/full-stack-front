

$(document).ready(() => {
  $('.modal').modal()
})

$('#welcomeButton').click(function () {
  $.get('https://quiet-badlands-94685.herokuapp.com/games')
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      $('#cards').append(`
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${i + 1}. ${data[i].name}</span>
                <p>Published by: ${data[i].publisher}</p>
                <p>Release Year: ${data[i].release}</p>
              </div>
              <div class="card-action">
                <a href="#" id="edit${i}">Edit</a>
                <a href="#" id="delete${i}" >Delete</a>
              </div>
            </div>
          </div>
      `)
    }
  })
  document.getElementById('welcome').style.display = 'none'
  document.getElementById('cards').style.display = 'block'
})

$('#specificButton').click(() => {
  let id = $('#searchBox').val()
  $.get(`https://quiet-badlands-94685.herokuapp.com/games/${id}`).then((data) => {
    console.log(data);
    $('#cards').append(`
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data[0].name}</span>
              <p>Published by: ${data[0].publisher}</p>
              <p>Release Year: ${data[0].release}</p>
            </div>
            <div class="card-action">
              <a href="#" id="edit">Edit</a>
              <a href="#" id="delete" >Delete</a>
            </div>
          </div>
        </div>
    `)
  })
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('cards').style.display = 'block'
})

$('#addCard').click(function () {
  console.log('hello');
  $('#modal1').modal('open')
})
