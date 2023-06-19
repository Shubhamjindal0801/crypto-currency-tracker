import React, { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";

function Watchlist() {
    const coins = JSON.parse(localStorage.getItem("watchlist"));
    const [myWatchlist, setMyWatchlist] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setIsLoading(true);
        const allCoins = await get100Coins();
        if (coins) {
            setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
        }
        // else{
        //   setMyWatchlist([])
        // }
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length == 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
        </div>
    )
}

export default Watchlist