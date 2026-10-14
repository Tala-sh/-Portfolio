

// 1. Select the button and the body elements from the HTML
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 2. Add an event listener to listen for clicks on the button
toggleButton.addEventListener('click', function() {
    
    // 3. Toggle the 'dark-mode' class on the body
    // the toggle is switcher 
    body.classList.toggle('dark-mode');
    
    // 4. Change the button text depending on whether dark mode is active
    //containes it aske if the body appled on the ist the classlist dark mode style
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }
});