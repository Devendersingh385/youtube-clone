import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LeftNavMenuItem from './LeftNavMenuItem';
import { ThemeContext } from '../context/context';
import { categories } from "../utils/constants";
import { Box, Stack } from '@mui/material';

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory} = useContext(ThemeContext);

    const navigate = useNavigate();
    const clickHandler = (name, type)=> {
        switch (type) {
        case "category":
            return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default: 
                break;
    }
    }
  return (
   <Stack className='md:block w-[240px] overflow-y-auto h-screen py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all'>
        <Box className='flex px-5 flex-col' 

        >
                {categories.map((item)=> {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem 
                                text={item.type === 'home' ? "Home" : item.name}
                                icon={item.icon}
                                action={()=>{
                                    clickHandler(item.name, item.type);
                                    navigate("/")
                                }}
                                className={`${selectedCategory === item.name
                                ? "bg-white"
                                : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    )
                })}
                 <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: devplix
                </div>
        </Box>
   </Stack>
  )
}

export default LeftNav