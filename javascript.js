function init() {
    const nav = document.querySelector('nav');
    nav.innerHTML = '<a href="index.html">Startsida</a> | <a href="kurser.html">Kurser</a> | <a href="priser.html">Priser</a> | <a href="exempel.html">Exempel</a> | <a href="recensioner.html">Recensioner</a> ';
    const footer = document.querySelector('footer');
    footer.innerHTML = '<p>&copy; 2024 MyWebsite. All rights reserved.</p>';
}
init();
