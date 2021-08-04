import React from 'react';

const Footer=()=>{
    const year=new Date().getFullYear();
    return(
    <>
    <div>
     <footer className="footer">
        <p1>copyright © {year}</p1>
        <p2> @@ created by rimsha @@ </p2>
    </footer>
    </div>
    </>
    )
}
export default Footer;