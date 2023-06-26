import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;

export default function Sidebar() {
    let [home, setHome] = React.useState(true)
    let [contact, setContact] = React.useState(false)
    let [inform, setInform] = React.useState(false)
    let [guide, setGuide] = React.useState(false)
    let change = (elem) => {
        if (elem === "Home") {
            setContact(false)
            setGuide(false)
            setInform(false)
            setHome(true);
        }
        if (elem === "Contact") {
            setGuide(false)
            setInform(false)
            setHome(false);
            setContact(true)
        }
        if (elem === "Information") {
            setGuide(false)

            setHome(false);
            setContact(false)
            setInform(true)
        }
        if (elem === "Guide") {


            setHome(false);
            setContact(false)
            setInform(false)
            setGuide(true)
        }
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Sidebar
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Home', 'Contact', 'Information', 'Guide'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} onClick={() => change(text)} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>


                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {home === true ? <> <h1>Welcome to the Home Page</h1>
                    <p>This is the content for the home page.</p></> : ""}
                {contact === true ? <>
                    <h1>Contact Information</h1>
                    <p>This is the content for the contact page.</p>
                </> : ""}

                {inform === true ? <>
                    <h1>Information Page</h1>
                    <p>This is the content for the information page.</p>
                </> : ""}
                {guide === true ? <>
                    <h1>Guide Page</h1>
                    <p>This is the content for the guide page.</p>
                </> : ""}
            </Box>
        </Box>
    );
}