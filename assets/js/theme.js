// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update toggle button icon based on current theme
    const updateToggleIcon = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const toggleButton = document.querySelector('.theme-toggle i');
        if (toggleButton) {
            toggleButton.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    };

    // Toggle theme function
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon();
    };

    // Add toggle button to all pages
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    toggleButton.addEventListener('click', toggleTheme);
    body.appendChild(toggleButton);

    // Initialize toggle button icon
    updateToggleIcon();
}); 