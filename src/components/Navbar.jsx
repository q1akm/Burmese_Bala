import { Link } from "react-router-dom"
import { Stack } from "@mui/material"

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px',
      xs: '20px' }, justifyContent: 'none'}} 
      px= "20px">
      <Link to="/">
        <img src={Logo} alt="logo" 
        className="w-[48px] h-[48px] mx-[20px]"/>
      </Link>
      <Stack 
      direction="row"
      gap="24px"
      fontSize="24px"
      alignItems="flex-end">
         <Link to="/" className="text-none text-[#3A1212] border-b-2 border-[#FF2625]">
            Home
         </Link>
         <a href="#exercises" className="text-none text-[#3A1212]">Exercises</a> 
      </Stack>
    </Stack>
  )
}

export default Navbar