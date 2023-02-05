const form = document.querySelector("form");
const imageBoard = document.querySelector("#image-board");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const imageUpload = document.querySelector("#image-upload");
  const image = new Image();
  image.src = URL.createObjectURL(imageUpload.files[0]);
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.appendChild(image);
  imageBoard.appendChild(imageContainer);
});
