import { Home, Room } from '../components'

export const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/:roomId', name: 'Room', Component: Room }
]