
button.addEventListener("click", () => {
    let pokemon_name = (document.getElementById("pokemon").value).toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
    
    fetch(url)
    .then(response => {
        // console.log(response);   just sending signal
        return response.json();
    })
    .then(jsonData => {
            console.log(jsonData);
            console.log(jsonData.id)
            document.getElementById("name").innerText = `Name ${jsonData.name}`;
            document.getElementById("pokedex").innerText = `Pokedex ${jsonData.id}`;
            document.getElementById("height").innerText = `Height ${jsonData.height} ft`;
            document.getElementById("weight").innerText = `Weight ${jsonData.weight} lbs`;
    });
    
})

