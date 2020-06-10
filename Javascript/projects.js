

export const renderCard = function(project) {
  
    return `
            <div class="card" >
                <img class="card-img-top" src="${project.image}" alt="Card image cap" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <p class="card-text"><small class="text-muted">${project.tech}</small></p>           
                    </div>
            </div>
                 
           `
};



export const loadProjectsIntoDOM = function(project) {
    

    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // Generate the cards using renderCard()
    let cards = $('<div class = "row mb-3">');
    for (let i = 0; i < project.length; i++) {
        cards.append(renderCard(project[i]));
    }

    // Append cards to the $root element
    $root.addClass().append(cards);


};



/**
 * Use jQuery to execute the function after the page loads
 */
$(function() {
    loadProjectsIntoDOM(projectData);
});

