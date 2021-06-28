import { useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormControl, MenuItem, Select } from "@material-ui/core"
import { useLocalStorage } from '../../hooks'
import { StyledButton, useSharedStyles } from "../../shared/sharedStyles.style"

export function Home() {
  const classes = useSharedStyles()

  const [roomId, setRoomId] = useState('first')
  const [username, setUsername] = useLocalStorage('username', 'Kate')
  const linkRef = useRef(null)

  const handleNameChange = (e: any) => {
    setUsername(e.target.value)
  }

  const handleRoomChange = (e: any) => {
    setRoomId(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (linkRef !== null) {
      linkRef.current.click()
    }
  }

  const trimmed = username.trim()

  return (
    <Form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Form.Group  className={classes.formGroup}>
        <Form.Label className={classes.formLabel}>Name:</Form.Label>
        <Form.Control  className={classes.formControl} value={username} onChange={handleNameChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label className={classes.formLabel}>Room:</Form.Label>
        <FormControl className={classes.formControl}>
          <Select
            labelId="select-room"
            id="select-room"
            value={roomId}
            onChange={handleRoomChange}
          >
            <MenuItem value={'first'}>First</MenuItem>
            <MenuItem value={'second'}>Second</MenuItem>
          </Select>
        </FormControl>
      </Form.Group>
      {trimmed && (
        <StyledButton  as={Link} to={`/${roomId}`} ref={linkRef}>
          Confirm and chat
        </StyledButton>
      )}
    </Form>
  )
}