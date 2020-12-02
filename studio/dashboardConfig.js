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
                  buildHookId: '5fc6f81c8cb005bd3627ac35',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-n1e634yv',
                  apiId: '1ee83c4b-566e-4569-a4d5-9bcd572ac52f'
                },
                {
                  buildHookId: '5fc6f81cf041f9a76c020e34',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-b3v3z4cx',
                  apiId: '097b5c1a-ab19-483a-bdcc-6cb9d04ba089'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-b3v3z4cx.netlify.app', category: 'apps'}
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
