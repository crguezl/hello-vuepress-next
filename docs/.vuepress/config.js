module.exports = {
    lang: 'en-US',
    title: 'Hola Vuepress 2',
    description: 'Learning Vuepress@next',
    search: true,
    // theme: '@vuepress/theme-default', // q=keywords:vuepress-theme in npm
    themeConfig: {
        nav: [
            { text: 'classes', link: './hello.html' },
            { text: 'labs', link: '/labs' },
            { text: 'google', link: 'https://www.google.com' }
        ],
        logo: 'https://crguezl.github.io//images/casiano-rodriguez-leon.jpg'
    }
}