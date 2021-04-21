import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../MenuItem/MenuItem.component';
import styled from 'styled-components';
import { FavoriteSVG } from '../../../svg/Favorite';
import { HomeSVG } from '../../../svg/Home';
import { useGlobal } from '../../../providers/Global.provider';

const itemIds = [
    {
        id:0,
        name: 'Home',
        icon: <HomeSVG/>,
        location: '/',
        private: false
    },
    {
        id:1,
        name: 'Favorites',
        icon: <FavoriteSVG filled={true} heightAndWidth={32}/>,
        location: '/favorites',
        private: true
    }
];

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const UnorderedList = styled(motion.ul)`
`;

export const MenuList = ({setIsOpen}) => {

    const { user } = useGlobal().state;
    
    return <UnorderedList variants={variants}>
        {itemIds.map(item => {
            if(item.private){
                if(user.authenticated){
                    return (<MenuItem item={item} key={item.id}/>)
                }
            }else{
                return (<MenuItem item={item} key={item.id}/>)
            }
            return (<></>)
        })}
    </UnorderedList>
}
