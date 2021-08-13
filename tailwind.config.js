module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)'
            },
            boxShadow: {
                shade1: 'var(--box-shadow-1)'
            },
            borderRadius: {
                primary: 'var(--border-radius)'
            },
            fontSize: {
                xss: '0.6rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
