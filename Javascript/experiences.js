export const renderSite = function(experience) {
    const $root = $('#tabs');
    $('#exp1').css('color', '#FC6230');
    getExp1(experience);


    $(document).on('click', '#exp1',  function(e){
        e.preventDefault(); 
        getExp1(experience); 
        revertColors();
        $('#exp1').css('color', '#FC6230');
    });
    $(document).on('click', '#exp2',  function(e){
        e.preventDefault(); 
        getExp2(experience); 
        revertColors();
        $('#exp2').css('color', '#FC6230');
    });
    $(document).on('click', '#exp3',  function(e){
        e.preventDefault(); 
        getExp3(experience); 
        revertColors();
        $('#exp3').css('color', '#FC6230');
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
            <h5 class="card-title paragraphs">${obj.title}</h5>
            <h6 class="card-text card-font">${obj.date}</h6>
            <p class="card-text card-font">${obj.description}</p>
  
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
        <h5 class="card-title paragraphs">${obj.title}</h5>
        <h6 class="card-text card-font">${obj.date}</h6>
        <p class="card-text card-font">${obj.description}</p>
  
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
        <h5 class="card-title paragraphs">${obj.title}</h5>
        <h6 class="card-text card-font">${obj.date}</h6>
        <p class="card-text card-font">${obj.description}</p>
  
        </div>
    `
    $root.replaceWith(screen); 
}



export function revertColors(){
  $('#exp1').css('color', 'rgb(119, 118, 112)');
  $('#exp2').css('color', 'rgb(119, 118, 112)');
  $('#exp3').css('color', 'rgb(119, 118, 112)');
}