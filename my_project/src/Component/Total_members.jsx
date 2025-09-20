import React from 'react'
const Total_members=(color,title,total)
export default function Total_members(props) {
    return (
        <div className='flex'>
            <div>logo</div>

            <div className='bg-green-500 flex-1 py-4 '>
                <h1 className=''>{props.title}</h1>
            <h2 className='text-3xl font-bold'>{props.num*2}</h2>
            </div>
            
        </div>
    )
}
