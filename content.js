const observer = new MutationObserver(() => {
  const images = document.getElementsByClassName('css-9pa8cd'); 
  const divs = document.querySelectorAll('video');

  console.log('images', images);
  if (images.length > 0) {
    for (let i = 0; i < images.length; i++) {
      console.log('images[i].src', images[i].src);
    }
    observer.disconnect(); // Stop observing once images are found
  }


  console.log('divs', divs);
  if (divs.length > 0) {
    for (let i = 0; i < divs.length; i++) {
      // Process the selected divs here
      console.log('Div Content:', divs[i].textContent);
    }
  }
});

// Start observing changes to the DOM when js code is executed
observer.observe(document.body, { childList: true, subtree: true });
