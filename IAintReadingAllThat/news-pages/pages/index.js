import Head from 'next/head'
import Box from '@mui/material/Box';
import NavBar from '@components/NavBar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function Home() {

  return (
    <div>
    <Head>
      <title>I Ain't Reading All that</title>
      <meta name="description" content="I Ain't reading all that" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <body>
        <Container component="main">
            <header>
              <h1>I ain't reading allat.</h1>        
            </header>
            <main>
                <Box>
                    <h2>Title of Article</h2>
                    <p>Author Name</p>
                    <p>Summary: i'm just gonna start saying stuff, like straight up yappin, like a chatterbox from Yapperville.</p>
                    <Button></Button>
                </Box>
            </main>
        </Container>
      </body>
  </div>
  )
}
