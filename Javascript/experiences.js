export const renderSite = function(experience) {
    const $root = $('#tabs');
    $('#exp1').css('color', 'white');
    getExp1(experience);


    $(document).on('click', '#exp1',  function(e){
        e.preventDefault(); 
        getExp1(experience); 
        revertColors();
        $('#exp1').css('color', 'white');
    });
    $(document).on('click', '#exp2',  function(e){
        e.preventDefault(); 
        getExp2(experience); 
        revertColors();
        $('#exp2').css('color', 'white');
    });
    $(document).on('click', '#exp3',  function(e){
        e.preventDefault(); 
        getExp3(experience); 
        revertColors();
        $('#exp3').css('color', 'white');
    });

}
 
$(function () {
    renderSite(experienceData); 
}); 


function getExp1(experience) {
    const $root = $('#tabs');
    var obj = $.grep(experience, function(obj){return obj.id === 1;})[0];
    let screen = document.createElement('section');
    screen.innerHTML = `
        <div id = "tabs">
            <h5 class="card-title">${obj.title}</h5>
            <p class="card-text">${obj.description}</p>
            <p class="card-text"><small class="text-muted">${obj.tech}</small></p>
  
        </div>
    `
    $root.replaceWith(screen); 
}

function getExp2(experience) {
    const $root = $('#tabs');
    var obj = $.grep(experience, function(obj){return obj.id === 2;})[0];
    let screen = document.createElement('section');
    screen.innerHTML = `
        <div id = "tabs">
            <h5 class="card-title">${obj.title}</h5>
            <p class="card-text">${obj.description}</p>
            <p class="card-text"><small class="text-muted">${obj.tech}</small></p>
  
        </div>
    `
    $root.replaceWith(screen); 
}

function getExp3(experience) {
    const $root = $('#tabs');
    var obj = $.grep(experience, function(obj){return obj.id === 3;})[0];
    let screen = document.createElement('section');
    screen.innerHTML = `
        <div id = "tabs">
            <h5 class="card-title">${obj.title}</h5>
            <p class="card-text">${obj.description}</p>
            <p class="card-text"><small class="text-muted">${obj.tech}</small></p>
  
        </div>
    `
    $root.replaceWith(screen); 
}



export function revertColors(){
  $('#exp1').css('color', 'rgb(119, 118, 112)');
  $('#exp2').css('color', 'rgb(119, 118, 112)');
  $('#exp3').css('color', 'rgb(119, 118, 112)');
  $('#exp4').css('color', 'rgb(119, 118, 112)');
  $('#exp5').css('color', 'rgb(119, 118, 112)');
}