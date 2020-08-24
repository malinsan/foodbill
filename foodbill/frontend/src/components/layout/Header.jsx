import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: 240,
        flexShrink: 0
    }
}))

const menuItems = [
    'Skapa matsedel',
    'Skapa recept',
    'Skapa ingredienser'
]

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='fixed'>
                <Toolbar>
                    Hej
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant='permanent'>
                <Toolbar />
                <List>
                    {menuItems.map(item => (
                        <ListItem button key={item}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Toolbar />
        </div>
    )
}

export default Header