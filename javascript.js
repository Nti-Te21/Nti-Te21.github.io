function init() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
    <nav class="navbar nav-background white-text navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid nav-background">
            <img class="navbar-brand logo header-img" src="Firefly A logo for a programing teaching company 29873.jpg" alt = "logo.img"></img>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active white-text" aria-current="page" href="index.html">Startsida</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active white-text" href="kurser.html">Kurser test ny klass</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active white-text" href="Medlemskap.html">Medlemskap</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active white-text" href="recensioner.html">Recensioner</a>
                    </li>
                    <li class="nav-item dropdown">
                        <ul class="dropdown-menu">
                            <li class="dropdown-time">
                                <a class="nav-link active white-text" aria-current="page" href="index.html"><p>Startsida</p></a>
                            </li>
                            <li class="dropdown-item">
                                <a class="nav-link active white-text" href="kurser.html"><p>Kurser</p></a>
                            </li>
                            <li class="dropdown-item white-text">
                                <a class="nav-link active" href="Medlemskap.html"><p>Medlemskap</p></a>
                            </li>
                            <li class="dropdown-item white-text">
                                <a class="nav-link active" href="recensioner.html"><p>Recensioner</p></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;
    const footer = document.querySelector('footer');
    footer.innerHTML = '<p>&copy; 2024 MyWebsite. All rights reserved.</p>';
}
init();
/*
function createCourceCard() {
    cardsList = [[1, 'Kurs 1', 'Beskrivning av kurs 1', 'Bild av kurs 1', 'Pris för kurs 1'], [2, 'Kurs 2', 'Beskrivning av kurs 2', 'Bild av kurs 2', 'Pris för kurs 2'], [3, 'Kurs 3', 'Beskrivning av kurs 3', 'Bild av kurs 3', 'Pris för kurs 3';
    for (card in cardsList) {
        const card = document.createElement('div');
        


    }
    for (let i = 0; i < cardsList.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `

        `;
    }
}
*/