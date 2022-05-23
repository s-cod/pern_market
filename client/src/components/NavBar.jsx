import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
    navigate(LOGIN_ROUTE)
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
            Название Магазина
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'primary'}>
                Админ панель
              </Button>
              <Button onClick={() => logOut()} variant={'primary'}>
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button onClick={() => navigate(LOGIN_ROUTE)} variant={'primary'}>
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
      <h1>{user.isAuth}</h1>
    </>
  )
})

export default NavBar
