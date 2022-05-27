import { Box, Button } from "@mui/material";
import React from 'react';

interface Props{
  list:string[],
  handleCloseNavMenu:()=>void,
}

const HeaderNavListPc:React.FC<Props> = ({list, handleCloseNavMenu})=>{
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml:10 }}>
      {list.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{
            mr: 3,
            ml: 3,
            my: 2,
            color: 'white',
            display: 'block',
            fontSize: 25
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default HeaderNavListPc