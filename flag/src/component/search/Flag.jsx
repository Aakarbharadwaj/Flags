import React, { useState } from 'react'
import './Flag.css'
import datas from './api.js';
const Flag = () => {
    const [data, setdata] = useState("");
    const [country, setcountry] = useState('https://flagcdn.com/160x120/in.png');
    const handleData = (e) => {
        setdata(e.target.value)
    }
    const handleCountry = () => {
        for (let i in datas) {
            if (datas[i] === data) {
                setcountry(`https://flagcdn.com/160x120/${i}.png`);
                setdata('');
            }

        }
        // let value = await fetch('https://flagcdn.com/en/codes.json');
        // let final = await value.json();
        // console.log(final);
    }
    return (
        <div className='container'>
            <div className='search'>
                <input
                    onChange={handleData}
                    type='text'
                    placeholder='Enter Country name'
                    value={data}
                />
                <button onClick={handleCountry}>submit</button>
            </div>
            <div className='image'>
                <img src={country} />
            </div>
        </div>
    )
}

export default Flag