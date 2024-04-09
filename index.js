function saveName() {
  const newName = document.getElementById("nameInput").value;
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));
  savedNames.push(newName);
  localStorage.setItem("savedNames", JSON.stringify(savedNames));
  displaySavedNames();
}

function clearName() {
  let savedNames = JSON.parse(localStorage.getItem("savedNames"));
  savedNames.pop();
  localStorage.setItem("savedNames", JSON.stringify(savedNames));
  displaySavedNames();
}

function displaySavedNames() {
  const savedNames = JSON.parse(localStorage.getItem("savedNames"));
  const savedNamesDiv = document.getElementById("savedNames");
  savedNamesDiv.innerHTML = "";
  if (savedNames.length > 0) {
    savedNames.forEach((name) => {
      const p = document.createElement("p");
      p.textContent = name;
      savedNamesDiv.appendChild(p);
    });
  } else {
    savedNamesDiv.textContent = "Nessun nome salvato.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displaySavedNames();

  document.getElementById("saveButton").addEventListener("click", saveName);
  document.getElementById("clearButton").addEventListener("click", clearName);
});
function startCounter() {
  const startTime = sessionStorage.getItem("startTime") || Date.now();

  sessionStorage.setItem("startTime", startTime);

  const updateCounter = () => {
    const Timer = Math.floor((Date.now() - startTime) / 1000);

    document.getElementById("counter").textContent = Timer;
  };

  setInterval(updateCounter, 1000);
}

window.onload = startCounter;
