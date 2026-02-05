
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Three.js Background (Subtle Grid)
function initThreeJS() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create Particles
    const geometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0x222222, // Dark grey for subtle effect
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    const clock = new THREE.Clock();

    function animate() {
        const elapsedTime = clock.getElapsedTime();

        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = mouseY * 0.0001;
        particlesMesh.rotation.y += mouseX * 0.0001;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initAnimations() {
    if (typeof gsap === 'undefined') return;

    // Load Sequence
    const tl = gsap.timeline();

    // Nav Pill Drop
    tl.from('.nav-pill', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Scroll Reveals
    const panels = document.querySelectorAll('.reveal-panel');
    panels.forEach(panel => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            scale: 0.98,
            ease: 'power2.out'
        });
    });

    // Text Reveals
    const texts = document.querySelectorAll('.reveal-text');
    texts.forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-nav-overlay');

    if (hamburger && overlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
}

// Simple Lightbox Implementation
function initLightbox() {
    // 1. Create Lightbox DOM Elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <div class='lightbox-close'>&times;</div>
        <img class='lightbox-content' src='' alt='Preview'>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    // 2. Select all links that point to images
    const imageLinks = document.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".webp"]');

    imageLinks.forEach(link => {
        // Exclude logo
        if (link.closest('.nav-logo')) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            const src = link.getAttribute('href');
            lightboxImg.src = src;
            lightbox.classList.add('active');
        });
    });

    // 3. Close Logic
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove('active');
        }
    });
}

window.addEventListener('load', () => {
    initThreeJS();
    initAnimations();
    initMobileMenu();
    initLightbox();
});
