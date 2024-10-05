import './Header.css'

export default function Header() {
    return (
        <>
            <div className='div1'>
                <a href="">
                <img src="./Hero image.png" alt="" width={"430px"} />
                </a>
            </div>
            <div className='div2'>
                <h1 className='h1'>
                    Explore, Buy and <br /> Sell the <span>Best <br />  NFTs!</span>
                </h1>
                <div className='btn-div'>
                    <button className='btn1'>Explore</button>
                    <button className='btn2'>Create</button>
                </div>
            </div>
            <div className='div3'>
                <h1 className='k'>32k+</h1>
                <h1 className='k'>20k+</h1>
                <h1 className='k'>12k+</h1>
            </div>
            <div className='p'>
                <p>Artworks</p>
                <p>Creators</p>
                <p>Artworks</p>
            </div>
        </>
    )
}