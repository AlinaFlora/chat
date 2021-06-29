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
      width: '80%',
      borderColor: colors.decoration.black,
      backgroundColor: colors.background.primary,

    },
  sendMsgBtn: {
    float:'right',
    color: colors.button.root,
    backgroundColor: colors.background.primary,
    border:'none',
    '&:hover':{
        color: colors.button.hover
      },
    '&>span>.MuiSvgIcon-root':{
      fontSize: 30
    }
  },
})