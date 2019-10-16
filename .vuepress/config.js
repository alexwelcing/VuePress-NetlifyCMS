module.exports = {
  title: 'Atrispina Desert Vues',
  description: 'Those are not rain clouds.',
  dest: 'pages',
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Projects',
        items: [
          { text: 'Ghost Location', link: 'https://atrispina.stream' },
          { text: 'Gatsby fed by Ghost', link: 'https://atrispina.com' }
        ]
      },
      { text: 'About', link: 'about.md' }
    ],

    sidebar: 'auto',
    sidebar: [
      ['/', 'Home'],
      ['docs/', 'Documents']
    ],

    displayAllHeaders: true, 
    activeHeaderLinks: true, 
    lastUpdated: 'Last Updated', 
    serviceWorker: {
        updatePopup: true,
        repo: 'AlexWelcing/VuePress-NetlifyCMS',
        repoLabel: 'Github',
        editLinks: true,
        docsBranch: 'master',	
    }
    },
  }
}
