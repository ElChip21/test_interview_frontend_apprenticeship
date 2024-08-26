///////////////////// EXERCICE 1 ////////////////////////////////////////

function getEvenNbrs(nbrs) {
    return nbrs.filter(function (nbr) {
        return nbr % 2 === 0;
    });
}

function generateRandomNumbersArray(size, min, max) {
    const numbers = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);
    }
    return numbers;
}

// Crée un tableau de 10 nombres aléatoires compris entre 10 et 100
const mixedNbrs = generateRandomNumbersArray(10, 10, 100);


const evenNbrs = getEvenNbrs(mixedNbrs);
console.log("Tableau générer : ", mixedNbrs)
console.log("Tableau de chiffres pairs : ", evenNbrs);


// Ce code génère d'abord un tableau de nombres aléatoires compris entre 10 et 100 à l'aide de la fonction generateRandomNumbersArray. 
// Ensuite, il filtre ce tableau pour en extraire uniquement les nombres pairs en utilisant la fonction getEvenNbrs, qui s'appuie sur la 
// méthode filter. Les deux tableaux, celui contenant les nombres générés (mixedNbrs) et celui ne contenant que les nombres pairs 
// (evenNbrs), sont ensuite affichés dans la console. 



///////////////////// EXERCICE 2 ////////////////////////////////////////


document.getElementById("changeText").addEventListener("click", function () {

    document.getElementById("myText").innerHTML = "<p>Hello, Check!</p>";
});

// Ce code ajoute un écouteur d'événement au bouton avec l'identifiant changeText. Lorsqu'on clique sur ce bouton, il modifie
// le contenu de l'élément avec l'identifiant myText. Le texte du paragraphe est remplacé par "Hello, Check!" 



///////////////////// EXERCICE 3 ////////////////////////////////////////

// Fonction pour récupérer les données depuis l'API et afficher les titres
async function fetchAndDisplayTodos() {
    try {
        // Récupérer les données depuis l'API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convertir la réponse en JSON
        const todos = await response.json();

        // Sélectionner l'élément <ul> dans le DOM
        const todoList = document.getElementById('todoList');

        // Ajouter les titres des 5 premiers todos à la liste
        todos.slice(0, 5).forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.title;
            todoList.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
    }
}

// Appeler la fonction pour récupérer et afficher les todos
fetchAndDisplayTodos();



//La fonction fetchAndDisplayTodos est asynchrone et sert à récupérer des données depuis l'API jsonplaceholder.typicode.com/todos. Elle
//utilise fetch pour obtenir les données et await pour attendre que la réponse soit convertie en JSON. Ensuite, elle sélectionne
//l'élément HTML <ul> avec l'id todoList et y ajoute les titres des cinq premiers éléments du tableau. En cas d'erreur lors de la 
//récupération des données, elle les capture et les affiche dans la console. La fonction est appelée pour que les todos s'affichent 
//automatiquement lorsque la page se charge.