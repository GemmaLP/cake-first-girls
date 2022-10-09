var selectedFlavour
var selectedFrosting
var selectedSprinkles
var selectedPackaging

function selectFlavour() {
  selectedFlavour = document.getElementById("flavourSelect").value;
  showSelection();
}

function selectFrosting() {
  selectedFrosting = document.getElementById("frostingSelect").value;
  showSelection();
}

function selectSprinkles() {
  selectedSprinkles = document.getElementById("sprinklesSelect").value;
  showSelection();
}

function selectPackaging() {
  selectedPackaging = document.getElementById("packagingSelect").value;
}

function showSelection() {
  if(selectedFlavour == "Red Velvet" && selectedFrosting == "Vanilla" && selectedSprinkles == "Red Sprinkles") {
    document.querySelector(".chosen_cake").src="/images/red-velvet-cupcake.jpg";
  } else if (selectedFlavour == "Chocolate" && selectedFrosting == "Vanilla" && selectedSprinkles == "Chocolate Drops") {
    document.querySelector(".chosen_cake").src="/images/chocolate-cupcake.jpg";
  } else if (selectedFlavour == "Vanilla" && selectedFrosting == "Lemon" && selectedSprinkles == "Rainbow Sprinkles") {
    document.querySelector(".chosen_cake").src="/images/vanilla-cupcake.jpg";
  } else {
    document.querySelector(".chosen_cake").src="/images/cake first girls logo.png";
  }
}