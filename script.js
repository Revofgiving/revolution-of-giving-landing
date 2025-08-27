// Professional and Simple JavaScript

// Email Form Handler
function initEmailForm() {
    const form = document.getElementById('emailForm');
    const input = document.getElementById('emailInput');
    
    if (!form || !input) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = input.value.trim();
        if (!email || !isValidEmail(email)) {
            showNotification('Inserisci un indirizzo email valido');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Inviando...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Email registrata con successo!');
            input.value = '';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1200);
    });
}

// Email Validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple Notification System
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 4000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initEmailForm();
    initSmoothScrolling();
});

// Professional Notification Styles
const notificationStyles = `
.notification {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: white;
    color: var(--text-primary);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border-color);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 350px;
    animation: slideInFromRight 0.3s ease-out;
}

.notification button {
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    transition: color 0.2s ease;
}

.notification button:hover {
    color: var(--text-primary);
}

@keyframes slideInFromRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
`;

// Inject notification styles
const style = document.createElement('style');
style.textContent = notificationStyles;
document.head.appendChild(style);
