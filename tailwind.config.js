module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {},
        maxHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            '300' : '300px',
            '500' : '500px'
        }
    },
    variants: {
        backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus']
    },
    plugins: [require('@tailwindcss/ui')]
}
