import { defineConfig } from 'vitepress'

const microsoftDocs = 'https://learn.microsoft.com/powershell/'

const enContent = [
  { text: 'Introduction to PowerShell', link: '/en/content/000-intro' },
  { text: 'Language structures', link: '/en/content/010-syntax' }
]

const esContent = [
  { text: 'Introducción a PowerShell', link: '/es/content/000-intro' },
  { text: 'Estructuras del lenguaje', link: '/es/content/010-syntax' }
]

export default defineConfig({
  base: '/powershell-docs/',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      title: 'PowerShell Fundamentals',
      description: 'Theoretical fundamentals for system administration with PowerShell',
      themeConfig: {
        home: '/en/',
        logo: '/Powershell.svg',
        nav: [
          {
            text: 'Contents',
            items: enContent
          },
          { text: 'Solved exercises', link: '/en/solved-exercises/' },
          {
            text: 'Additional resources',
            items: [
              { text: 'Microsoft PowerShell documentation', link: microsoftDocs }
            ]
          }
        ],
        sidebar: {
          '/en/': [
            { text: 'Contents', items: enContent },
            { text: 'Solved exercises', link: '/en/solved-exercises/' },
            {
              text: 'Additional resources',
              items: [
                { text: 'Microsoft PowerShell documentation', link: microsoftDocs }
              ]
            }
          ]
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'PS Fundamentos',
      description: 'Fundamentos teóricos para la administración de sistemas con PowerShell',
      themeConfig: {
        home: '/es/',
        logo: '/Powershell.svg',
        nav: [
          {
            text: 'Contenidos',
            items: esContent
          },
          { text: 'Ejercicios resueltos', link: '/es/solved-exercises/' },
          {
            text: 'Recursos adicionales',
            items: [
              { text: 'Documentación de Microsoft PowerShell', link: microsoftDocs }
            ]
          }
        ],
        sidebar: {
          '/es/': [
            { text: 'Contenidos', items: esContent },
            { text: 'Ejercicios resueltos', link: '/es/solved-exercises/' },
            {
              text: 'Recursos adicionales',
              items: [
                { text: 'Documentación de Microsoft PowerShell', link: microsoftDocs }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    logo: '/Powershell.svg'
  }
})
