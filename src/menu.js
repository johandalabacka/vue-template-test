export default [{
  id: 'start',
  label: 'Start',
  path: '/'
},
{
  id: 'lu',
  label: 'LU',
  url: 'http://www.lu.se'
},
{
  id: 'page1',
  label: 'Page1',
  path: '/page1'
  
},
{
  id: 'page2',
  label: 'Page2',
  path: '/page2',
  children: [{
    id: 'page3',
    label: 'Page3',
    path: '/page2/page3'
  },
  {
    id: 'page4',
    label: 'Page4',
    path: '/page2/page4'
  },
  {
    id: 'google',
    label: 'Google',
    url: 'https://www.google.com'
  }]
}]
