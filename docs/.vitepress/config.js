export default {
  lang: 'en-US',
  title: "EvoSC# Docs",
  description: "Documentation for EvoSC#.",
  themeConfig: {
    logo: '/evo.png',
    sidebar: {
      "/development/core/": [
        {
          text: "Introduction",
          items: [
            { text: "About EvoSC#", link: "/development/core/index.md" },
            { text: "Getting started", link: "/development/core/getting-started.md" },
            { text: "Overview", link: "/development/core/project-overview.md" }
          ],
        },
      ],
      "/development/modules/": [
        {
          text: "Introduction",
          items: [
            { text: "Introduction", link: "/development/modules/index.md" },
          ],
        },
      ],
      "/api/Core/": [
        {
          text: "EvoSC.Core", items: [
            {text: "Commands", link: "/api/Core/Commands/"},
            {text: "Configuration", link: "/api/Core/Configuration/"},
            {text: "Events", link: "/api/Core/Events/"},
            {text: "Exceptions", link: "/api/Core/Exceptions/"},
            {text: "Helpers", link: "/api/Core/Helpers/"},
            {text: "Plugins", link: "/api/Core/Plugins/"},
            {text: "Services", link: "/api/Core/Services/"},
          ]
        }
      ],
      "/api/Domain/": [
        {
          text: "EvoSC.Domain", items: [
            {text: "Groups", link: "/api/Domain/Groups/"},
            {text: "Maps", link: "/api/Domain/Maps/"},
            {text: "Players", link: "/api/Domain/Players/"},
          ]
        }
      ],
      "/api/Interfaces/": [
        {
          text: "EvoSC.Interfaces", items: [
            {text: "Commands", link: "/api/Interfaces/Commands/"},
            {text: "Messages", link: "/api/Interfaces/Messages/"},
            {text: "Players", link: "/api/Interfaces/Players/"},
            {text: "UI", link: "/api/Interfaces/UI/"},
          ]
        }
      ],
      "/api/Modules/": [
        {
          text: "EvoSC.Modules", items: [
            {text: "Info", link: "/api/Modules/Info/"},
          ]
        }
      ],
      "/api/": [
        {
          text: "Namespaces",
          items: [
            {text: "EvoSC.Core", link: "/api/Core/"},
            {text: "EvoSC.Domain", link: "/api/Domain/"},
            {text: "EvoSC.Interfaces", link: "/api/Interfaces/"},
            {text: "EvoSC.Modules", link: "/api/Modules/"},
          ]
        }
      ],

    },
    nav: [
      { text: "For Server Admins", link: "/using-evosc/" },
      { text: "For Developers", items:
      [
        { text: "Code Documentation", link: "/api/" },
        { text: "Working on the core", link: "/development/core/" },
        { text: "Developing modules/plugins ", link: "/development/plugins/"}
      ], 
    },
    ],
    footer: {
      message: 'Made with ❤️ by EvoSC# Devs',
      copyright: 'Copyright © 2022 Evo'
    },
    editLink: {
      pattern: 'https://github.com/EvoTM/EvoSC-sharp-documentation/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EvoTM/EvoSC-Sharp' },
      { icon: 'twitter', link: 'https://twitter.com/EvoTM' },
      { icon: 'facebook', link: 'https://facebook.com/EvoTrackmania'},
      { icon: 'discord', link: 'https://discord.gg/evotm' },
      { icon: 'youtube', link: 'https://youtube.com/c/EvoTrackmania'}
    ],
  },
};