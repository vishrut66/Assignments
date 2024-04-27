import React from 'react'

export default function Box({ assignments, materials }) {


    return (
        <div className='box'>

            <div className='box-item'>

                <div className="box-item-title"> Assignments</div>

                <div className='items'>

                    {assignments.length > 0 ? assignments.map(item => <li className='list-item' key={item.name} >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </li>) : "It's Empty 🤯"}

                </div>
            </div>

            <div className='box-item'>
                <div className="box-item-title"> Other Materials</div>
                <div className='items'>

                    {materials.length > 0 ? materials.map(item => <li className='list-item' key={item.name} >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                    </li>) : "There is nothing here."}

                </div>
            </div>

        </div>
    )
}
