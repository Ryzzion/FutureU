// Toggle the menu when the button is clicked
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});

// Handle navigation and collapse menu
function showPage(pageId) {
    // Get all sections with class "page"
    const pages = document.querySelectorAll('.page');

    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Collapse the menu
    const menu = document.getElementById('menu');
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
}
