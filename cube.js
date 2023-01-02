/* colors to represent expertise 
orange = java
blue = typescript
yellow = js
etc...

make each block on click pop up a form to then fill in some info

after esatblished, refresh page, gridbox should be filled with color, on hover, displays name and main lang/langs (grabbed from github api)

on click of grid, popups the form with links and socials

may need 'data-ga-click="Repository, language stats search click, location:repo overview"' to grab lang data
*/ 
const btnCreatorInfo = document.getElementById("creator-info");
const socialBar = document.getElementById("side-bar");
btnCreatorInfo.addEventListener("click", getSocials);

function getSocials() {
    socialBar.classList.remove('disappear');
    socialBar.classList.add('show');      
}

document.addEventListener('mouseup', function(e) {
    if (!socialBar.contains(e.target)) {
        socialBar.classList.remove('show');
        socialBar.classList.add('disappear');
    }
});

const grid = document.querySelector('.cube');

for (let i = 0; i < 64; i++) {
	const cell = document.createElement('button');
	cell.classList.add('cell');

	// const button = document.createElement('button');
	// button.textContent = i + 1;

	// cell.append(button);
	grid.append(cell);
}
