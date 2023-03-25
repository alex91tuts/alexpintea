document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".image-gallery li a");
  const lightbox = document.createElement("div");
  const lightboxImage = document.createElement("img");
  const closeButton = document.createElement("span");

  lightbox.className = "lightbox";
  closeButton.className = "close-btn1";
  closeButton.innerHTML = "&times;";

  lightbox.appendChild(lightboxImage);
  lightbox.appendChild(closeButton);
  document.body.appendChild(lightbox);

  galleryItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const imageSrc = item.getAttribute("href");
      lightboxImage.setAttribute("src", imageSrc);
      lightbox.style.display = "block";
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && lightbox.style.display === "block") {
lightbox.style.display = "none";
}
});
});
