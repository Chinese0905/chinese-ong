// ===== Navbar scroll effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Fade-in on scroll (Intersection Observer) =====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Delay berjenjang untuk efek smooth
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// ===== Animate skill bars when visible =====
const skillBars = document.querySelectorAll('.skill-bar span');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== Smooth scroll untuk nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Form handler =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = 'Terkirim ✓';
  btn.style.background = 'var(--sage-dark)';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    e.target.reset();
  }, 2500);
}

// ===== Cursor trail (opsional - vibe santai) =====
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--sage);
    border-radius: 50%;
    pointer-events: none;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    opacity: 0.5;
    z-index: 9999;
    transition: all 0.6s ease;
  `;
  document.body.appendChild(trail);
  
  setTimeout(() => {
    trail.style.opacity = '0';
    trail.style.transform = 'scale(2)';
  }, 10);
  
  setTimeout(() => trail.remove(), 600);
});

// ===== Console greeting =====
console.log('%c☕ Selamat datang di portofolio saya!', 'color: #7d8c74; font-size: 16px; font-family: serif;');
console.log('%cDibuat dengan santai dan penuh perhatian.', 'color: #6b665c; font-size: 12px;');