import React, { useState } from 'react'
import './styles.css'
import { motion } from "framer-motion";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link } from 'react-router-dom';
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { IconButton } from "@mui/material";

function Grid({ coin, delay, isWatchlistPage }) {
    const [added, setAdded] = useState(hasBeenAdded(coin.id));
    return (
        <Link to={`/coin/${coin.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"
                    }`}
            >
                <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-container-red'}`} >
                    <div className='info-flex'>
                        <img src={coin.image} alt='Coin Logo' className='coin-logo' />
                        <div className='name-col'>
                            <p className='coin-symbol'>{coin.symbol}</p>
                            <p className='coin-name'>{coin.name}</p>
                        </div>
                        <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            if (added) {
                                removeFromWatchlist(coin.id)
                                setAdded(false)
                            }
                            else {
                                addToWatchlist(coin.id)
                                setAdded(true)
                            }
                        }}
                    >
                        {added ? (
                            <StarRoundedIcon
                                className={`${coin.price_change_percentage_24h < 0 ? "watchlist-icon-red" : "watchlist-icon-green"}`}
                                sx={{ fontSize: "2rem !important" }}
                            />
                        ) : (
                            <StarBorderRoundedIcon
                                className={`${coin.price_change_percentage_24h < 0 ? "watchlist-icon-red" : "watchlist-icon-green"}`}
                                sx={{ fontSize: "2rem !important" }}
                            />
                        )}
                    </IconButton>
                    </div>
                    
                    {coin.price_change_percentage_24h > 0 ?
                        <div className='chip-flex'>
                            <div className='price-chip'>
                                {(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                            <div className='trending-icon '><TrendingUpRoundedIcon /></div>
                        </div>
                        :
                        <div className='chip-flex'>
                            <div className='price-chip chip-red'>
                                {(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                            <div className='trending-icon chip-red'><TrendingDownRoundedIcon /></div>
                        </div>
                    }
                    <div className='curr-price' style={{ color: coin.price_change_percentage_24h > 0 ? 'var(--green)' : 'var(--red)' }}>
                        ${coin.current_price.toLocaleString()}
                    </div>
                    <div className='total-volume'>
                        Total Volume : ${coin.total_volume.toLocaleString()}
                    </div>
                    <div className='market-capacity'>
                        Market Cap : ${coin.market_cap.toLocaleString()}
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
export default Grid;