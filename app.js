// Exemple de données de formations
const formations = [
    {
        name: 'BTS Informatique',
        city: 'Paris',
        duration: '2 ans',
        degree: 'BTS',
        costs: '5000€',
        schedule: '8h00 - 17h00',
        description: 'Un programme complet pour devenir expert en systèmes informatiques, réseaux et développement.',
        image: 'https://via.placeholder.com/400x250.png?text=BTS+Informatique'
    },
    {
        name: 'Licence Mathématiques',
        city: 'Lyon',
        duration: '3 ans',
        degree: 'Licence',
        costs: '3000€',
        schedule: '9h00 - 18h00',
        description: 'Formation théorique et pratique sur les mathématiques pures et appliquées.',
        image: 'https://via.placeholder.com/400x250.png?text=Licence+Mathématiques'
    },
    {
        name: 'Master Marketing Digital',
        city: 'Marseille',
        duration: '2 ans',
        degree: 'Master',
        costs: '8000€',
        schedule: '10h00 - 19h00',
        description: 'Formation avancée en marketing numérique, stratégie digitale et gestion de projet.',
        image: 'https://via.placeholder.com/400x250.png?text=Master+Marketing+Digital'
    }
];

// Fonction pour afficher les formations
const displayFormations = () => {
    const formationList = document.getElementById('formation-list');
    formations.forEach(formation => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${formation.image}" class="card-img-top" alt="${formation.name}">
                <div class="card-body">
                    <h5 class="card-title">${formation.name}</h5>
                    <p class="card-text">${formation.description}</p>
                    <p><strong>Durée:</strong> ${formation.duration}</p>
                    <p><strong>Coût:</strong> ${formation.costs}</p>
                    <p><strong>Horaires:</strong> ${formation.schedule}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" onclick="showMoreInfo('${formation.name}')">Voir Plus</button>
                </div>
            </div>
        `;
        formationList.appendChild(card);
    });
};

// Fonction pour afficher plus d'informations
const showMoreInfo = (name) => {
    alert('Informations supplémentaires sur la formation ' + name);
};

// Appeler la fonction pour afficher les formations
displayFormations();
