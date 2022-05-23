import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
  constructor() {
    this._types = []
    this._brands = []
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
      {
        id: 6,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://tehnoteca.ru/img/1663/1662536/apple_clear_case_for_iphone_11_7.jpg',
      },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }
  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevice(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
