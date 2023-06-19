import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { coinObject } from '../functions/coinObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrice } from '../functions/getCoinPrice';
import LineChart from '../components/Coin/LineChart'
import BackToTop from '../components/Common/BackToTop'
// import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import PriceToggle from '../components/Coin/PriceType';
import Footer from "../components/Common/Footer";

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [coinData, setCoinData] = useState()
    const [days, setDays] = useState(30)
    const [chartData, setChartData] = useState({})
    const [priceType, setPriceType] = useState("prices");

    useEffect(() => {
        getData();
    }, [id])

    const handlePriceTypeChange = async (event) => {
        setIsLoading(true)
        setPriceType(event.target.value);
        const prices = await getCoinPrice(id, days, event.target.value)
        if (prices.length > 0) {
            settingChartData(setChartData, prices, coinData)
        }
        setIsLoading(false)
    };

    const handleDaysChange = async (event) => {
        setIsLoading(true)
        setDays(event.target.value)
        const prices = await getCoinPrice(id, event.target.value, priceType)
        if (prices.length > 0) {
            settingChartData(setChartData, prices, coinData)
            setIsLoading(false)
        }
    }


    


    async function getData() {
        setIsLoading(true);
        const data = await getCoinData(id);
        if (data) {
            // setDays(value);
            coinObject(setCoinData, data)
            const prices = await getCoinPrice(id, days, priceType)
            if (prices.length > 0) {
                settingChartData(setChartData, prices,data)
                setIsLoading(false)
            }
        }
    }
    return (
        <div>
            <Header />
            <BackToTop />
            {isLoading || !coinData?.id || !chartData ? <Loader /> : <>
                <div className='grey-wrapper' style={{ padding: '0rem 1rem' }}>
                    <List coin={coinData} delay={0.1} />
                </div>
                <div className='grey-wrapper'>
                    <SelectDays days={days} handleDaysChange={handleDaysChange} />
                    <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                    <LineChart chartData={chartData} priceType={priceType} />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </>
            }
            <Footer />
        </div>
    )
}


export default CoinPage
