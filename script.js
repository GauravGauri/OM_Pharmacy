
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

// Pharmacy Multiverse Background Animation (Canvas Particles Network)
(function() {
    const canvas = document.getElementById('multiverse-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
        if (canvas.offsetWidth !== width || canvas.offsetHeight !== height) {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            initParticles();
        }
    });

    let particles = [];
    const symbols = ['✚', '💊', '🧬', '❤️', '●', '✦'];
    const colors = [
        'rgba(125, 221, 188, 0.25)', // green-pale tint
        'rgba(18, 160, 110, 0.2)',   // green-light tint
        'rgba(201, 168, 76, 0.2)',   // gold tint
        'rgba(255, 255, 255, 0.15)'  // white tint
    ];

    class Particle {
        constructor() {
            this.reset();
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 12 + 6;
            this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.angle = Math.random() * Math.PI * 2;
            this.va = (Math.random() - 0.5) * 0.015;
        }

        update(mouseX, mouseY) {
            this.x += this.vx;
            this.y += this.vy;
            this.angle += this.va;

            // Wrap edges
            if (this.x < -30) this.x = width + 30;
            if (this.x > width + 30) this.x = -30;
            if (this.y < -30) this.y = height + 30;
            if (this.y > height + 30) this.y = -30;

            // Mouse proximity repulsion/attraction effect
            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 180) {
                    const force = (180 - dist) / 180;
                    // Move slightly away from mouse cursor
                    this.x -= (dx / dist) * force * 0.8;
                    this.y -= (dy / dist) * force * 0.8;
                }
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.color;
            if (this.symbol === '●') {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2.5, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.symbol, 0, 0);
            }
            ctx.restore();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.min(50, Math.floor((width * height) / 16000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    let mouseX = null;
    let mouseY = null;
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        heroSection.addEventListener('mouseleave', () => {
            mouseX = null;
            mouseY = null;
        });
    }

    initParticles();

    function drawNetwork() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    ctx.beginPath();
                    // Fade lines out as particles drift apart
                    ctx.strokeStyle = `rgba(125, 221, 188, ${0.12 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.6;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw node symbols
        particles.forEach(p => {
            p.update(mouseX, mouseY);
            p.draw();
        });

        requestAnimationFrame(drawNetwork);
    }
    
    // Start animation loop
    requestAnimationFrame(drawNetwork);
})();

// Main Multiverse Background Animation (Global Canvas Overlay)
(function() {
    const canvas = document.getElementById('main-multiverse-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    });

    let particles = [];
    // Soft, transparent colors that stand out elegantly on both dark and light backgrounds
    const colors = [
        'rgba(18, 160, 110, 0.08)',  // primary green light (very faint)
        'rgba(10, 110, 79, 0.05)',   // primary green dark (very faint)
        'rgba(201, 168, 76, 0.06)',  // gold accent tint
        'rgba(125, 221, 188, 0.06)'  // mint accent tint
    ];

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            // Drifts much slower than the hero particles to prevent visual distraction
            this.vx = (Math.random() - 0.5) * 0.25;
            this.vy = (Math.random() - 0.5) * 0.25;
            this.size = Math.random() * 8 + 4;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update(mouseX, mouseY) {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap boundaries
            if (this.x < -10) this.x = width + 10;
            if (this.x > width + 10) this.x = -10;
            if (this.y < -10) this.y = height + 10;
            if (this.y > height + 10) this.y = -10;

            // Gentle repulsion from mouse
            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    this.x -= (dx / dist) * force * 0.4;
                    this.y -= (dy / dist) * force * 0.4;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        // Sparse distribution (approx 45 particles on desktop)
        const particleCount = Math.min(60, Math.floor((width * height) / 30000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    let mouseX = null;
    let mouseY = null;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouseX = null;
        mouseY = null;
    });

    initParticles();

    function drawGlobalNetwork() {
        ctx.clearRect(0, 0, width, height);

        // Connections (subtle grid mesh lines)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(18, 160, 110, ${0.05 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update(mouseX, mouseY);
            p.draw();
        });

        requestAnimationFrame(drawGlobalNetwork);
    }

    requestAnimationFrame(drawGlobalNetwork);
})();