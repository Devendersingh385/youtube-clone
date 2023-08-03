import React from "react";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const categories = [
    { name: "New", icon: <HomeIcon />, type: "home" },
    { name: "Trending", icon: <WhatshotIcon />, type: "category" },
    { name: "Music", icon: <MusicNoteIcon />, type: "category" },
    { name: "Films", icon: <MovieIcon />, type: "category" },
    { name: "Live", icon: <LiveTvIcon />, type: "category" },
    { name: "Gaming", icon: <SportsEsportsIcon />, type: "category" },
    { name: "News", icon: <NewspaperIcon />, type: "category" },
    { name: "Sports", icon: <EmojiEventsIcon />, type: "category" },
    { name: "Learning", icon: <LightbulbIcon />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <DryCleaningIcon />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <SettingsIcon />, type: "menu" },
    { name: "Report History", icon: <FlagIcon />, type: "menu" },
    { name: "Help", icon: <HelpOutlineIcon />, type: "menu" },
    { name: "Send feedback", icon: <FeedbackIcon />, type: "menu" },
];