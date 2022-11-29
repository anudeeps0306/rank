import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Card'


const Body = () => {
    const [data, setData] = useState(null);

    const request = async () => {
        await axios.get('https://codeforces.com/api/user.info?handles=Prudvi_raj')
            .then(response => {
            setData(response.data.result[0]);
            console.log(response.data.result[0]);
        })
    }

    
    
    return (
        <div className="main_body">
            <button onClick={request}>Request</button>
            {data != null ? <Card firstName={data.firstName} lastName={data.lastName} rating={data.rating} titlePhoto={data.titlePhoto}/> : null}

        </div>
    )
}

export default Body