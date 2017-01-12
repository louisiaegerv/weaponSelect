var select = document.querySelectorAll('input');
var selectedWeapon;
var btn = document.querySelector('button');
var comment = document.querySelector('#weaponComment');
var images = {
    sword: 'url(https://images.alphacoders.com/299/299353.jpg)',
    bow: 'url(http://cdn26.us1.fansshare.com/photo/gamewallpapers/crysis-laser-bow-hd-game-wallpaper-wallpaper-356405830.jpg)',
    cannon: 'url(http://static3.gamespot.com/uploads/screen_kubrick/gamespot/images/2009/230/984963-954261_20090819_001.jpg)'
}

for(i = 0; i < select.length; i++) {
    select[i].onchange = function() {
        selectedWeapon = document.querySelector('input:checked').value;
        console.log(selectedWeapon); 
    };
}

btn.onclick = function() {
    if (selectedWeapon === "Energy Sword")
        setBG('sword');
    else if (selectedWeapon === "Plasma Bow")
        setBG('bow');
    else if (selectedWeapon === "Beam Cannon")
        setBG('cannon');
    if (selectedWeapon !== undefined)
        comment.textContent = "Ahh, so you wield the " + selectedWeapon + " - wise choice.";
};

function setBG(keyChoice) {
    document.body.style.backgroundImage = images[keyChoice];
}