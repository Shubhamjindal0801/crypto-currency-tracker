import React from 'react'
import './styles.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BackToTop() {
    let myBtn = document.getElementById('my-btn')

    window.onscroll = function(){
        scrollFunction()
    }
    function scrollFunction(){
        if(document.body.scrollTop>250 ||
            document.documentElement.scrollTop >250){
                myBtn.style.display='flex'
            }
            else{
                myBtn.style.display='none'
            }
    }
    function topFunction(){
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0
    }
    return (
        <div className='top-btn' id='my-btn' onClick={()=>topFunction()}><ArrowUpwardRoundedIcon style={{color:'var(--blue)'}}/></div>
    )
}

export default BackToTop
