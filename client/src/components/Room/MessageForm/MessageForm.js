import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FiSend } from 'react-icons/fi'
import { useMessageFormStyles } from './MessageForm.style'

export const MessageForm = ({ username, sendMessage }) => {
    const classes = useMessageFormStyles()

    const [text, setText] = useState('')

    const handleMessageSend = (e) => {
        e.preventDefault()
        const trimmed = text.trim()
        if (trimmed) {
            sendMessage({ messageText: text, senderName: username })
            setText('')
        }
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <Form onSubmit={handleMessageSend} className={classes.form}>
                <Form.Group className={classes.formGroup}>
                    <Form.Control
                        onChange={handleChangeText}
                        type='text'
                        value={text}
                        className={classes.formControlMsg}
                    />
                    <Button   className={classes.sendMsgBtn}  type='submit' variant='success'>
                        <FiSend/>
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}