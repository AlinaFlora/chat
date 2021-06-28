import { makeStyles, styled } from "@material-ui/core"
import { Button } from "react-bootstrap"
import { colors } from "../config"

export const StyledButton = styled(Button)({
  width: '100%',
  background: colors.button.root,
  borderRadius: 15,
  padding: 15,
  textDecoration: 'none',
  textAlign: 'center',
  borderColor: colors.border.root,
  borderWidth: 0,
  borderStyle: 'none',
  marginTop: '20px',
  fontFamily: '"Gotham", sans-serif',
  fontWeight: 'bold',
  fontSize: '22px',
  color: colors.font.white,
  transition: 'background-color .3s',
  '&:focus': {
    outline: 'none',
    borderColor: colors.border.white,
    boxSizing: 'border-box',
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: colors.button.hover,
  },
  '&:disabled': {
    backgroundColor: colors.button.grey,
    color: colors.font.white,
  },
})

export const useSharedStyles = makeStyles({
  form: {
    width: '400px',
    minWidth: '200px',
    minHeight: '200px',
    backgroundColor: colors.background.primary,
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    margin: '20px 0',
    width: '100%',
  },
  formLabel: {
    display: 'block',
    color: colors.font.black,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 15,
    marginBottom: 5,
  },
  formControl: {
    padding: '12px 17px',
    borderRadius: 15,
    fontSize: 14,
    border: '1px solid transparent',
    transition: 'border-color .3s',
    fontWeight: 400,
    letterSpacing: 1,
    cursor: 'pointer',
    width: '100%',
    backgroundColor: colors.background.primary,
    '&:focus': {
      borderRadius: 15,
      outline: 'none',
      borderColor: colors.decoration.primary,
      backgroundColor: colors.background.primary,
    },
    '&::placeholder': {
      fontWeight: 400,
      color: colors.font.black,
      opacity: 0.6,
    },
  },

})
