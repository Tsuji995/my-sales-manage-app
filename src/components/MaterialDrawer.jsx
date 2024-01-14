import React from 'react'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

const menu = [
    { title: 'ホーム', href: '/', icon: HomeIcon},
    { title: '請求書', href: '/Invoice', icon: RequestPageIcon },
    { title: '売上管理', href: '/OrganizationSales', icon: BabyChangingStationIcon}
  ]

function MaterialDrawer() {

  const [show, setShow] = useState(false);

  const handleDraw = () => setShow(!show);

  return (
    <>
    <Button onClick={handleDraw}><AppsIcon /></Button>
    <Drawer anchor='left' open={show}>
        <Box sx={{ height: '100vh' }} onClick={handleDraw}>
            <List>
                {menu.map(obj => {
                    const Icon = obj.icon;
                    return (
                        <ListItem key={obj.title}>
                            <ListItemButton href={obj.href}>
                                <ListItemIcon><Icon /></ListItemIcon>
                                <ListItemText primary={obj.title} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>

    </Drawer>
    </>
    
  )
}

export default MaterialDrawer