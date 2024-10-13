import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        )
    );

  return (
    <RouterProvider router={router} />
  )
}

export default App