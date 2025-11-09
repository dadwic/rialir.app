import React from 'react';
import { useTranslations } from 'next-intl';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LanguageIcon from '@mui/icons-material/Language';
import LiraIcon from '@mui/icons-material/CurrencyLira';
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined';
import PolicyIcon from '@mui/icons-material/LocalPoliceOutlined';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';

const iOS =
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Drawer({ dir, open, onClose, onOpen, onHide }) {
  const t = useTranslations('Menu');
  return (
    <SwipeableDrawer
      dir={dir}
      anchor="left"
      open={open}
      disableDiscovery={iOS}
      disableBackdropTransition={!iOS}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Stack
        height="100%"
        role="presentation"
        justifyContent="space-between"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton href="https://www.rialir.com/" target="_blank">
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={t('rialir')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton href="https://www.rialir.com/lir/" target="_blank">
              <ListItemIcon>
                <LiraIcon />
              </ListItemIcon>
              <ListItemText primary={t('lir')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton target="_blank" href="https://app.rialir.com/">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={t('account')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton target="_blank" href="https://www.rialir.com/faq/">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary={t('faq')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/privacy-policy/"
            >
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary={t('privacy-policy')} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              target="_blank"
              href="https://www.rialir.com/contact/"
            >
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <ListItemText primary={t('contact')} />
            </ListItemButton>
          </ListItem>
        </List>
        <Button fullWidth onClick={onHide}>
          Hide
        </Button>
      </Stack>
    </SwipeableDrawer>
  );
}
