import * as THREE from 'three';

const utils = {}

utils.spanify = function (element) {
    if (!element) return;

    // Récupérer le texte brut de l'élément
    const text = element.textContent;

    // Recréer le contenu spanniﬁé
    const spanned = text.split('').map(char => {
        if (char === ' ') {
            // espace → span dédié pour éviter le collapse
            return `<span class="heroTitle-wrapper space"><span>&nbsp;</span></span>`;
        } else {
            return `<span class="heroTitle-wrapper"><span>${char}</span></span>`;
        }
    }).join('');

    element.innerHTML = spanned;
}
utils.remToPx = function (rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
utils.pxToRem = function (px) {
    const remInPx = window.innerWidth * 0.052083333333333336 / 100;
    return px / remInPx;
}

utils.getWorldPositionFromElement = function (element, camera, distance = 3) {
    // Récupère la position de la balise sur l'écran
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1; // centre horizontal
    const y = -((rect.top + rect.height / 2) / window.innerHeight) * 2 + 1; // centre vertical (NDC)

    // Coordonnée écran en 3D
    const screenPos = new THREE.Vector3(x, y, 0.5); // z = 0.5 pour "au milieu" entre near/far

    // Transformation en coordonnées monde
    screenPos.unproject(camera);

    // Calcul direction depuis la caméra
    const dir = screenPos.sub(camera.position).normalize();

    // Position finale à distance souhaitée
    const worldPos = camera.position.clone().add(dir.multiplyScalar(distance));

    return worldPos;
}

utils.pixelsToWorldOffset = function (offsetX, offsetY, camera, distance = 3) {
    // Convertir pixels en NDC
    const ndcX = (offsetX / window.innerWidth) * 2;
    const ndcY = -(offsetY / window.innerHeight) * 2; // inverser Y

    // Vecteur écran au centre + offset
    const screenPos = new THREE.Vector3(ndcX, ndcY, 0.5);

    // Transformer en coordonnées monde
    screenPos.unproject(camera);

    // Calculer la direction depuis la caméra
    const dir = screenPos.sub(camera.position).normalize();

    // Retourner le vecteur de décalage en monde à la distance souhaitée
    const worldOffset = dir.multiplyScalar(distance);

    return worldOffset;
}
utils.remToWorldOffset = function (offsetXRem, offsetYRem, camera, distance = 3) {
    // Taille d'1 rem en pixels
    const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Convertir les rem en pixels
    const offsetXpx = offsetXRem * remInPx;
    const offsetYpx = offsetYRem * remInPx;

    // Convertir les pixels en NDC
    const ndcX = (offsetXpx / window.innerWidth) * 2;
    const ndcY = -(offsetYpx / window.innerHeight) * 2; // inverser Y

    // Créer le vecteur écran avec offset
    const screenPos = new THREE.Vector3(ndcX, ndcY, 0.5);

    // Transformer en coordonnées monde
    screenPos.unproject(camera);

    // Calculer la direction depuis la caméra
    const dir = screenPos.sub(camera.position).normalize();

    // Retourner le vecteur de décalage en monde à la distance souhaitée
    return dir.multiplyScalar(distance);
}
export default utils;