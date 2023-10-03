// Event listener added to the document object, listening for 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", (event) => {
  // Grab createMonster div element
  const createMonsterDiv = document.getElementById("create-monster");
  // Create input for name
  const inputName = document.createElement("input");
  inputName.placeholder = "Type name here...";
  // Create input for age
  const inputAge = document.createElement("input");
  inputAge.placeholder = "Type age here...";

  const inputDescription = document.createElement("input");
  inputDescription.placeholder = "Type description here...";
  // Create 'Create a Monster!' button
  const inputButton = document.createElement("button");
  inputButton.textContent = "Create a Monster!";

  //   Append all created elements to 'createMonsterDiv'
  createMonsterDiv.appendChild(inputName);
  createMonsterDiv.appendChild(inputAge);
  createMonsterDiv.appendChild(inputDescription);
  createMonsterDiv.appendChild(inputButton);

  //   Fetch monsters.json
  fetch("http://localhost:3000/monsters/?_limit=50&_page=0")
    .then((response) => response.json())
    .then((data) => {
      // Console.log the data
      console.log(data);
      //
      data.forEach((element) => {
        const mosterContainer = document.getElementById("monster-container");
        const card = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = element.name;
        const ageElement = document.createElement("p");
        ageElement.textContent = element.age;
        const descElement = document.createElement("p");
        descElement.textContent = element.description;

        card.appendChild(nameElement);
        card.appendChild(ageElement);
        card.appendChild(descElement);
        mosterContainer.appendChild(card);
      });
    });
});
