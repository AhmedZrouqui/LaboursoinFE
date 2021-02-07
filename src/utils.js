const endpoint = "http://localhost:8000/graphql";
const meQuery = `
query{
    me{
        username,
        firstname,
        lastname,
        password,
        email
    }
}
`


const refreshQuery = (refreshToken) => {
    return  ` 
        mutation {
            refreshToken(refreshToken: "${refreshToken}") 
            {
                success,
                errors,
                payload,
                token,
                refreshToken
            }
        }
    `
}

export default {endpoint,meQuery, refreshQuery};