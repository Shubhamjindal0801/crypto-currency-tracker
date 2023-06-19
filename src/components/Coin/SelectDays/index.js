import React from 'react';
import './styles.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectDays({days, handleDaysChange,noPTag}) {

    return (
        <div className='select-days'>
            {!noPTag && <p>Price Change In</p>}
            <Select
                value={days}
                onChange={handleDaysChange}
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
                <MenuItem value={7}>7 Days</MenuItem>
                <MenuItem value={30}>30 Days</MenuItem>
                <MenuItem value={45}>45 Days</MenuItem>
                <MenuItem value={60}>60 Days</MenuItem>
                <MenuItem value={90}>90 Days</MenuItem>
                <MenuItem value={120}>120 Days</MenuItem>
            </Select>
        </div>
    );
}