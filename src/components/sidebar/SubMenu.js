import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// import { isHtmlElement } from 'react-router-dom/dist/dom'
import styled from 'styled-components'

import './Sliderbar.scss'

const SidebarLink = styled(Link)`
`;

const DropdownLink = styled(Link)`

`

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav} className="nav__link" >
                {item.icon}
                <span className='nav__label'>{item.title}</span>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index} className="nav__sublink">
                        {item.title}
                    </DropdownLink>
                )
            })}
        </>

    )
}

export default SubMenu