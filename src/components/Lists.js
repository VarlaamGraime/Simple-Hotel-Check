import React, { useRef } from 'react';
import styleLists from '../style/styleLists.css'
const Lists = () => {
    const images = [
        "https://i.ibb.co/3yFR8vJ/Rectangle-28.png", 
        "https://i.ibb.co/G06Ycsg/Rectangle-24.png", 
        "https://i.ibb.co/G06Ycsg/Rectangle-24.png", 
        "https://i.ibb.co/kyvZkXy/Rectangle-23.png"  
    ]
 


    return (
        <div className='cardLists'>
            <div className='flexHead'>
                <div className='blockLists'>
                        <h1 className='textLists'>Отели </h1>
                        <h1 className='textLists'>
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </h1>
                        <h1 className='textLists'>Москва </h1>
                </div>
                    <h2 className='textDateLists'>07 июля 2020</h2>  
            </div>
        </div>
    );
};

export default Lists;