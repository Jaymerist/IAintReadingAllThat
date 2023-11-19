import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'


export default function NavBar(props) {
  return <AppBar position="static">
    <Toolbar>
      <Link href="/openAiTest/openAiTest">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Testing AI
      </Typography></Link>    
    </Toolbar>
  </AppBar>
}