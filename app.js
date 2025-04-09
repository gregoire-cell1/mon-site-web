// Liste des formations
const formations = [
    {
        name: 'BTS Informatique',
        city: 'Paris',
        duration: '2 ans',
        degree: 'BTS',
        description: 'Une formation technique sur les systèmes, réseaux et le développement.',
        image: 'https://via.placeholder.com/300x200.png?text=BTS+Informatique'
    },
    {
        name: 'Licence Marketing Digital',
        city: 'Lyon',
        duration: '3 ans',
        degree: 'Licence',
        description: 'Acquérir les compétences en stratégie numérique, publicité et analyse de données.',
        image: 'https://via.placeholder.com/300x200.png?text=Licence+Marketing+Digital'
    },
    {
        name: 'Master Data Science',
        city: 'Marseille',
        duration: '2 ans',
        degree: 'Master',
        description: 'Apprendre l’analyse de données massives et l’intelligence artificielle.',
        image: 'https://via.placeholder.com/300x200.png?text=Master+Data+Science'
    }
];

// Fonction pour afficher les cartes de formations
const displayFormations = () => {
    const container = document.querySelector('.form-cards-container');
    formations.forEach(formation => {
        const card = document.createElement('div');
        card.classList.add('form-card');
        card.innerHTML = `
            <img src="${formation.image}" alt="${formation.name}">
            <div class="card-body">
                <h5>${formation.name}</h5>
                <p>${formation.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
};

// Appel de la fonction pour afficher les formations
displayFormations();
