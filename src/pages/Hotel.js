import React from 'react';
import Location from '../components/Location';
import styleHotel from '../style/styleHotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faSharp } from '@fortawesome/free-solid-svg-icons';
import Favorites from '../components/Favorites';
import Lists from '../components/Lists';

const Hotel = () => {
    return (
        <div className='bgHotel'>
            <div className='flexHeader'>
                <h1 className='bigTextHotel'>Simple Hotel Check</h1>
                <div className='flexExit'>
                    <h1 className='exitText'>Выйти</h1>
                    <FontAwesomeIcon className='exitIcon' size="lg" icon={faArrowRightFromBracket} color="#41522E" />
                </div>
            </div>
            <div className='rowComponents'>
                <div className='columnComponent'>
                    <Location />
                    <Favorites />
                </div>
                    <Lists />
            </div>
        </div>
    );
};

export default Hotel;