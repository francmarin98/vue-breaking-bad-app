export interface LinkRoute {
  name: string
  path: string
  icon: string
}



export const linkRoutes: LinkRoute[] = [
  {
    name: 'Home',
    icon: 'bx bx-home-alt',
    path: '/'
  },
  {
    name: 'About',
    icon: 'bx bx-user',
    path: '/about'
  },
  {
    name: 'Code',
    icon: 'bx bx-code-curly',
    path: '/code'
  },
  {
    name: 'Contact me',
    icon: 'bx bx-message-square-detail',
    path: '/github'
  },
]