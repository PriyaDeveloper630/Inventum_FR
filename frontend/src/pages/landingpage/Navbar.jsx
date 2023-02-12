import React from 'react'


function NavBar() {
    return (
        <div className="landingtab">
                <nav className="landingnav">
                    <div>
                    <ul>
                        <li class="down" id="active">
                            <a href="#">Home</a>
                        </li>
                        <li class="dropdown" id="active">
                            <a href="#">About</a>
                        </li>
                        <li class="dropdown" id="active">
                            <a href="#">Team</a>
                        </li>
                    </ul>
                </div>
                </nav>
    
        
        </div>
    )
}

export default NavBar