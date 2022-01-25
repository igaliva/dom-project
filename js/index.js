// Header
function buildHeader () {
    const header = document.createElement('Header');
    header.classList.add('header');
    header.textContent = 'Homework 3';
    return header;
}

// Description

function builDescription () {
    const div = document.createElement('div');

    div.setAttribute('id', 'description');

    const h2 = document.createElement('h2');
   
    h2.textContent = 'Who we are';
   
    const p = document.createElement('p');

    p.textContent = 'deleniti quod voluptatibus est inventore excepturi quos recusandae molestias, voluptates ut harum corporis. Unde sint odit pariatur impedit nemo';

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

// Main

function buildMain () {
    const main = document.createElement('main');
    main.classList.add('main');

    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
    container.appendChild(buildGrey());
    container.appendChild(buildUl());

    return main;
}

// Grey

function buildGrey () {
    const div = document.createElement('div');
    div.classList.add('greyArea');
    
    const p = document.createElement('p');
    p.textContent = '558x460';
    div.appendChild(p);


    return div;
}

// Ul

function buildUl () {
    const div = document.createElement('div');
    div.classList.add('textArea');
    const ul = document.createElement('ul');
    ul.classList.add('ul');
    
    div.appendChild(ul);
    
    ul.appendChild(buildLi());
    ul.appendChild(buildLi());
    ul.appendChild(buildLi());
    
    return ul;
}

// Li

function buildLi () {
    const li = document.createElement('li');
    li.classList.add('li');
    
    const h3 = document.createElement('h3');
    h3.classList.add('h3');
    li.appendChild(h3);
    
    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quasi, deleniti quod voluptatibus est inventore excepturi quos recusandae molestias, voluptates ut harum corporis. Unde sint odit pariatur impedit nemo. Possimus quos, sed ea nemo quidem, beatae dolor at corrupti eum, placeat distinctio. Impedit error, sint dolorum maiores consectetur voluptas eveniet?';
    
    li.appendChild(p);
    
    return li;
}

// Footer

function buildFooter () {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = '<p>&copy; copy rights reserved to Igal</p>';
    return footer;
}

// Make all the pieces
function buildPage (){
    const body = document.querySelector('body');
    body.classList.add('body');
    body.appendChild(buildHeader());
    body.appendChild(builDescription());
    body.appendChild(buildMain());
    body.appendChild(buildFooter());

    // Ul topics
    const arr = ['our vision','our mission','our valuse'];
    let nodeList = document.querySelectorAll("h3");
    for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].textContent = `${arr[i]}`;
    }
}


// Run the function
buildPage();