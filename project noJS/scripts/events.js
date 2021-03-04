'use strict';

let browseBtn = document.querySelector('.browse');
let browseDropMenu = document.querySelector('.browse__drop')

function showBrowseDrop() {
    browseDropMenu.style.display = 'flex';
};
function hideBrowseDrop() {
    browseDropMenu.style.display = 'none'
}

browseBtn.addEventListener('click', showBrowseDrop);
browseBtn.addEventListener('blur', hideBrowseDrop);






