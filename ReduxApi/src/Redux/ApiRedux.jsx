import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from '../Configure/ApiSlice'

export default function ApiRedux() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchapi())
    }, [])
    const record = useSelector((state) => {
        return state.apiKey
    })
    return (
        <>
            <center>
                <h1>ApiRedux</h1>
                {
                    record.data &&
                    record.data.map((e, i) => {
                        return (<ul key={i}>
                            <li>{e.title}</li>
                            <li>₹ {e.price}</li>
                        </ul>)
                    })
                }
            </center>
        </>
    )
}