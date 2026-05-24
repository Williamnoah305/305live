// Load content from JSON file
let contentData = {
    music: [],
    videos: [],
    art: []
};

// Initialize the site
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    setupEventListeners();
    updateIntegrationLinks();
});

// Load content from content.json
function loadContent() {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            contentData = data;
            renderGalleries();
        })
        .catch(error => {
            console.log('No content.json found yet. Add your content to get started!');
            renderEmptyState();
        });
}

// Render all galleries
function renderGalleries() {
    renderGallery('music', contentData.music);
    renderGallery('videos', contentData.videos);
    renderGallery('art', contentData.art);
}

// Render a single gallery
function renderGallery(type, items) {
    const gallery = document.getElementById(`${type}-gallery`);
    gallery.innerHTML = '';

    if (items.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No ${type} added yet. Check back soon!</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-item-image">
                ${getIcon(type)}
            </div>
            <div class="gallery-item-content">
                <div class="gallery-item-title">${item.title}</div>
                ${item.artist ? `<div class="gallery-item-artist">by ${item.artist}</div>` : ''}
                ${item.description ? `<div class="gallery-item-description">${item.description}</div>` : ''}
                ${item.date ? `<div class="gallery-item-date">${formatDate(item.date)}</div>` : ''}
                ${item.link ? `<a href="${item.link}" target="_blank" class="gallery-link">View more →</a>` : ''}
            </div>
        `;
        gallery.appendChild(galleryItem);
    });
}

// Get appropriate icon for content type
function getIcon(type) {
    const icons = {
        music: '<i class="fas fa-music"></i>',
        videos: '<i class="fas fa-video"></i>',
        art: '<i class="fas fa-palette"></i>'
    };
    return icons[type] || '<i class="fas fa-star"></i>';
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Render empty state
function renderEmptyState() {
    const types = ['music', 'videos', 'art'];
    types.forEach(type => {
        const gallery = document.getElementById(`${type}-gallery`);
        gallery.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <p>No ${type} added yet. Add your content to content.json!</p>
            </div>
        `;
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update integration links (replace # with actual URLs)
function updateIntegrationLinks() {
    const integrations = {
        'spotify': 'https://open.spotify.com/artist/YOUR_SPOTIFY_ID',
        'youtube': 'https://www.youtube.com/@YOUR_CHANNEL',
        'soundcloud': 'https://soundcloud.com/YOUR_USERNAME',
        'instagram': 'https://instagram.com/YOUR_USERNAME',
        'twitter': 'https://twitter.com/YOUR_USERNAME',
        'tiktok': 'https://tiktok.com/@YOUR_USERNAME'
    };

    Object.keys(integrations).forEach(platform => {
        const card = document.querySelector(`.integration-card.${platform}`);
        if (card) {
            const link = card.querySelector('.integration-link');
            if (link) {
                link.href = integrations[platform];
            }
        }
    });
}
