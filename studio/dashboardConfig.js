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
                  buildHookId: '5d16feb9d90d5a229a2b71f7',
                  title: 'Sanity Studio',
                  name: 'my-sanity-blog-studio-mmujd21d',
                  apiId: 'e1f6b51a-78f1-42da-b337-ea4b89bf6dcf'
                },
                {
                  buildHookId: '5d16feb9514280998e98f40f',
                  title: 'Landing pages Website',
                  name: 'my-sanity-blog-web',
                  apiId: '3623e9a2-0e60-4475-b229-a081d3ba1694'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simontaosim/my-sanity-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-sanity-blog-web.netlify.com', category: 'apps'}
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
