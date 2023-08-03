
import React, { useEffect, useContext} from 'react';

import { ThemeContext } from '../context/context';
import { Box } from '@mui/material';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';

const Feed = () => {
  const { loading, searchResults} = useContext(ThemeContext);

   useEffect(()=> {
    document.getElementById("root").classList.remove("custom-h");
   }, []);
  return (
    <Box className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
      <Box className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <Box className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
        {!loading && searchResults.length && 
                searchResults.map((item) => {
                    if (item.type !== "video") return false;
                    return (
                        <VideoCard
                            key={item?.video?.videoId}
                            video={item?.video}
                        />
                    );
                })}
            
        </Box>
      </Box>
    </Box>
  )
}

export default Feed