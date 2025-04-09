// Exemple de données de formation
const formations = [
    { id: 1, name: 'BTS Informatique', city: 'Paris', duration: '2 ans' },
    { id: 2, name: 'Licence Mathématiques', city: 'Lyon', duration: '3 ans' }
];

// Remplir la liste avec les formations
const formationList = document.getElementById('formation-list');
formations.forEach(formation => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#">${formation.name}</a> - ${formation.city} - ${formation.duration}`;
    formationList.appendChild(listItem);
});
