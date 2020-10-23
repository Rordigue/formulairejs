var form = document.querySelector("form"); // Récupération de l'élément <form> dans le DOM



// Fonction permettant de récupérer les données (value) de chaque éléments du formulaire et de les afficher en console une fois le formulaire rempli
form.addEventListener("submit", function (e) {
    const movie = form.elements.movie.value;
    const director = form.elements.director.value;
    const release_year = form.elements.release_year.value;
    const year_parsed = parseInt(release_year);
    let count = 0;
    
    // Vérifier si l'input movie est rempli
    if (movie == ''){
        const helpMovie = document.getElementById('helpMovie');
        helpMovie.textContent = "Veuillez remplir ce champ.";
        helpMovie.style.color = "red";
        count += 1
    }
    // Vérifier si l'input director est rempli
    if(director == '') {
        const helpDirector = document.getElementById('helpDirector');
        helpDirector.textContent = "Veuillez remplir ce champ.";
        helpDirector.style.color = "red";
        count += 1
    }
    // Vérifier si l'année de sortie est valide
    if(1895 < year_parsed < 2020){
        const helpYear = document.getElementById('helpYear');
        helpYear.textContent = "Veuillez rentrer une année entre 1895 et 2020.";
        helpYear.style.color = "red";
        count += 1
    }
    // Afficher les données si tout est correct
    if(count == 0){
        const result = document.getElementById('result');
        result.textContent = "Votre film préféré est " + movie + " réalisé par " + director + " en " + release_year + "."
    }
    e.preventDefault(); // Annulation de l'envoi des données
});
