import React from 'react'

export default function Filter() {

    const subjects = ["SE", "DS", "AI", "DMW", "IpR", "RSG"]

    return (
        <div className='filter'>

            <label > Select the Subject </label>

            <select name="subject" id="subject">
                {subjects.map(item => <option value={item}>{item}</option>)}
            </select>
        </div>
    )
}
