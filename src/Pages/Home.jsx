import React from 'react'
import Header from '../Components/home-header/Header'
import user from '../images/userData.png'

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
        <div className="home-main__calendar">
          <div className="main-calendar__title">
            <span>ВЫБЕРИ ДАТУ</span>
            <p>ДЛЯ ПОЕЗДКИ</p>
          </div>
          <div className="main-calendar__ui">
            <div className="main-calendar__date">
              <div className="main-date">
                <p className='date'>31<span>мая</span></p>
                <p className="main-date__week">вторник</p>
                <div className="main-date_icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_608_363" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_608_363)">
                      <path d="M10 22L0 12L10 2L11.775 3.775L3.55 12L11.775 20.225L10 22Z" fill="#8E8E8E" />
                    </g>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_608_360" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_608_360)">
                      <path d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2L18.025 12L8.025 22Z" fill="#DE131E" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="user-finally">
                <div className="user-info">
                  <img src={user} alt="" />
                  <div className="user-finally__text">
                    <p>Яркко
                      Миеттинен</p>
                    <span>инструктор</span>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="391" height="301" viewBox="0 0 391 301" fill="none">
                  <path d="M2.00993 292.598C2.1766 288.931 4.63901 272.917 9.00993 261.098C11.8577 253.397 14.0655 249.298 18.0099 242.098C23.1616 232.693 27.2274 228.128 33.0099 219.098C39.3494 209.197 46.6099 196.398 49.0099 193.598C51.4099 190.798 54.9099 189.998 56.5099 175.598C58.1099 161.198 73.8432 152.931 81.5099 150.598L90.0099 140.598C98.3432 130.931 115.51 109.598 115.51 109.598C115.51 109.598 124.677 99.5977 129.01 95.5977C133.343 91.5977 183.01 60.0977 183.01 60.0977L229.51 29.5977L249.51 16.0977C257.11 7.69766 262.01 8.26432 263.51 9.59766C271.91 17.5977 281.343 16.2643 285.01 14.5977C287.843 13.2643 294.51 9.49764 298.51 5.09764C302.51 0.697645 308.843 1.93098 311.51 3.09764L331.01 18.5976L360.01 40.5976C370.41 55.3976 358.01 56.0976 350.51 54.5976L333.01 40.0976C323.41 34.0976 308.343 41.2643 302.01 45.5976C287.843 53.931 259.11 70.6976 257.51 71.0976C255.51 71.5976 235.51 84.0976 231.51 88.0976C228.31 91.2976 230.01 107.098 230.01 107.098C230.01 107.098 236.01 124.098 240.51 130.098C245.01 136.098 256.51 139.764 263.01 139.598L314.51 140.098C330.51 140.098 334.51 148.098 334.51 152.098C334.51 152.098 334.51 165.598 335.51 173.098C336.51 180.598 360.343 187.931 369.51 187.598C381.91 187.598 387.677 195.598 389.01 199.598C390.21 207.198 385.843 218.098 383.51 222.598C377.11 232.598 363.51 235.764 357.51 236.098C333.51 238.098 320.01 229.098 316.01 227.598C312.81 226.398 291.01 209.431 280.51 201.098C276.01 197.431 264.91 187.998 256.51 179.598C248.11 171.198 232.343 168.431 225.51 168.098C217.677 168.264 199.01 168.098 199.01 168.098C199.01 168.098 186.01 169.098 176.51 177.098C168.91 183.498 157.677 193.098 153.01 197.098C148.343 201.098 99.5099 226.098 99.5099 226.098C94.7099 228.898 93.1766 225.264 93.0099 223.098C92.2099 210.298 83.6766 216.098 79.5099 220.598C79.5099 220.598 50.0099 251.598 48.5099 253.598C47.0099 255.598 21.3099 290.098 12.5099 296.098C3.70993 302.098 1.84326 296.264 2.00993 292.598Z" stroke="white" stroke-opacity="0.5" stroke-width="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
