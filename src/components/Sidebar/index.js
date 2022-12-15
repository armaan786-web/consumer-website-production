import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                    Home
                    </SidebarLink>
                    <SidebarLink to="/about-us">
                    About us
                    </SidebarLink>
                    <SidebarLink to="/how-it-works">
                    How it works
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute primary="true" to="/how-it-works">
                    Become a Partner
                    </SidebarRoute>
                    {/* <SidebarRoute to="/">
                    Login / Sign up
                    </SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
