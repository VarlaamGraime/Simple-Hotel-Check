import React from 'react';
import styleLocation from '../style/styleLocation.css'
import calendarIcon1 from '../assets/calendar-today.svg'

const Location = () => {
    return (
        <div className='cardLocation'>
            <div>
                <h4 className='textLocation'>Локация</h4>
                    <input 
                    placeholder='Москва'
                    className='inputLocation'/>
                
                <h4 className='textLocation paddingStart'>Дата заселения</h4>
                    <input 
                    placeholder='07.07.2020 '   
                    className='inputLocation' />
                <svg className='svgCalen' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="black" fill-opacity="0.48"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM2 15V4H16V15C16 15.5523 15.5523 16 15 16H3C2.44772 16 2 15.5523 2 15Z" fill="black" fill-opacity="0.48"/>
                </svg>

                
                <h4 className='textLocation paddingStart'>Количество дней</h4>
                    <input 
                    className='inputLocation'/>
            </div>
            <div className='blockButtonLocation'>
                <button className='buttonLocation'>Найти</button>
            </div>
        </div>
    );
};

export default Location;