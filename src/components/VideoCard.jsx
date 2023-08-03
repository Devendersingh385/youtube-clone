/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { Box, Stack } from '@mui/material';
import VideoLength from '../shared/videoLength';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <Stack className='flex flex-col mb-8'>
        <Box className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
            <img 
            src={video?.thumbnails[0]?.url} alt='' 
            className="h-full w-full object-cover" 
            />
            {video?.lengthSeconds && (
              <VideoLength  time={video?.lengthSeconds}/>
            )}
        </Box>  
        <Box className='flex text-white mt-3'>
              <Stack className="flex items-start">
                <Box className="flex h-9 w-9 rounded-full overflow-hidden">
                    <img 
                      className='h-full w-full object-cover'
                      src={video?.author?.avatar[0]?.url}
                    />
                </Box>
              </Stack>
        </Box>
      </Stack>
    </Link>
  )
}

export default VideoCard