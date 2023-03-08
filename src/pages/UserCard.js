import { Box, Button, Card, CardActions, Container } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import UserProfile from '../components/UserProfile'
import { saveUser } from '../utils/persistence'
import { getAPIUser } from '../services/api'
import Context from '../application/Context'

function UserCard() {
    const { userInfo, addUser } = useContext(Context)

    const loadUser = async () => {
        const data = await getAPIUser()
        addUser(data)
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <Container>
            <Box margin="20px" display="flex" justifyContent="center" alignContent="center">
                <Card display="flex" sx={{ minWidth: 300, maxWidth: 700 }}>
                    <UserProfile />
                    <CardActions>
                        <Button onClick={loadUser} color='secondary'>Get new user</Button>
                        <Button onClick={() => saveUser(userInfo)} color='secondary'>Save user</Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    )
}

export default UserCard