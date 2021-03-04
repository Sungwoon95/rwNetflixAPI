import React, { useEffect, useState } from 'react';
import "./Nav.css"
function Nav(){
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])

    return(
        <header className={`nav ${show && "navBlack"}`}>
            <h1>NETFLIX</h1>
            {/* <ul>
                <li><a href="#" title="넷플릭스 오리지널">Original</a></li>
                <li><a href="#" title="인기 영상">Trend</a></li>
                <li><a href="#" title="액션">Action</a></li>
                <li><a href="#" title="코미디">Comedy</a></li>  
            </ul> */}
        </header>
    )
}

export default Nav