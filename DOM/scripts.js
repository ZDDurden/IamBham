// js

window.addEventListener('DOMContentLoaded', (event) => {

    let colors = ['tomato', 'orange', 'pink', 'skyblue', 'olive', 'maroon', 'teal', 'black'],
        listItemIndex = 0;

    for (let index = 0; index < 6; index++) {
        let element = document.createElement(`h${index+1}`),
            elementText = document.createTextNode(`This is an h${index+1}`);

            element.className = `h${index+1}`;
            element.appendChild(elementText);
            element.addEventListener('dblclick', changeColor.bind(element.className));
            document.body.appendChild(element);
    }

    function changeColor() {
        let colorIndex = Math.floor(Math.random() * Math.floor(8));
        document.getElementsByClassName(this)[0].style.color = colors[colorIndex];
    }

    function addListItem() {
        let listItem = document.createElement('li'),
            listItemText = document.createTextNode('this is list item ' + listItemIndex);

            listItem.className = 'li' + listItemIndex;
            listItem.addEventListener('click', changeColor.bind(listItem.className));
            listItem.addEventListener('dblclick', removeListItem.bind(listItem.className));
            listItem.appendChild(listItemText);
            document.body.appendChild(listItem);
            listItemIndex++;
    }

    function removeListItem() {
        document.getElementsByClassName(this)[0].remove()
    }

    let button = document.body.getElementsByClassName('listButton')[0];
    button.addEventListener('click', addListItem);
})
    
    // let headerContainer = document.createElement('div'),
    //     h1 = document.createElement('h1'),
    //     h2 = document.createElement('h2'),
    //     h3 = document.createElement('h3'),
    //     h4 = document.createElement('h4'),
    //     h5 = document.createElement('h5'),
    //     h6 = document.createElement('h6'),
    //     h1Text = document.createTextNode('This is an h1'),
    //     h2Text = document.createTextNode('This is an h2'),
    //     h3Text = document.createTextNode('This is an h3'),
    //     h4Text = document.createTextNode('This is an h4'),
    //     h5Text = document.createTextNode('This is an h5'),
    //     h6Text = document.createTextNode('This is an h6'),
    //     colors = ['tomato', 'orange', 'pink', 'skyblue', 'olive', 'maroon', 'teal', 'black'];

    // headerContainer.className = 'header-container';
    // h1.className = 'h1';
    // h2.className = 'h2';
    // h3.className = 'h3';
    // h4.className = 'h4';
    // h5.className = 'h5';
    // h6.className = 'h6';

    // h1.appendChild(h1Text);
    // h2.appendChild(h2Text);
    // h3.appendChild(h3Text);
    // h4.appendChild(h4Text);
    // h5.appendChild(h5Text);
    // h6.appendChild(h6Text);
    // document.body.appendChild(h1);
    // document.body.appendChild(h2);
    // document.body.appendChild(h3);
    // document.body.appendChild(h4);
    // document.body.appendChild(h5);
    // document.body.appendChild(h6);


// });



