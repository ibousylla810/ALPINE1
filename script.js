// Scroll to generator section
function scrollToGenerator() {
    document.getElementById('generator').scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission handler
document.getElementById('documentaryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateDocumentary();
});

function generateDocumentary() {
    const button = document.querySelector('.generate-button');
    const buttonText = document.querySelector('.button-text');
    const buttonLoader = document.querySelector('.button-loader');
    const resultContainer = document.getElementById('resultContainer');
    
    // Show loading state
    buttonText.style.display = 'none';
    buttonLoader.style.display = 'flex';
    button.disabled = true;
    
    // Get form values
    const topic = document.getElementById('topic').value;
    const style = document.getElementById('style').value;
    const tone = document.getElementById('tone').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;
    
    // Simulate AI generation process
    setTimeout(() => {
        // Hide loading state
        buttonText.style.display = 'block';
        buttonLoader.style.display = 'none';
        button.disabled = false;
        
        // Show results
        showGeneratedContent(topic, style, tone, duration, description);
        resultContainer.style.display = 'block';
        resultContainer.scrollIntoView({ behavior: 'smooth' });
        
    }, 3000);
}

function showGeneratedContent(topic, style, tone, duration, description) {
    const generatedTitle = document.getElementById('generatedTitle');
    const generatedDuration = document.getElementById('generatedDuration');
    const generatedScript = document.getElementById('generatedScript');
    
    // Generate title based on topic
    generatedTitle.textContent = `${topic} - Documentaire ${style}`;
    generatedDuration.textContent = `${duration} minutes`;
    
    // Generate sample script content
    const scripts = {
        scientifique: `[INTRODUCTION - 0:00]
Narrateur : "Dans un monde où la science repousse constamment les limites de notre compréhension..."

[DÉVELOPPEMENT - 0:30]
Expert 1 : "Les dernières recherches révèlent des données fascinantes sur ${topic.toLowerCase()}..."

[CONCLUSION - ${duration-1}:00]
Narrateur : "Ces découvertes ouvrent de nouvelles perspectives pour l'avenir de notre société."`,
        
        historique: `[OUVERTURE - 0:00]
Narrateur : "Il était une fois, dans les méandres de l'histoire..."

[RÉCIT PRINCIPAL - 0:45]
Historien : "L'analyse des archives nous permet de comprendre l'impact de ${topic.toLowerCase()}..."

[ÉPILOGUE - ${duration-1}:30]
Narrateur : "Cette histoire continue de résonner dans notre époque contemporaine."`,
        
        nature: `[IMMERSION - 0:00]
Narrateur : "Au cœur de la nature, un équilibre fragile se dessine..."

[EXPLORATION - 1:00]
Biologiste : "L'étude de ${topic.toLowerCase()} révèle la complexité des écosystèmes..."

[MESSAGE - ${duration-1}:00]
Narrateur : "La préservation de cet équilibre dépend de nos actions aujourd'hui."`
    };
    
    const selectedScript = scripts[style] || scripts.scientifique;
    generatedScript.innerHTML = selectedScript.replace(/\n/g, '<br>');
}

// Smooth scrolling for navigation
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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--background)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.section-title, .example-card, .generator-form');
    animatedElements.forEach(el => observer.observe(el));
});"Ajout du fichier script.js"
