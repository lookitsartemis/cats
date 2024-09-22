window.onload = async () => {
  const catImage = await fetchCatImage();
  const catFact = await fetchCatFact();
  displayCat(catImage, catFact);
};

document.getElementById("newCat").addEventListener("click", async () => {
  const catImage = await fetchCatImage();
  const catFact = await fetchCatFact();
  displayCat(catImage, catFact);
});

async function fetchCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
}

async function fetchCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
}

function displayCat(imageUrl, fact) {
  document.getElementById(
    "catImageContainer"
  ).innerHTML = `<img src="${imageUrl}" alt="Cat">`;
  document.getElementById("catFactContainer").innerHTML = fact;
}
