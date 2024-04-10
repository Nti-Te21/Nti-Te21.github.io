function init() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img class="navbar-brand logo" src="Firefly A logo for a programing teaching company 29873.jpg"></img>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Startsida</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="kurser.html">Kurser</a>
                    </li>   
                    <li class="nav-item">
                        <a class="nav-link active" href="priser.html">Priser</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="exempel.html">Exempel</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="recensioner.html">Recensioner</a>
                    </li>
                    <li class="nav-item dropdown">
                        <ul class="dropdown-menu">
                            <li class="dropdown-time">
                                <a class="nav-link active" aria-current="page" href="index.html">Startsida</a>
                            </li>
                            <li class="dropdown-item">
                                <a class="nav-link active" href="kurser.html">Kurser</a>
                            </li>
                            <li class="dropdown-item">
                                <a class="nav-link active" href="priser.html">Priser</a>
                            </li>
                            <li class="dropdown-item">
                                <a class="nav-link active" href="exempel.html">Exempel</a>
                            </li>
                            <li class="dropdown-item">
                                <a class="nav-link active" href="recensioner.html">Recensioner</a>
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
