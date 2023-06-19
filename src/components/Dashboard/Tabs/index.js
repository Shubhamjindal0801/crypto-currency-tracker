import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Grid from '../Grid'
import List from '../List';
import './styles.css';


export default function TabsComponent({coins,isWatchlistPage,setSearch}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color:'var(--white)',
    width:'50vw',
    fontSize:'1.2rem',
    fontWeight:600,
    fontFamily:'Inter',
    textTransformation:'capitalizer'
  }
  const theme = createTheme({
    palette:{
      primary:{
        main:"#3a80e9"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList
          onChange={handleChange}
          variant='fullWidth'
          >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        <TabPanel value="grid" className="tabPanel">
        <div className='grid-flex'>
        {coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                </div>
              ) : (
                coins?.map((coin, i) => (
                  <Grid
                    coin={coin}
                    key={i}
                    delay={((i + 5) % 5) * 0.1}
                    isWatchlistPage={isWatchlistPage}
                  />
                ))
              )}
          </div>
        </TabPanel>
        <TabPanel value="list" className="tabPanel">
          <table className='list-table'>
          {coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                  
                </div>
              ) : (
                coins?.map((coin, i) => (
                  <List
                    coin={coin}
                    key={i}
                    delay={(i % 10) * 0.1}
                    isWatchlistPage={isWatchlistPage}
                  />
                ))
              )}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}