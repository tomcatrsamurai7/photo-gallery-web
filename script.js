// Simple script for photo gallery
const gallery = document.getElementById('gallery');
const images = gallery.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
  };
}

// Mini project for photo gallery