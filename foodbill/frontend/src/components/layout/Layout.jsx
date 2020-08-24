import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container
} from '@material-ui/core'
import Dashboard from '../ingredients/Dashboard'
import { Route, Switch, Link } from 'react-router-dom'
import Foodbill from '../foodbill/Foodbill'
import Recipes from '../recipes/Recipes'
import Ingredients from '../ingredients/Ingredients'

/*
 *
 *  This component describes the main layout for the site.
 *  All menu items and routing between pages is located here.
 * 
*/

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        flexShrink: 0
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(20)
    }
}))

const menuItems = [
    { text: 'Skapa matsedel', path: '/foodbill', component: Foodbill },
    { text: 'Skapa recept', path: '/recipes', component: Recipes },
    { text: 'Skapa ingredienser', path: '/ingredients', component: Ingredients }
]

function Layout(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='fixed'>
                <Toolbar>
                    <Typography variant='h5'>
                        FOOD BILL
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant='permanent'>
                <Toolbar />
                <List>
                    {menuItems.map(item => (
                        <ListItem button component={Link} to={item.path} key={item.text}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Toolbar />
            <main className={classes.content}>
                <Container>
                    <Toolbar />
                    <Switch>
                        <Route exact path='/' component={Ingredients} />
                        {menuItems.map(item => (
                                <Route
                                    path={item.path}
                                    component={item.component}
                                    key={item.text}
                                />
                            )
                        )}
                    </Switch>
                </Container>
            </main>
        </div>
    )
}

export default Layout
