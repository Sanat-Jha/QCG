// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#000000' },  // Dot color
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {                // Add this for connecting lines
            enable: true,
            color: '#000000',         // Line color for light theme
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6
        }
    }
});
