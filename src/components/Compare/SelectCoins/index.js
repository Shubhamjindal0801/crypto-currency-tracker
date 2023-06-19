import React, { useEffect, useState } from 'react';
import './styles.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {get100Coins} from '../../../functions/get100Coins'


function SelectCoins({crypto1,crypto2,handleCoinChange}) {
    const [allCoins,setAllCoins] = useState([])
    

    

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        const myCoins = await get100Coins();
        if(myCoins){
            setAllCoins(myCoins)
        }
    }
    return (
        <div className='coins-flex'>
            <p>Crypto 1</p>
            <Select
                value={crypto1}
                onChange={(event)=>handleCoinChange(event,false)}
                label='Crypto 1'
                sx={{
                    height: '2.5rem',
                    color: 'var(--white)',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--white)',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'var(--white)',
                    },
                    '&:hover': {
                        '&& fieldset': {
                            borderColor: '#3a80e9',
                        }
                    }
                }}
            >
                {allCoins.filter((item)=>item.id != crypto2).map((coin,i)=>(
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>
            <p>Crypto 2</p>
            <Select
                value={crypto2}
                onChange={(event)=>handleCoinChange(event,true)}
                label='Crypto 2'
                sx={{
                    height: '2.5rem',
                    color: 'var(--white)',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--white)',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'var(--white)',
                    },
                    '&:hover': {
                        '&& fieldset': {
                            borderColor: '#3a80e9',
                        }
                    }
                }}
            >
                {allCoins.filter((item)=>item.id != crypto1).map((coin,i)=>(
                    <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default SelectCoins