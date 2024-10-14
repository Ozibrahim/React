import React, { useState } from 'react'
import "../css/Header.css"
import { IoBasketOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';





function Header() {

    const dispatch = useDispatch();
    const [theme, setTheme] = useState(true);
    const navigate = useNavigate();
    const {products} = useSelector((store)=>store.basket)

    const changeTheme = () => {
        const root = document.getElementById("root");

        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";

        }
        else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";

        }
        setTheme(!theme);


    }


    return (
        <div className='flex-space-between'>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>İbrahim A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Ara' />
                <div>

                    {theme ? <CiLight className='icon' onClick={changeTheme} /> : <MdNightlightRound className='icon' onClick={changeTheme} />}

                    <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <IoBasketOutline className='icon' />
                    </Badge>

                </div>
            </div>


        </div>
    )
}

export default Header