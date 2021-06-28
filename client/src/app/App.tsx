import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline, ThemeProvider, Typography } from '@material-ui/core'
import { routes } from '../shared/routes'
import { theme } from '../config'
import { StyledContainer, useAppStyles } from './App.style'

export const App = () => {
    const classes = useAppStyles()
    return (
      <Router>
          <StyledContainer>
              <ThemeProvider theme={theme}>
                  <CssBaseline/>
                  <Typography
                    variant="h3"
                    className={classes.appTitle}
                  >
                      Live Chat
                  </Typography>
                  <Switch>
                      {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} exact>
                            <Component/>
                        </Route>
                      ))}
                  </Switch>
              </ThemeProvider>
          </StyledContainer>
      </Router>
    )
}