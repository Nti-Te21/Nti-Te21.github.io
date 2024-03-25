function init() {
    const nav = document.createElement('nav');
    nav.innerHTML = '<a href="index.html">Startsida</a> | <a href="kurser.html">Kurser</a> | <a href="priser.html">Priser</a> | <a href="exempel.html">Exempel</a> | <a href="recensioner.html">Recensioner</a> ';
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>&copy; 2024 MyWebsite. All rights reserved.</p>';
    document.body.appendChild(nav);
    document.body.appendChild(footer);
}
init();
