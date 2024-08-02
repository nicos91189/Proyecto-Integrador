import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from './utils/routes';
import { useMedicoStates } from '../Components/utils/global.context';

const Navbar = () => {
  const navigate = useNavigate();
  const { toggleTheme, state } = useMedicoStates();

  return (
    <nav>
      <button onClick={() => navigate(-1)}>volver</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.favs}>
        <h4>Carrito</h4>
      </Link>
      <Link to={routes.crear}>
        <h4>Productos</h4>
      </Link>
      <Link to={routes.crear}>
        <h4>Ofertas</h4>
      </Link>
      <Link to={routes.crear}>
        <h4>Categorias</h4>
      </Link>
      <button>Crear cuenta</button>
      <button>Iniciar sesión</button>
      {/* <button className='cambiarTema' onClick={toggleTheme}>
      {state.theme === 'light' ? (
          <img src="../images/luna.png" alt="luna" />
        ) : (
          <img src="../images/sol.png" alt="sol" />
        )}
      </button> */}
    </nav>
  )
}

export default Navbar