import { Avatar, Box, Button, Card, CardActions } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile'
import axios from 'axios'

const users = []

function UserCard() {

    const [userInfo, setUserInfo] = useState({})

    const saveUser = () => {
        users.push(userInfo)
        users.map((data) => console.log(data.name))
    }

    const getUser = async () => {
        const { data } = await axios.get("https://randomuser.me/api/")
        const results = data.results[0]
        setUserInfo(results)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Box marginTop="20px" display="flex" justifyContent="center" alignContent="center">
            <Card display="flex" sx={{ minWidth: 300, maxWidth: 700 }}>
                <Avatar alt="User Picture" src={userInfo.picture?.large} sx={{ width: 100, height: 100, margin: 2 }} />
                <UserProfile userInfo={userInfo} />
                <CardActions>
                    <Button onClick={getUser} color='secondary'>Get new user</Button>
                    <Button onClick={saveUser} color='secondary'>Save user</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default UserCard