import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import { Context } from '../index'
const TypeBar = observer(() => {
  const { devices } = useContext(Context)

  return (
    <ListGroup>
      {devices.types.map((type) => {
        return (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={type.id === devices.selectedType.id}
            onClick={() => devices.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
})

export default TypeBar
