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
  myMsgCard: {
    textAlign: 'right',
    float: 'right',
    width:'100%',
    backgroundColor:colors.background.blue,
    color: colors.font.white,
    boxShadow:'none',
    paddingRight: '10px'
  },
  notMyMsgCard: {
    textAlign: 'left',
    float: 'left',
    width:'100%',
    backgroundColor:colors.background.black,
    color: colors.font.white,
    boxShadow:'none',
    paddingLeft: '10px'
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
    maxWidth: '10px',
    maxHeight: '10px',
    color:colors.font.white,
backgroundColor: colors.background.blue,
    float:'left',
    border: 'none',
    '&:hover':{
      color:colors.icons.negative
    }
  },
})