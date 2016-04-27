$(document).ready(function(){



  $('#dislike-button').click(function(event){
    getCorgi();
    corgiNumber += 1;
  })


  $('#like-button').click(function(event){
    getCorgi();
    corgiNumber += 1;
  })

  $('#show-likes-button').click(function(event){
    ;
  })
})

var corgiNumber = 0;

function getCorgi(){
  $.ajax({
    url: '/corgis/',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data, textStatus){
    console.log(data);
    setCorgi(data);
  })
  .fail(function(data, textStatus){
    console.log(textStatus);
  })
}

function setCorgi(data){
  var name = data[corgiNumber].name;
  var age = data[corgiNumber].age;
  var picture = data[corgiNumber].picture;
  $('#name').html('Name: ' + name);
  $('#age').html('Age :' + age);
  $('#dog').attr('src', picture);
}

// function corgiDisliked(){
//   $.ajax({
//     url: '/corgis/',
//     type: 'put',
//     dataType: 'json',
//     data: {}
//   })
// }
