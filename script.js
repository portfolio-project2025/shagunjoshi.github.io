
console.log("JS file connected successfully!");


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "scale(1.03)";
    card.style.boxShadow = "0 20px 30px rgba(0,0,0,0.15)";
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
  });
});


const backBtn = document.createElement('button');
backBtn.textContent = "↑ Top";
backBtn.classList.add('back-to-top');
document.body.appendChild(backBtn);

backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

