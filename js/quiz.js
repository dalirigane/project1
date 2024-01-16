

function submitQuiz() {
    // Récupérer toutes les balises de checkbox avec le nom 'q'
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="q"]');

    let score = 0;

    checkboxes.forEach((checkbox) => {
        // Vérifier si la checkbox est cochée et sa valeur est 'true'
        if (checkbox.checked && checkbox.value === 'true') {
            score++;
        }
    });

    // Afficher la note dans une alerte
    alert('Votre note : ' + score + ' / ' + '10');
}
