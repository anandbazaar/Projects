import { useContext } from "react"
import { UserContext } from "../common/UserProvider"

export const Home = () =>{
    const user = useContext(UserContext)
    return <div>{user}</div>
}