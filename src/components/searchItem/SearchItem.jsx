import "./searchitem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/249201838.webp?k=8749973d37711a7fbfd478a195a6eac0affae6216f86ffd8514c846216ccfd0d&o=&s=1"
                alt=""
                className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Lavie Villa</h1>
                <span className="siDistance">2.2 km from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire villa • 1 bedroom • 1 bathroom • 50m²
1 king bed</span>
                <span className="siCancelOp">FREE cancellation • No prepayment needed</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem