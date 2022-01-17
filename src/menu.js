export default [{
  id: 'start',
  label: 'start',
  path: '/'
},
{
  id: 'lu',
  label: 'lu',
  url: 'http://www.lu.se'
},
{
  id: 'admin',
  label: 'admin',
  children: [
    {
      id: 'page1',
      label: 'Page1',
      path: '/page1'
    }
  ]
},
{
  id: 'page2',
  label: 'page2',
  path: '/page2',
  children: [{
    id: 'page3',
    label: 'page3',
    path: '/page2/page3'
  },
  {
    id: 'page4',
    label: 'page4',
    path: '/page2/page4'
  },
  {
    id: 'google',
    label: 'google',
    url: 'https://www.google.com'
  }]
}]
