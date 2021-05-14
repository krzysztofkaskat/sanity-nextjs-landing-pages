export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '609e19439dcd8385c511d8f4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zqfsya19',
                  apiId: 'fea6a97b-d069-4720-958f-6f8191fb3fc8'
                },
                {
                  buildHookId: '609e1943e9539a9a7cf24f99',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pyg1neir',
                  apiId: 'a1ea8c67-07ef-49b8-b0b9-d94e6245f8b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krzysztofkaskat/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pyg1neir.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
