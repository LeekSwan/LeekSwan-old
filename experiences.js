
export const renderSite = function() {
    const $root = $('#tabs');
    $('#exp1').css('color', 'white');
    getExp1();

    $(document).on('click', '#exp1',  function(e){
        e.preventDefault(); 
        getExp1(); 
        revertColors();
        $('exp1').css('color', 'white');
    });
    $(document).on('click', '#exp2',  function(e){

        e.preventDefault(); 
        getExp2(); 
        revertColors();
        $('#exp2').css('color', 'white');
    });
    $(document).on('click', '#exp3',  function(e){
        e.preventDefault(); 
        getExp3(); 
        revertColors();
        $('#exp3').css('color', 'white');
    });

}
 
$(function () {
    renderSite(); 
}); 


function getExp1(experience) {
    const $root = $('#tabs');

    let screen = document.createElement('section');
    screen.innerHTML = `
        <div id = "tabs">
            <h5 class="card-title">${experience.title}</h5>
            <p class="card-text">${experience.description}</p>
            <p class="card-text"><small class="text-muted">${experience.tech}</small></p>
  
        </div>
    `
    $root.replaceWith(screen); 
}

function getExp2() {
    const $root = $('#tabs');

    let screen = document.createElement('section');
    screen.innerHTML = `
        <div id = "tabs">test2</div>
    `
    $root.replaceWith(screen); 
}

function getExp3() {
    const $root = $('#tabs');

    let screen = `
        <div id = "tabs">test3</div>
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


