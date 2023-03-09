import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from './components/Navbar'
import Rockets from './components/Rockets'
import Dashboard from './components/Dashboard'
import theme from './theme'
import "./styles.css"
import Launches from './components/Launches'
import Launchpads from './components/Launchpads'
import Landpads from './components/Landpads'
import store from './app/store'
import { Provider } from "react-redux"
import Starlink from './components/Starlink'
import Dragons from './components/Dragons'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/rockets", element: <Rockets /> },
      { path: "/launches", element: <Launches /> },
      { path: "/launchpads", element: <Launchpads /> },
      { path: "/landpads", element: <Landpads /> },
      { path: "/starlinks", element: <Starlink /> },
      { path: "/dragons", element: <Dragons /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>

)
