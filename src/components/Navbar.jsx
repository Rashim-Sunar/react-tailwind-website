import react,{useState} from 'react'
import logo from '../assets/logo.png'
//react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
// import link from react scrollbar
import { Link } from 'react-scroll';

export default function Navbar() {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
      // making arrays of nav-items
  const navItems = [
    {link:'Overview',path:'overview'},
    {link:'Feature',path:'feature'},
    {link:'About',path:'about'},
    {link:'Pricing',path:'pricing'}
  ]
  return (
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-3xl border-b mx-auto text-primary fixed right-0 left-0 top-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium '>
            <div className='flex space-x-14 items-center'>   
                <a className='text-2xl font-semibold flex items-center space-x-3 text-primary' href="/">
                    <img src={logo} alt="" className='w-10 inline-block items-center'/>
                    <span>XYZ</span>
                 </a>
                 <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=><Link activeClass='active' smooth={true} duration={1000} spy={true} offset={-100} key={link} to={path} className='block hover:text-gray-500'>{link}</Link>)
                    }
                 </ul>
            </div>
            {/* language and signup */}
            <div className='space-x-12 hidden md:flex items-center flex-grow justify-end'>
                <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/><span>Language</span></a>
                <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
            </div>
            {/* menu button only display on mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                   {
                        isMenuOpen?(<FaXmark className='w-6 h-6 text-primary'/>):(<MdMenu className='w-6 h-6 text-primary'/>)
                   } 
                </button>
            </div>
        </div>
    </nav>

    {/* navbar for mobile devices */}
    <div className={`space-y-4 px-4 pt-24 pb-5 text-lg  bg-secondary ${isMenuOpen?"block fixed top-0 right-0 left-0":" hidden "} md:hidden`}>
        {
             navItems.map(({link,path})=><Link onClick={toggleMenu} activeClass='active' smooth={true} spy={true} offset={-80} key={link} to={path} className='block text-white hover:text-gray-500'>{link}</Link>)
        }
    </div>
    </>
  )
}
