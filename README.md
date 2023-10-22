# Rick-Morty-React : Une application React

## Description
C'est une application web développée avec React qui permet aux utilisateurs de visualiser les personnages de la célèbre série "Rick and Morty". Elle utilise l'API [rickandmortyapi.com](https://rickandmortyapi.com/) pour récupérer les informations sur les personnages.

## Structure du projet

1. **[package.json](https://github.com/GuiFraV/Rick-Morty-React/blob/master/package.json)**:
   - Contient la configuration du projet, les dépendances nécessaires et les scripts pour exécuter l'application.
   - Les principales dépendances sont React et ReactDOM.
   - Les scripts incluent des commandes pour démarrer le serveur de développement et construire l'application pour la production.

2. **[src/index.js](https://github.com/GuiFraV/Rick-Morty-React/blob/master/src/index.js)**:
   - Point d'entrée principal de l'application.
   - Il initialise l'application React et rend le composant principal `List`.

3. **[src/components/List.js](https://github.com/GuiFraV/Rick-Morty-React/blob/master/src/components/List.js)**:
   - Ce composant est responsable de la récupération des données de l'API.
   - Il utilise les hooks React pour gérer l'état et les effets.
   - Une fois les données récupérées, il affiche la liste des personnages en utilisant le composant `Character`.

4. **[src/components/Character.js](https://github.com/GuiFraV/Rick-Morty-React/blob/master/src/components/Character.js)**:
   - Représente un personnage individuel.
   - Affiche les détails du personnage, tels que l'image, le nom et l'origine, dans une carte stylisée.

## Comment utiliser l'application
1. Clonez le dépôt sur votre machine locale.
2. Dans le répertoire du projet, exécutez `npm install` pour installer toutes les dépendances nécessaires.
3. Pour démarrer l'application en mode développement, exécutez `npm start`.
4. L'application devrait s'ouvrir dans votre navigateur par défaut.


