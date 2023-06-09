import './navbar.scss'
import {Link} from "react-router-dom"
import {Box} from "@mui/material"
import arrow from '../images/arrow.png'
import epl from '../images/epl.png'
import laliga from '../images/la liga.png'
import ligue1 from '../images/ligue1.png'

const Navbar =()=>{
    return(
        <>
        <div className="App">
            <header className='header'>
                <Box height="50px" color="white" display="flex" width="80%" margin="0px auto" justifyContent="space-between" alignItems="center">
                <p>+44 7700 900703</p>
                <p>4TransferNews@gmail.com</p>
                </Box>
            </header>
            <div>
                <Box height="100px" width="80%" margin="0px auto" display="flex">
                <Box display="flex" alignItems="center" gap="2px">
                    {/* @ts-ignore */}
                    <img src={arrow} className='arrowimg'/>
                    <h1 className='navtitle'>Footynews</h1>
                </Box>
                </Box>
            </div>
        </div>
        <nav className='nav'>
            <Link to="/" className='link'><button className='btn'><img src={epl} className='epl'/>Epl</button></Link>
            <Link to="2" className='link'><button className='btn'><img src={laliga} className='laliga'/>La liga</button></Link>
            <Link to="3" className='link'><button className='btn'><img src={ligue1} className='laliga'/>Ligue 1</button></Link>
            <Link to="4" className='link'><button className='btn'><img src={ligue1} className='laliga'/>Bundesliga</button></Link>
            <Link to="5" className='link'><button className='btn'><img src={ligue1} className='laliga'/>Serie a</button></Link>
        </nav>
        </>
    )
}
export default Navbar;