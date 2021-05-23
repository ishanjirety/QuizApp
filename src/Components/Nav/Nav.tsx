import React from 'react'
import './Nav.css'
import './Nav.responsive.css'
import {Link} from 'react-router-dom'
import {useHeader} from '../../Context'
export function Nav() {
    const {setHeaderName} = useHeader()
   return (
       <nav className="nav fixed flex w-full justify-evenly items-center h-16 bottom-0">
            <Link to="/quizes" onClick={()=>setHeaderName("Quiz")} className="link-color mr-32" ><svg className="w-10" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8c.48-.68.21-1.94-1.14-1.94c-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26c.37.6.58 1.73.01 2.57c-.63.93-1.23 1.21-1.56 1.81c-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66zm-.56 3.79c0-.59.47-1.04 1.05-1.04c.59 0 1.04.45 1.04 1.04c0 .58-.44 1.05-1.04 1.05c-.58 0-1.05-.47-1.05-1.05z" fill="currentColor"></path></svg><p className="icon-tag">Quiz</p></Link>
            <Link to="/dashboard" onClick={()=>setHeaderName("Dashboard")} className="link-color circle absolute">
            <svg className="w-10" viewBox="0 0 24 24"><path d="M12 4h8v6h-8V4zm0 17V11h8v10h-8zm-9 0v-6h8v6H3zm0-7V4h8v10H3zm1-9v8h6V5H4zm9 0v4h6V5h-6zm0 7v8h6v-8h-6zm-9 4v4h6v-4H4z" fill="currentColor"></path></svg><p className="icon-tag">Dashboard</p>
            </Link>
            <Link to="/dashboard" onClick={()=>setHeaderName("Profile")} className="link-color">
            <svg className="w-10" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></g></svg>
            <p className="icon-tag">Profile</p>
            </Link>

        </nav>
    )
}


