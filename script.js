const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = item.src;
        currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxContent.src = galleryItems[currentIndex].src;
});

// Navigate to the next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxContent.src = galleryItems[currentIndex].src;
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
