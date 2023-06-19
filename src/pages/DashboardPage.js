import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import TabsComponent from '../components/Dashboard/Tabs'
// import axios from 'axios'
import Search from '../components/Dashboard/Search'
import PaginationComponent from '../components/Dashboard/Pagination'
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
import { get100Coins } from '../functions/get100Coins'

function DashboardPage() {
    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
    const [coins, setCoins] = useState([])
    const [pageCoins, setPageCoins] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    const handlePageChange = (event, value) => {
        setPage(value);
        var previousIndex = (value - 1) * 10
        setPageCoins(coins.slice(previousIndex, previousIndex + 10))
    };

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }
    var filterdCoins = coins.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const myCoins = await get100Coins()
        if (myCoins) {
            setCoins(myCoins)
            setPageCoins(myCoins.slice(0, 10))
            setIsLoading(false)
        }
    }

    return (
        <>
            <Header />
            <BackToTop />
            {isLoading ? <Loader /> : < div styles={{ minHeight: "90vh" }}>

                <Search search={search} onSearchChange={onSearchChange} />
                <TabsComponent
                coins={search ? filterdCoins : pageCoins}
                setSearch={setSearch}
                />
                {
                    !search && (
                        <PaginationComponent page={page} handlePageChange={handlePageChange} />
                    )
                }

            </div >}
            <Footer />
            </>
    )
}

export default DashboardPage