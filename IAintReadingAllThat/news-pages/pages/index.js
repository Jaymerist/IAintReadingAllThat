import { COUNTRY_LIST } from '../countryList';
import { CATEGORY_LIST } from '../categoryList';
import { useState } from 'react';

import Head from 'next/head'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Home() {
  const [countryData, setCountryData] = useState()
  const [categoryData, setCategoryData] = useState()
  const [keyWordData, setKeyWordData] = useState()

  const handleCountryChange = (event) => {
    setCountryData(event.target.value)
  }

  return <div>
    <Head>
      <title>"I Aint Reading All that"</title>
      <meta name="description" content="I Ain't reading all that" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <Container component="main">
      <Box sx={{
        width: "100%",
        backgroundColor: "#607196"
        }}>
        <Typography sx={{}}>I won't, but who will?</Typography>
      </Box>
      
      <FormControl fullWidth>
        <InputLabel id="country-label">Country (optional)</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={countryData}
            label="Country"
            onChange={handleCountryChange}
          >
            {COUNTRY_LIST.map((country, index) => {
              return <MenuItem key={index} value={country.code}>{country.name}</MenuItem>
            })}
          </Select>
      </FormControl>
      <Grid item xs={12} sm={12}>
          <FormControl>
            <FormLabel id="category">Category</FormLabel>
            <RadioGroup
              row
              aria-labelledby="category"
              name="category"
              value={categoryData}
              onChange={(event) => {
                setCategoryData(event.target.value)
              }}
            >
              {CATEGORY_LIST.map((category, index) => {
                return <FormControlLabel key={index} value={category.category} control={<Radio />} label={category.category} />
              })}
            </RadioGroup>
         </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            type="submit"
          >
            Add Category
          </Button>
        </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="keyword-field"
                  label="Keyword (optional)"
                  variant="standard"
                  sx={{width: '100%'}}
                  onChange = {(event) => {
                    setKeyWordData(event.target.value)}}
                  value={keyWordData}
                />
              </Grid>
        </Grid>
    </Container>
  </div>
}
