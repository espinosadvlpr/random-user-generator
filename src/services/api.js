import axios from 'axios'

export const getAPIUser = async () => {
    const { data } = await axios.get("https://randomuser.me/api/")
    return data.results[0]
}