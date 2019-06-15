import { registerApplication, start } from 'single-spa'

const commonProps = {
  prop1: 'Prop #1',
  prop2: 'Prop #2'
}

registerApplication(
  'dashboard',
  () => import('../dashboard/src/dashboard.single-spa.js'),
  location =>
    location.pathname === '' ||
    location.pathname === '/' ||
    location.pathname.startsWith('/dashboard'),
  commonProps
)

registerApplication(
  'countries',
  () => import('../countries/src/countries.single-spa.js'),
  location => location.pathname.startsWith('/countries'),
  commonProps
)

registerApplication(
  'airports',
  () => import('../airports/src/airports.single-spa.js'),
  location => location.pathname.startsWith('/airports'),
  commonProps
)

registerApplication(
  'header',
  () => import('./src/header/header.single-spa.js'),
  () => true
)

registerApplication(
  'footer',
  () => import('./src/footer/footer.single-spa.js'),
  () => true
)

start()
