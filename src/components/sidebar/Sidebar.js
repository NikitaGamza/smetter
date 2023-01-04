import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as CgIcons from 'react-icons/cg'
import styled from 'styled-components'

import './Sliderbar.scss'
import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu'

import Logo from './logo'


const NavIcon = styled(Link)`
    margin-left: ${({slidebar}) => (slidebar ? '13.5rem' : '1rem')};  
`

const SlidebarWrap = styled.div`
    width: 100%
`
const SlidebarNav = styled.nav`
    left: ${({slidebar}) => (slidebar ? '0' : '-100%')};
    transition: 300ms;
    position: ${({slidebar}) => (slidebar ? 'static' : 'fixed')};
    top: 0;
`

const NavSnippet = styled.div`
    display: ${({slidebar}) => (slidebar ? 'none' : 'block')};
`
// fixed static

const Sidebar = () => {
    const [slidebar, setSlidebar] = useState(false);
    const showSlidebar = () => setSlidebar(!slidebar);

    return (
        <>
            <NavSnippet className='nav' slidebar={slidebar}>
                <NavIcon to="#" className='nav__mover'>
                    <CgIcons.CgPushChevronRight onClick={showSlidebar} />
                </NavIcon>
            </NavSnippet>
            <SlidebarNav className='nav__slidebar' slidebar={slidebar}>
                <Logo />
                <SlidebarWrap>
                    <NavIcon to="#" className='nav__mover' slidebar={slidebar}>
                        <CgIcons.CgPushChevronLeft onClick={showSlidebar}  />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return (<SubMenu item={item} key={index} />)
                    })}
                </SlidebarWrap>
            </SlidebarNav>
        </>
    )
}

export default Sidebar
