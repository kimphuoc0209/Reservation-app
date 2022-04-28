import React from 'react'
import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688956.webp?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o="
                    alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Vung Tau</h1>
                    <h2>1824 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
                    alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Da Lat</h1>
                    <h2>2145 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688844.webp?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
                    alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Da Nang</h1>
                    <h2>2512 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://t-cf.bstatic.com/xdata/images/city/square250/688893.webp?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
                    alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Ho Chi Minh City</h1>
                    <h2>5640 properties</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Featured
