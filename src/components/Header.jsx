/* eslint-disable jsx-a11y/alt-text */
import React,{ useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ThemeContext } from '../context/context';
import { Box, Stack } from '@mui/material';
import Loader from '../shared/loader';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const { loading, mobileMenu, setMobileMenu} = useContext(ThemeContext);

    const navigate = useNavigate();

    const searchQueryHandler = (e) => {
        if (
            (e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0 
        ) {
            navigate(`${searchQuery}`);
        }
    };

        const mobileMenuToggle = ()=> {
            setMobileMenu(!mobileMenu);
        }
        const { pathname } = useLocation;
        const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <Box className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black">
        {loading && <Loader />}

        <Stack className='flex h-5 items-center'>
            {
                pageName !== "video" && (
                    <Box className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' 
                    onClick={mobileMenuToggle}>
                        {
                            mobileMenu ? (
                                <CloseIcon className="text-white text-xl" />
                            ) :
                            (
                               <MenuIcon className="text-white text-xl" /> 
                            )
                        }
                    </Box>
                )
            }
             <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden md:block"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                    />
                </Link>
        </Stack>
        <Stack className='group flex items-center'>
            <Box className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl rounded-r-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <Box className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
                    <SearchIcon className="text-white text-xl" />
                </Box>
                <input 
                    type='text'
                    className='bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]'
                    onChange={(e)=> setSearchQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    placeholder='search'
                    value={searchQuery}
                />
                <button className='w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'
                    onClick={()=> searchQueryHandler("searchButton")}
                >
                    <SearchIcon className="text-white text-xl" />
                </button>
            </Box>
        </Stack>
        <Stack className="flex items-center" sx={{
            flexDirection: 'row'
        }}>
            <Box className="hidden md:flex">
                <Box className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <VideoCallIcon  className='text-white text-xl cursor-pointer'/>
                </Box>
                <Box className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <NotificationsIcon className='text-white text-xl cursor-pointer' />
                </Box>
            </Box>
            <Box className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
            </Box>
        </Stack>
    </Box>
  )
}

export default Header