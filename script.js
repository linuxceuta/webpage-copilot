function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Close the menu if it's open
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show');
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
        isValid = false;
    } else {
        document.getElementById('message-error').textContent = '';
    }

    return isValid;
}

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    if (this.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
    } else {
        document.getElementById('name-error').textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required.';
    } else if (!emailPattern.test(this.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    } else {
        document.getElementById('email-error').textContent = '';
    }
});

document.getElementById('message').addEventListener('input', function() {
    if (this.value.trim() === '') {
        document.getElementById('message-error').textContent = 'Message is required.';
    } else {
        document.getElementById('message-error').textContent = '';
    }
});