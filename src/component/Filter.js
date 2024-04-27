import React, { useState } from 'react'

export default function Filter({ onChange }) {

    const subjects = ["AI", "DS", "SE", "DMW", "IPR", "RSG"]



    return (
        <div className='filter'>

            <label > Select the Subject </label>

            <select name="subject" id="subject" onChange={(e) => onChange(e)}>
                {subjects.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
        </div>
    )
}
