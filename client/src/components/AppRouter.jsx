import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '../index'
import { publicRoutes, authRoutes } from '../routes'

const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
