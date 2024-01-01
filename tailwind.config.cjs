module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx}', './dist/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
        },
    },
    plugins: [],
};