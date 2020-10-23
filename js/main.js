var form = document.querySelector("form"); // Récupération de l'élément <form> dans le DOM



// Fonction permettant de récupérer les données (value) de chaque éléments du formulaire et de les afficher en console une fois le formulaire rempli
form.addEventListener("submit", function (e) {
    const movie = form.elements.movie.value;
    const director = form.elements.director.value;
    const realease_year = form.elements.realease_year.value;

    if (movie == '' || director == '' || realease_year == ''){ // Déterminer si les champs du formulaires sont vides
        alert('Veuillez remplir tout les champs du formulaire.')
    }else{
        console.log("Votre film préféré est " + movie + ", réalisé par " +
        director + " et sorti en  " + realease_year);
        alert('Vos données ont bien étés envoyées !')
    }
    e.preventDefault(); // Annulation de l'envoi des données
});
