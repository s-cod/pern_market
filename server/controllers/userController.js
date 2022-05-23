const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' })
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body
    if (!email || !password) {
      return next(ApiError.badRequests('Не корректные данные!'))
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequests('Пользователь с таким email уже существует!'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password: hashPassword })
    const basket = await Basket.create({ userId: user.id })
    const token = generateJwt({
      id: user.id,
      email,
      role: user.role,
    })
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) return next(ApiError.badRequests('Пользователь с такими данные не зарегистрирован'))

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
      return next(ApiError.badRequests('Неверный логин либо пароль'))
    }
    const token = generateJwt({
      id: user.id,
      email,
      role: user.role,
    })

    return res.json({ token })
  }

  async check(req, res, next) {
    const payload = { id: req.user.id, email: req.user.email, role: req.user.role }
    const token = generateJwt(payload)
    return res.json({ token })
  }
}

module.exports = new UserController()
