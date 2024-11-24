function flipCard() {
    const card = document.querySelector('.birthdayCard');
    card.classList.toggle('flipped');
    
    // Trigger the flying emojis effect on flip
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach((emoji, index) => {
      emoji.style.animation = `floatEmojis 3s ease-in-out infinite ${index * 0.5}s`;
    });
  }
  