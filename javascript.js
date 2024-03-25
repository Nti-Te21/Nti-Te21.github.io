function init() {
    const nav = document.createElement('nav');
    nav.innerHTML = '<a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>';
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 MyWebsite. All rights reserved.</p>';
    document.body.appendChild(nav);
    document.body.appendChild(footer);
}
init();
