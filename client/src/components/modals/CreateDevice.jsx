import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { createDevice, fetchBrands, fetchDevice, fetchTypes } from '../../http/deviceAPI'
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
  const { devices } = useContext(Context)

  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data))
    fetchBrands().then((data) => devices.setBrands(data))
    fetchDevice().then((data) => devices.setDevice(data.rows))
  }, [])

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const deleteItem = (number) => {
    setInfo(info.filter((i) => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)))
  }

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    console.log(devices.selectedType.name, devices.selectedBrand.name, name, price, info, file)
  }

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="container-modal-title-vcenter">Добавить новое устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2 ">
            <Dropdown.Toggle variant="outline-primary">
              {devices.selectedType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.types.map((type) => (
                <Dropdown.Item onClick={() => devices.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-primary">
              {devices.selectedBrand.name || 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {devices.brands.map((brand) => (
                <Dropdown.Item onClick={() => devices.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="введите название устройства"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="введите стоимость устройства"
          />
          <Form.Control
            onChange={selectFile}
            type="file"
            className="mt-3"
            placeholder="Выберите изображение устройства"
          />
          <hr />
          <Button onClick={() => addInfo()} variant="outline-primary" className="btn-sm">
            Добавить новое свойство
          </Button>
          <hr />
          {info.map((i) => (
            <Row key={i.number}>
              <Col md={4} className="mb-2">
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4} className="mb-2">
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => deleteItem(i.number)}
                  variant="outline-danger"
                  className="btn-sm"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
