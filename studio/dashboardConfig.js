export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d03dbad25dc3e33ff1d762d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p5xe6tri',
                  apiId: 'bb99a60d-eb4f-4ff4-84da-37b4b43c8582'
                },
                {
                  buildHookId: '5d03dbadf638500e169d0760',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vfsn4itk',
                  apiId: 'eafbfb95-08d2-456e-a970-f8ba7687deec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihai-cloudbrick/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vfsn4itk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
