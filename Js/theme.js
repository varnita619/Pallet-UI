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
    rootDoc.style.setProperty('--text-color', '#000000');
    rootDoc.style.setProperty('--text-black', '#ffffff');
    rootDoc.style.setProperty('--shadow-color', '#ffffff');
    rootDoc.style.setProperty('--disable-button-color', '#cacaca');
    rootDoc.style.setProperty('--text-grey', '#cacaca');
    rootDoc.style.setProperty('--border-color', '#000000');
};

const addLightTheme = () => {
    bodyDoc.style.backgroundColor = 'inherit';
    bodyDoc.style.color = '#3e4152';
    rootDoc.style.setProperty('--primary-color', '#0c8cf4');
    rootDoc.style.setProperty('--primary-color-light', '#0c65f4d3');
    rootDoc.style.setProperty('--secondary-color', '#d04ee7e0');
    rootDoc.style.setProperty('--text-color', '#ffffff');
    rootDoc.style.setProperty('--text-black', '#000000');
    rootDoc.style.setProperty('--shadow-color', '#0000005b');
    rootDoc.style.setProperty('--border-color', '#a19a9a62');
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
