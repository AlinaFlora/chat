import React, { useState } from 'react'
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined'
import { Button, Grid } from "@material-ui/core"
import { Formik, Form, Field} from 'formik'
import { StyledFormInput } from "../../../shared/sharedStyles.style"
import { useMessageFormStyles } from './MessageForm.style'

export const MessageForm = ({ sendMessage }) => {
    const classes = useMessageFormStyles()
    const [messageBody, setMessageBody] = useState('')

    const initialValues = {
        messageContent: messageBody ? messageBody : ''
    }

    const handleMessageSend = (e) => {
        e.preventDefault()
        const trimmed = messageBody.trim()
        if (trimmed) {
            sendMessage({ messageBody: messageBody })
            setMessageBody('')
        }
    }


    return (
        <>
            <Formik
                initialValues={initialValues}
            >
            <Form onSubmit={handleMessageSend} className={classes.form}>
                <Grid container spacing={3} className={classes.formGroup}>
                    <Field
                        id="messageContent"
                        name="messageContent"
                        type="text"
                        as={StyledFormInput}
                        placeholder={'Type a message...'}
                        onChange={(e)=>  setMessageBody(e.target.value)}
                        value={messageBody}
                        className={classes.formControlMsg}
                    />
                    <Button   className={classes.sendMsgBtn}  type='submit' variant='success'>
                        <NearMeOutlinedIcon/>
                    </Button>
                </Grid>
            </Form>
            </Formik>
        </>
    )
}