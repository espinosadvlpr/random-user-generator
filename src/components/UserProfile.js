import { Avatar, CardContent, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Context from '../application/Context'

function UserProfile() {
    const { userInfo } = useContext(Context)

    return (
        <CardContent>
            <Avatar alt="User Picture" src={userInfo.picture?.large} sx={{ width: 100, height: 100, margin: 2 }} />
            <Typography gutterBottom variant="h4" component="div">
                {userInfo.name?.title}. {userInfo.name?.first} {userInfo.name?.last}
            </Typography>
            <List>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Age: " + userInfo.dob?.age} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Gender: " + userInfo.gender} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>

                        <ListItemText primary={"Email: " + userInfo.email} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Phone: " + userInfo.phone} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Location: " + userInfo.location?.state + ", " + userInfo.location?.country} />
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>
        </CardContent>
    )
}

export default UserProfile