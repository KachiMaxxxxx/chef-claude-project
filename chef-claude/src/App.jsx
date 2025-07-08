import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
     const [userName, setUserName] = React.useState("Joe");
     console.log(setUserName);

     
    return (
        <main>
            <Header userNames = {userName}/>
            <Body userNames = {userName}
             />
        </main>
    )
}
