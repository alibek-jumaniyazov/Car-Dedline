import React from 'react'
import Header from '../Components/home-header/Header'

import MainDates from '../Components/home-main/MainDates'
import CarMap from '../Components/home-main/CarMap'

export default function Home() {
  return (
    <div className='Home'>
      <div className="home-header">
        <Header />
        <div className="header-redyone">
          <div className="header-redyone__title">
            <span>ТРЕК-ДНИ</span>
            <p>C READYONE</p>
          </div>
          <div className="header-redyone__desc">
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="59" viewBox="0 0 31 59" fill="none">
              <line x1="1.53111" y1="58.6961" x2="13.5311" y2="0.696095" stroke="white" stroke-width="3" />
              <line x1="9.53111" y1="58.6961" x2="21.5311" y2="0.696095" stroke="#8E8E8E" stroke-width="3" />
              <line x1="17.5311" y1="58.6961" x2="29.5311" y2="0.696095" stroke="#8E8E8E" stroke-width="3" />
            </svg>
            <p>Не просто аренда спорткара, а настоящее
              погружение в мир автоспорта
            </p>
          </div>
          <button className="header-redyone__btn">ЗАКАЗАТЬ</button>
        </div>
      </div>
      <div className="mouse-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M45 22.5C45 14.2157 38.2843 7.5 30 7.5C21.7157 7.5 15 14.2157 15 22.5V37.5C15 45.7843 21.7157 52.5 30 52.5C38.2843 52.5 45 45.7843 45 37.5V22.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30 17.5V27.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="home-main">
        <MainDates/>
        <CarMap/> 
      </div>
    </div>
  )
}
