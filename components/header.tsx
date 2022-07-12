import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React, { useState } from 'react';
import HeaderNavListPc from "./headerNavListPc";
import HeaderIconMenu from "./headerIconMenu";

const Header:React.FC=()=>{
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const list:string[]=["ABOUT","FAN ART","HISTORY","STREAM","SHORTS","CONTACT"]
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = ():void => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{zIndex:"tooltip",backgroundColor:"rgba(51, 60, 94,0.7)", position:"fixed"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            熱田アメノ
          </Typography>
          <HeaderIconMenu
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            list={list}
            anchorElNav={anchorElNav}
          />
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            熱田アメノ
          </Typography>
          <HeaderNavListPc
            list={list}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;