/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import './header.css';
import logo from '../../assets/image/logo.png';

const url = "http://localhost:8797/hotels";
function Header() {
    // const [hotel, setHotel] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error(error))
    }, []);
    // console.log('test1');
    // console.log(hotel);
    return (
        <div className='header'>
            <div className = "logo-area">
                <img src = {logo} className = "logo-icon"/>
                <span className='logo'>Booking</span>
            </div>
            <div style={{display: 'flex'}}>
                <div className='button'>Sign in</div>
                <div className='button'>Sign up</div>
            </div>
        </div>
    );
}

export default Header;
