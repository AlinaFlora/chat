import React from 'react'
import clsx from 'clsx'
import { Card } from 'react-bootstrap'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import { useUsersListStyles } from './Users.List.style'

export const UsersList = ({ users }) => {
    const classes = useUsersListStyles()

    const [expanded, setExpanded] = React.useState(false)
    const usersArr = Object.entries(users)
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    
    const listOfUsers = () => {
        return (<>
            {usersArr.map(([userId, obj]) => (
                    <span key={userId} className={classes.userItem}>
                        <p className={classes.userName}>{obj.username}</p>
                        { obj.online ? <p className={classes.online}>online</p> : <p className={classes.offline}>offline</p>}
            </span>
                ))}
            </>
        )
    }

    return (
            <Card>
                <CardContent className={classes.collapseHeader}  disableSpacing>
                    <div  onClick={handleExpandClick}>Show users
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                    </div>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {listOfUsers()}
                </CardContent>
            </Collapse>
            </Card>

    )
}