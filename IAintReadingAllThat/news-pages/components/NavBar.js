import Link from 'next/link'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'


export default function NavBar(props) {
  return <AppBar position="static" sx={{backgroundColor: "#313e5a"}} >
    <Toolbar>
      <Link href="/openAiTest/openAiTest">
        <Typography variant="h6" component="div" >
          Testing AI
      </Typography></Link>    
    </Toolbar>
  </AppBar>
}