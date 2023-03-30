import './navbar.scss'
import {Link} from "react-router-dom"
import {Box} from "@mui/material"

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
                <Box display="flex" alignItems="center" gap="20px">
                    {/* @ts-ignore */}
                    <ion-icon name="newspaper-sharp" ></ion-icon>
                    <h1>4TransferNews</h1>
                </Box>
                </Box>
            </div>
        </div>
        <nav className='nav'>
            <Link to="/" className='link'><button className='btn'>Preimer league</button></Link>
            <Link to="2" className='link'><button className='btn'>La liga</button></Link>
            <Link to="3" className='link'><button className='btn'>Ligue 1</button></Link>
        </nav>
        </>
    )
}
export default Navbar;