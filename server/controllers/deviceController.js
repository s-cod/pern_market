const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/apiError')

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let filename = uuid.v4() + '.jpeg'
      img.mv(path.resolve(__dirname, '..', 'static', filename))
      const device = await Device.create({ name, price, brandId, typeId, img: filename })
      if (info) {
        info = JSON.parse(info)
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        })
      }
      return res.json(device)
    } catch (error) {
      next(ApiError.badRequests(error.message))
    }
  }
  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let where = {}
    if (brandId) where['brandId'] = brandId
    if (typeId) where['typeId'] = typeId
    const devices = await Device.findAndCountAll({ where, limit, offset })
    res.json(devices)
  }
  async getOne(req, res) {
    const { id } = req.params
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    })
    return res.json(device)
  }
}

module.exports = new DeviceController()
