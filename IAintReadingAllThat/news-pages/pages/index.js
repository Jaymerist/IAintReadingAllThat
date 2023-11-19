import { COUNTRY_LIST } from '../countryList';
import { useState } from 'react';

import Head from 'next/head'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';

export default function Home() {
  const [countryData, setCountryData] = useState()

  const handleCountryChange = (event) => {
    setCountryData(event.target.value)
  }


  return <div>
    {console.log(COUNTRY_LIST)}
    <Head>
      <title>I Ain't Reading All that</title>
      <meta name="description" content="I Ain't reading all that" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container component="main" sx={{padding: "1rem"}}>
      <FormControl fullWidth>
        <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={countryData}
            label="Country"
            onChange={handleCountryChange}
          >
            {COUNTRY_LIST.map((country, index) => {
              return <MenuItem value={country.code}>{country.name}</MenuItem>
            })}
          </Select>
      </FormControl>
    </Container>
  </div>
}
