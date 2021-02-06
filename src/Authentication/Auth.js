import React,{useState, useEffect} from 'react'


function Auth({children}) {

    const [isConnected, setIsConnected] = useState(false)

  //function to check if the JWT is Valid or not

  //this will be executed once every refresh.
    useEffect( async () => {

        async function checkJWTValidity(){
        try{
            axios.defaults.headers.post['Authorization'] = "JWT "+localStorage.getItem("token")

            //fetching ME data from API
            const requestdata = await axios.post(
            utils.endpoint,{query: utils.meQuery}
            )
    
            //checking if the returned Data is NULL, if so, tokens would be deleted from localStorage.
            //else token variables will remain for its still valid.
            if(requestdata.data.data.me === null){
            const tokenItems = await getNewJWT(localStorage.getItem("refreshToken"))
            if(tokenItems.length === 0){
                localStorage.removeItem("token")
                localStorage.removeItem("refreshToken")
                setIsConnected(false)
            }
            else{
                localStorage.setItem("token", tokenItems[0])
                localStorage.setItem("refreshToken",  tokenItems[1])
                setIsConnected(true)
            }
            }
            else{
            console.log(isConnected)
            setIsConnected(true)
            }
        }
        catch(err){
            console.log(err)
        }
        }
    
        async function getNewJWT(refreshToken){
        const token = []
        try{
            //fetching refreshToken data from API
            const requestdata = await axios.post(
            utils.endpoint,
            {
                query: utils.refreshQuery(refreshToken)
            }
            )
    
            //checking if the returned Data is NULL, if so, tokens would be deleted from localStorage.
            //else token variables will remain for its still valid.
    
            if(requestdata.data.data.refreshToken.errors === null){
            token.push(requestdata.data.data.refreshToken.token.toString())
            token.push(requestdata.data.data.refreshToken.refreshToken.toString())
            }
            
        }
        catch(err){
            console.log(err)
        }
        return token
        }

        if (!isConnected) checkJWTValidity();

    }, [isConnected])
    
    return isConnected ? children: null;
}

export default Auth
