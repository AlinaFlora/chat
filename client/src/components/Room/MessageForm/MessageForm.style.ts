import { makeStyles } from '@material-ui/core'
import { colors } from "../../../config"

export const useMessageFormStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formGroup: {
    margin: '20px 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-end',
  },
  formControlMsg:
    {
      padding: '12px 17px',
      borderRadius: 15,
      fontSize: 14,
      border: '1px solid',
      transition:  'border-color .3s',
      fontWeight: 400,
      letterSpacing: 1,
      cursor: 'pointer',
      width: '90%',
      borderColor: colors.decoration.black,
      backgroundColor: colors.background.primary,
      '&:focus':{
        outline: 'none',
        borderColor: colors.decoration.primary,
      },
    },
  sendMsgBtn: {
    fontSize: 25,
    float:'right',
    color: colors.button.root,
    backgroundColor: colors.background.primary,
    border:'none',
    '&:hover':{
        color: colors.button.hover
      }
  },
})