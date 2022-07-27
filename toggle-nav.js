
function openNav() {
    let div = document.createElement('div');
    div.id = 'nav-menu';
    div.style.display = 'inline';

    // create close button div
    let closeButton = document.createElement('div');
    closeButton.textContent = 'x';
    closeButton.id = 'closeButton';
    closeButton.style.display= 'inline';
    div.append(closeButton);
    
    //create ul for menu-content
    let menu = document.createElement('ul');
    menu.innerHTML = '<li><a href = #>Portfolio</a></li><li><a href = #>About</a></li><li><a href = #>Contact</a></li>';
    menu.style.display = 'inline';
    div.append(menu);
    document.body.append(div);
}
    
let btn = document.querySelector('button#btn');
