const gallery = document.getElementById('gallery1');
const popup = document.getElementById('popup1');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `img/art/img${i}.jpg`;
    image.alt = `painting from the Kent County Pastoral Series`;
    image.classList.add('galleryImg');
    //console.log(image.src);
    image.addEventListener('click', () => {
        //popup stuff
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/img/art/img${i}.jpg`;
        selectedImage.alt = `painting from the Kent County Pastoral Series`;
    });

    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})