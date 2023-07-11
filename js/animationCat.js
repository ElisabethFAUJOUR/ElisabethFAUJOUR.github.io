const animCat = {

  paths: document.querySelectorAll('.screen-code'),

  init() {
    animCat.animatePaths();
  },

   /**
   * Reset the animation
   */
  resetAnimation() {
    animCat.paths.forEach((path) => {
      path.classList.remove('displayed'); // Supprimer la classe "displayed"
      path.style.opacity = 0; // Masquer le path
    });
  },

  /**
   * Display all paths 
   */
  animatePaths() {
    let i = 0;
    const showNextPath = () => {
      if (i < animCat.paths.length) {
        const path = animCat.paths[i];
        path.classList.add('displayed'); // Ajouter la classe "displayed"
        path.style.opacity = 1; // Afficher le path
        i++;
        setTimeout(showNextPath, 100); // Attendre 100ms avant d'afficher le prochain path
      } else {
        animCat.resetAnimation(); // Réinitialiser l'animation une fois tous les paths affichés
        setTimeout(animCat.animatePaths, 100); // Attendre 100ms avant de recommencer l'animation
      }
    }
    showNextPath();
  }

}

window.addEventListener('DOMContentLoaded', animCat.init());