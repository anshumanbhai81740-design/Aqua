import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const navLinks = [
  { label: 'Home', section: 'hero' },
  { label: 'Products', section: 'products' },
  { label: 'Services', section: 'services' },
  { label: 'About Us', section: 'about' },
  { label: 'Contact', section: 'contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const element = document.getElementById('products');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: trigger ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: trigger ? 'none' : '1px solid rgba(0,119,182,0.08)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: { xs: 2, md: 3 }, py: 1 }}>
          {/* Logo */}
          <Box onClick={() => scrollToSection('hero')} sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', mr: 4, cursor: 'pointer' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,119,182,0.3)',
              }}
            >
              {/* <WaterDropIcon sx={{ color: '#fff', fontSize: 22 }} /> */}
         <img src="/logo.jpeg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: 'primary.dark', fontWeight: 800, lineHeight: 1.1, fontSize: '1.1rem' }}>
                Aqua Machines
              </Typography>
              <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.6rem' }}>
                Solutions
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, flex: 1 }}>
            {navLinks.map(link => (
              <Button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(0,119,182,0.06)',
                    transform: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
            {searchOpen ? (
              <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{ display: 'flex', alignItems: 'center', px: 2, py: 0.5, borderRadius: 50, border: '2px solid', borderColor: 'primary.main', boxShadow: 'none' }}
              >
                <InputBase
                  placeholder="Search purifiers..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                  sx={{ fontSize: '0.875rem', width: 200 }}
                />
                <IconButton type="submit" size="small" sx={{ color: 'primary.main', p: 0.5 }}>
                  <SearchIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => setSearchOpen(false)} sx={{ p: 0.5 }}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Paper>
            ) : (
              <IconButton onClick={() => setSearchOpen(true)} sx={{ color: 'text.primary' }}>
                <SearchIcon />
              </IconButton>
            )}

            <Button
              component="a"
              href="tel:+919125669725"
              variant="contained"
              size="small"
              startIcon={<PhoneIcon />}
              sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }}
            >
              Call Now
            </Button>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, pb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 32, height: 32, background: 'linear-gradient(135deg, #0077B6, #00B4D8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <WaterDropIcon sx={{ color: '#fff', fontSize: 18 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.dark', fontSize: '1rem' }}>Aqua Machines</Typography>
            </Box>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navLinks.map(link => (
              <ListItem key={link.section} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(link.section);
                    setMobileOpen(false);
                  }}
                  sx={{ py: 1.5, px: 3, '&:hover': { bgcolor: 'rgba(0,119,182,0.06)', color: 'primary.main' } }}
                >
                  <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 3 }}>
            <Button
              fullWidth
              variant="contained"
              component="a"
              href="tel:+919125669725"
              startIcon={<PhoneIcon />}
              sx={{ mb: 2 }}
            >
               91256 69725
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => {
                scrollToSection('contact');
                setMobileOpen(false);
              }}
            >
              Enquire Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}