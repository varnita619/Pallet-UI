const toggleThemeBtn = document.querySelector('#toggle-theme');
const bodyDoc = document.querySelector('body');

const rootDoc = document.querySelector(':root');

console.log(rootDoc)

const addDarkTheme = () => {
	bodyDoc.style.backgroundColor = 'black';
	bodyDoc.style.color = 'white';
	rootDoc.style.setProperty('--primary-color', '#0c8cf4');
	rootDoc.style.setProperty('--primary-color-light', '#0c65f4d3');
	rootDoc.style.setProperty('--secondary-color', '#d04ee7e0');
	rootDoc.style.setProperty('--text-color', 'white');
	rootDoc.style.setProperty('--text-black', 'white');
	rootDoc.style.setProperty('--shadow-color', 'white');
	rootDoc.style.setProperty('--light-secondary-text-color', '#cacaca');
	rootDoc.style.setProperty('--secondary-color', '#9d9d9d');
	rootDoc.style.setProperty('--dark-secondary-color', '#868686');

	rootDoc.style.setProperty('--bg-color-primary', '#333');
	rootDoc.style.setProperty('--bg-color-primary-2', '#424242');
	rootDoc.style.setProperty('--docSite-sec-color', '#424242');
	rootDoc.style.setProperty('--bg-color-primary-3', '#424242');
};

const addLightTheme = () => {
	bodyDoc.style.backgroundColor = 'inherit';
	bodyDoc.style.color = '#3e4152';
	rootDoc.style.setProperty('--primary-color', '#0c8cf4');
	rootDoc.style.setProperty('--primary-color-light', '#0c65f4d3');
	rootDoc.style.setProperty('--secondary-color', '#d04ee7e0');
	rootDoc.style.setProperty('--text-color', 'white');
	rootDoc.style.setProperty('--text-black', 'black');
	rootDoc.style.setProperty('--dark-secondary-text-color', '#3f4049');
	rootDoc.style.setProperty('--light-secondary-text-color', '#282c3f');
	rootDoc.style.setProperty('--secondary-color', ' #eaeaec');
	rootDoc.style.setProperty('--dark-secondary-color', '#d8d8da');

	rootDoc.style.setProperty('--bg-color-primary', '#fcfcfc');
	rootDoc.style.setProperty('--bg-color-primary-2', 'rgb(252, 240, 240)');
	rootDoc.style.setProperty('--docSite-sec-color', '#e6e6e6');
	rootDoc.style.setProperty('--bg-color-primary-3', '#3f3947');
};

const darkThemeToggleBtn = () => {
	toggleThemeBtn.classList.remove('fa-moon');
	toggleThemeBtn.classList.add('fa-sun');
};

const lightThemeToggleBtn = () => {
	toggleThemeBtn.classList.add('fa-moon');
	toggleThemeBtn.classList.remove('fa-sun');
};

window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('theme')) {
		addDarkTheme();
		darkThemeToggleBtn();
	} else {
		addLightTheme();
		lightThemeToggleBtn();
	}
});

toggleThemeBtn.addEventListener('click', () => {
	if (toggleThemeBtn.classList.contains('fa-moon')) {
		darkThemeToggleBtn();
		addDarkTheme();
		localStorage.setItem('theme', 'dark');
	} else {
		localStorage.removeItem('theme');
		lightThemeToggleBtn();
		addLightTheme();
	}
});
