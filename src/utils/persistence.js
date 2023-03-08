const users = []

export const getSavedUsers = () => {
    return users
}

export const saveUser = (userInfo) => {
    users.push(userInfo)
}