import { makeStyles, styled } from '@material-ui/core'
import { colors } from "../config"

export const StyledContainer = styled('div')({
  padding: '0 110px',
  maxWidth:'900px'
})

export const useAppStyles = makeStyles({
  appTitle: {
    display: 'flex',
    color: colors.font.primary,
    minWidth: '250px',
    marginTop: '20px',
    '&::before': {
      content: '""',
      display: 'block',
      width: 13,
      height: 28,
      backgroundColor: colors.decoration.primary,
      marginRight: 10,
      alignSelf: 'center',
    },
  },
})