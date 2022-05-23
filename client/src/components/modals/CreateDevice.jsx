import { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }
  const deleteItem = (number) => {
    setInfo(info.filter((i) => i.number !== number))
  }
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="container-modal-title-vcenter">Добавить новое устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2 ">
            <Dropdown.Toggle variant="outline-primary">Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-primary">Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" placeholder="введите название устройства" />
          <Form.Control type="number" className="mt-3" placeholder="введите стоимость устройства" />
          <Form.Control
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
                <Form.Control placeholder="Введите название свойства" />
              </Col>
              <Col md={4} className="mb-2">
                <Form.Control placeholder="Введите описание свойства" />
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
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
