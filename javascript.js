function init() {
    const nav = document.createElement('nav');
    nav.innerHTML = '<a href="#">Startsdia</a> | <a href="#">Kurser</a> | <a href="#">prisinformation</a> <a href="#">exempel</a><a href="#">recensioner</a> ';
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 MyWebsite. All rights reserved.</p>';
    document.body.appendChild(nav);
    document.body.appendChild(footer);
}
init();
