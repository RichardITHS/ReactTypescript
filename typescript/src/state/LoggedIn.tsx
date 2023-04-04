import {useState} from 'react'

export const LoggedIn = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)

const Login = () => {
    setIsLoggedIn(true)
}
const LogOut = () => {
    setIsLoggedIn(false)
}

    return (
        <>
        <button onClick={Login}>Login</button>
        <button onClick={LogOut}>Logout</button>
        <h4>Person is: {isLoggedIn ? 'logged in' : 'logged out'}</h4>
        </>
    )
}
