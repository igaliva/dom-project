// Header's Page
function buildHeader () {
    const header = document.createElement('Header');
    header.classList.add('header');
    header.textContent = 'Homework 3';
    return header;
}

// Description's Page

function builDescription () {
    const div = document.createElement('div');

    div.setAttribute('id', 'description');

    const h2 = document.createElement('h2');
   
    h2.textContent = 'Who we are';
   
    const p = document.createElement('p');

    p.textContent = 'lorem ipsickanmna';

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

// Make all the pieces
function buildPage (){
    const body = document.querySelector('body');
    body.classList.add('body');
    body.appendChild(buildHeader());
    body.appendChild(builDescription());
}


// Run the function
buildPage();