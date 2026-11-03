const gallery = [
  {
    "src": "https://picsum.photos/id/10/500/350",
    "caption": "Mountain lake at dawn"
  },
  {
    "src": "https://picsum.photos/id/29/500/350",
    "caption": "Forest trail in autumn"
  },
  {
    "src": "https://picsum.photos/id/33/500/350",
    "caption": "City skyline at night"
  },
  {
    "src": "https://picsum.photos/id/42/500/350",
    "caption": "Desert dunes"
  },
  {
    "src": "https://picsum.photos/id/48/500/350",
    "caption": "Old stone bridge"
  },
  {
    "src": "https://picsum.photos/id/54/500/350",
    "caption": "Coastline cliffs"
  },
  {
    "src": "https://picsum.photos/id/64/500/350",
    "caption": "Snowy pine forest"
  },
  {
    "src": "https://picsum.photos/id/76/500/350",
    "caption": "Rolling green hills"
  },
  {
    "src": "https://picsum.photos/id/96/500/350",
    "caption": "Foggy harbor"
  }
];

const galleryContainer = document.getElementById("galleryContainer");
const galleryImg = document.getElementById("galleryImg");
const galleryCaption = document.getElementById("galleryCaption");
const galleryClose = document.getElementById("galleryClose")
const modal = document.getElementById("modal");

const photos = gallery.map(photo => renderPhoto(photo));
modal.hidden = true;

function renderPhoto(galleryPhoto){
  let image = document.createElement("img");
  image.src = galleryPhoto.src;
  image.alt = galleryPhoto.caption;
  galleryContainer.appendChild(image);
  return image;
}

function displayPhoto(index){
  if (index >= 0){
    modal.hidden = false;
    galleryContainer.hidden = true;

    const galleryPhoto = gallery[index];
    galleryCaption.innerText = galleryPhoto.caption;
    galleryImg.src = galleryPhoto.src;
  }
}

function resetDisplay(){
    galleryContainer.hidden = false;
    modal.hidden = true;
}

galleryContainer.addEventListener("click", (event)=>{
  displayPhoto(photos.indexOf(event.target));
})

modal.addEventListener("click", (event)=>{
  if (event.target === galleryImg || event.target === galleryCaption){
    return;
  }
  resetDisplay();
})

galleryClose.addEventListener("click", ()=>{
  resetDisplay();
})
resetDisplay();