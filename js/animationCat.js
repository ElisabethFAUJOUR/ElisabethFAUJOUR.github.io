// Récupérer tous les paths
const paths = document.querySelectorAll('.screen-code');

// Fonction pour réinitialiser l'animation
function resetAnimation() {
  paths.forEach((path) => {
    path.classList.remove('displayed'); // Supprimer la classe "displayed"
    path.style.opacity = 0; // Masquer le path
  });
}

// Fonction pour afficher les paths un par un
function animatePaths() {
  let i = 0;
  function showNextPath() {
    if (i < paths.length) {
      paths[i].classList.add('displayed'); // Ajouter la classe "displayed"
      paths[i].style.opacity = 1; // Afficher le path
      i++;
      setTimeout(showNextPath, 100); // Attendre 100ms avant d'afficher le prochain path
    } else {
      resetAnimation(); // Réinitialiser l'animation une fois tous les paths affichés
      setTimeout(animatePaths, 100); // Attendre 100ms avant de recommencer l'animation
    }
  }
  showNextPath();
}

// Lancer l'animation au chargement de la page
window.addEventListener('DOMContentLoaded', animatePaths);