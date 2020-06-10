

export const renderCard = function(project) {
  
    return `
            <div class="card bg-transparent" >
            <img class="card-img-top" src="${project.image}" alt="Card image cap" style="width: 100%;">
                <div class="card-body card-color ">
                    <h5 class="card-title paragraphs">${project.title}</h5>
                    <p class="card-text card-font">${project.description}</p>
                    <p class="card-text" style = "color:#9F9F9F; font-size:12px;">${project.tech}</p>           
                </div>
            </div>
           `    
};

export const gitCard = function(project) {

    return `
    
    
    
    
    
    `
}


export const addRow = function() {
    return `<div class = "row mb-3">`
    
}


export const loadProjectsIntoDOM = function(project) {
    

    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // Generate the cards using renderCard()
     let cards1 = $(addRow());
     for (let i = 0; i < 3; i++) {
         cards1.append(renderCard(project[i]));
     }
     let cards2 = $(addRow());
      for (let i = 3; i < 6; i++) {
          cards2.append(renderCard(project[i]));
     }

    // Append cards to the $root element
    $root.addClass().append(cards1);
    $root.addClass().append(cards2)


};



/**
 * Use jQuery to execute the function after the page loads
 */
$(function() {
    loadProjectsIntoDOM(projectData);
});

