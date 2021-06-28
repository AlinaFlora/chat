import { Theme, createMuiTheme } from '@material-ui/core'
import { enUS } from '@material-ui/core/locale'
import palette from './palette'
import typography from './typography'

const theme: Theme = createMuiTheme(
  {
    palette,
    typography,
  },
  enUS,
)

export default theme