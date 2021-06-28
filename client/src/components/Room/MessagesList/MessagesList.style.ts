import { makeStyles } from '@material-ui/core'
import { colors } from "../../../config"

export const useMessagesListStyles = makeStyles({
  listGroup: {
    height: '80vh',
    border: 'none',
    padding: '0 ,5px',
    borderRadius: '4px',
    overflow: 'auto'
  },
  myMsg: {
    padding: '10px',
    textAlign: 'right',
    float: 'right',
    width:'55%',
    backgroundColor:colors.background.blue,
    color: colors.font.white,
    borderRadius: 10,
    margin: 5
  },
  notMyMsg: {
    padding: '10px',
    textAlign: 'left',
    float: 'left',
    width:'55%',
    backgroundColor:colors.background.black,
    color: colors.font.white,
    borderRadius: 10,
    margin: 5
  },
  cardHeader:{
    fontSize: 12,
  },
  cardBody:{
    fontSize: 18
  },
  removeBtn:{
    fontSize: 12,
    color:colors.font.white,
    fontWeight: 'bold',
backgroundColor: colors.background.blue,
    float:'left',
    border: 'none',
    '&:hover':{
      color:colors.icons.negative
    }
  },
})