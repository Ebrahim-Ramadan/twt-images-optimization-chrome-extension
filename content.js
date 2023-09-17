const observer = new MutationObserver(() => {
  const images = document.getElementsByClassName('css-9pa8cd'); 
  console.log('images', images);
  if (images.length > 0) {
    for (let i = 0; i < images.length; i++) {
      console.log(images[i].src);
    }
    observer.disconnect(); // Stop observing once images are found
  }
});

// Start observing changes to the DOM
observer.observe(document.body, { childList: true, subtree: true });
