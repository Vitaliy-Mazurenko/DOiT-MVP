import './header.css';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



export default function Header() {


	return (
		<AppBar position="static" className="header">
			<Toolbar component="div" sx={{ flexGrow: 1, paddingTop: '24px' }}>
			<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DOiT-MVP
          </Typography>				
			</Toolbar>
		</AppBar>
 
	);
}
