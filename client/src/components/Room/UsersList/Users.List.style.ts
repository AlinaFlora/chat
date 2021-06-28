import { makeStyles } from '@material-ui/core'
import { colors } from "../../../config";

export const useUsersListStyles = makeStyles({
  collapseHeader: {
   cursor: 'pointer',
    width: '30%',
    padding: 0
  },
  online: {
    color: colors.decoration.green
  },
  offline:{
    color: colors.decoration.black
  },
  userItem:{
    width: '200px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userName: {
    fontWeight: 'bold',
    marginRight: '5px',
    float: 'left'
  }
})

