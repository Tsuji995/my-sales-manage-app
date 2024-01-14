import {Link, Outlet } from "react-router-dom"

export default function RouterApp() {
    return (
       <>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <hr />
        <Outlet />
       </>
    )
}