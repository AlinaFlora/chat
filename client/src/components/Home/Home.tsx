import React, { useState } from 'react'
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core"
import { Formik, Form} from 'formik'
import { FormLabel, StyledButton, useSharedStyles } from "../../shared/sharedStyles.style"

export function Home() {
  const classes = useSharedStyles()
  const [roomId, setRoomId] = useState('first')
  const initialValues = {
    roomId: roomId ? roomId : 'first'
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    window.location.replace(`/${roomId}`)
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
    <Form
      className={classes.form}
      onSubmit={handleSubmit}
    >
        <Grid item xs={12}>
          <FormLabel
            className={classes.formLabel}
          >
            Room:
          </FormLabel>
          <FormControl className={classes.formControl}>
            <Select
              labelId="select-room"
              id="select-room"
              value={roomId}
              onChange={(e: any)=> setRoomId(e.target.value)}
            >
              <MenuItem value={'first'}>First</MenuItem>
              <MenuItem value={'second'}>Second</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <StyledButton   type="submit" onClick={()=>{}} >
          Confirm and chat
        </StyledButton>
    </Form>
      </Formik>
      </>
  )
}