import './Nav.css'

export default function Navbar() {
  return (
    <>
      <div className="div">
        <div className='div-img'>
          <img src="image.png" alt="" />
        </div>
        <div className='div-a'>
          <a href="">Explore</a>
          <a href="">Creators</a>
          <a href="">Community</a>
        </div>
        <div className='btn'>
          <button className='btn'>Connect Wallet</button>
        </div>
      </div>
    </>
  )
}