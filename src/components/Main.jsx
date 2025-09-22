import './Main.css';

function Main() {

  return (
    <>
      <div className="Main-container">
        <div className="img-and-title-box">
          <img className='festival-title-img' src="" alt="대문" />
          <p className='festival-list'>축제 리스트</p>
        </div>
        <div className="img-and-title-box">
          <img src="stay-title-img" alt="대문" />
          <p className='stay-list'>숙소 리스트</p>
        </div>
      </div>
    </>
  )
}

export default Main;