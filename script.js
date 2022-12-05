function mountainToggle() {
    document.getElementById('mountain-1').classList.remove('selected');
    document.getElementById('mountain-2').classList.remove('selected');
    let currentTab = event.target.id;
    document.getElementById(currentTab).classList.add('selected');
    document.getElementById(currentTab).style.color = '#404f6c';
    if (currentTab === 'mountain-2') {
        document.getElementById('tab-2').style.display = 'unset';
        document.getElementById('mountain-1').style.color = '#b0b4be';
    } else {
        document.getElementById('mountain-2').style.color = '#b0b4be';
        document.getElementById('tab-2').style.display = 'none';
    }
}

//accordion logic
let on = false;

function hamburger() {
    if (on === true) { //when the menu disappears 
    console.log('not displayed');
    document.getElementById('hamburger-background').style.display = 'none';
    document.getElementById('item1').style.backgroundColor = 'black';
    document.getElementById('item2').style.backgroundColor = 'black';
    document.getElementById('item3').style.backgroundColor = 'black';
    document.getElementById('hamburger-menu').style.display = 'none';
    on = false;
    return
    } else {
        console.log('displayed'); //making the menu appear
        document.getElementById('hamburger-background').style.display = 'inline-block';
        document.getElementById('hamburger-menu').style.display = 'inline-block';
        document.getElementById('nav-hamburger').style.zIndex = '4';
        on = true;
        return
    }
}
function hamBackground() { //make the menu disappear when you click background
    if(on === true) {
        document.getElementById('hamburger-background').style.display = 'none';
        document.getElementById('item1').style.backgroundColor = 'black';
        document.getElementById('item2').style.backgroundColor = 'black';
        document.getElementById('item3').style.backgroundColor = 'black';
        document.getElementById('hamburger-menu').style.display = 'none';
        on = false;
    }
}