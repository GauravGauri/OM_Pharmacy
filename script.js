
// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
    }, 60);
});

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('btt').classList.toggle('show', window.scrollY > 400);
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Counter animation
function animateCount(el, target) {
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(timer); }
        el.textContent = Math.floor(start).toLocaleString();
    }, 16);
}
const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting && e.target.dataset.target) {
            animateCount(e.target, parseInt(e.target.dataset.target));
            counterObs.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

// Form submit
function submitForm(btn) {
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent! We\'ll call you soon.';
        btn.style.background = 'linear-gradient(135deg,#0a9e68,#12c87a)';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            btn.style.background = '';
            btn.disabled = false;
        }, 4000);
    }, 2000);
}

// Smooth scroll nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            document.getElementById('navLinks').classList.remove('open');
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});