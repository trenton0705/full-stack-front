

$(document).ready(() => {
  $('.modal').modal()
})

$('#welcomeButton').click(function () {
  $.get('https://quiet-badlands-94685.herokuapp.com/games')
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      $('#cards').append(`
          <div id="card${data[i].id}" class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span id="name${data[i].id}" class="card-title">${data[i].name}</span>
                <p id="pub${data[i].id}">Published by: ${data[i].publisher}</p>
                <p id="year${data[i].id}">Release Year: ${data[i].release}</p>
                <p>ID: ${data[i].id} </p>
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
        <div id="card${data[0].id}" class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data[0].name}</span>
              <p>Published by: ${data[0].publisher}</p>
              <p>Release Year: ${data[0].release}</p>
              <p>ID: ${data[0].id} </p>
            </div>
          </div>
        </div>
    `)
  })
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('cards').style.display = 'block'
})

$('#addCard').click(function () {
  $('#modal1').modal('open')
})

$('#formSubmit').click(function () {
  let name = $('#formGame').val()
  let publisher = $('#formPub').val()
  let release = $('#formYear').val()
  let postData = {name: name, publisher: publisher, release: release}

  $.post('https://quiet-badlands-94685.herokuapp.com/games', postData).then((id) => {
    $.get(`https://quiet-badlands-94685.herokuapp.com/games/${id}`).then((data) => {
      $('#cards').append(`
          <div id="card${data[0].id}" class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${data[0].name}</span>
                <p>Published by: ${data[0].publisher}</p>
                <p>Release Year: ${data[0].release}</p>
                <p>ID: ${data[0].id} </p>
              </div>
            </div>
          </div>
      `)
    })
  })
})

$('#editCard').click(function () {
  $('#modal2').modal('open')
})

$('#formSubmit2').click(function () {
  let id = $('#formId2').val()
  let name = $('#formGame2').val()
  let publisher = $('#formPub2').val()
  let release = $('#formYear2').val()
  let putData = {name: name, publisher: publisher, release: release}

  $.ajax({
    url: `https://quiet-badlands-94685.herokuapp.com/games/${id}`,
    type: 'PUT',
    data: putData
  }).then((data) => {
    $(`#card${id}`).remove()
    $('#cards').append(`
        <div id="card${data[0].id}" class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data[0].name}</span>
              <p>Published by: ${data[0].publisher}</p>
              <p>Release Year: ${data[0].release}</p>
              <p>ID: ${data[0].id} </p>
            </div>
          </div>
        </div>
    `)
  })
})

$('#deleteCard').click(function () {
  $('#modal3').modal('open')
})

$('#formSubmit3').click(function () {
  let id = $('#formId3').val()

  $.ajax({
    url: `https://quiet-badlands-94685.herokuapp.com/games/${id}`,
    type: 'DELETE'
  })

  $(`#card${id}`).remove()
})
