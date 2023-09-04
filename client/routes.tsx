import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}></Route>
)
