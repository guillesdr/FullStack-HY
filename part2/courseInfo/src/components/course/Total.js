import React from 'react'

export const Total = ({ parts }) => {

    const total = parts.reduce((acc, item) => acc += item.exercises, 0)

    return (
        <div>
            <p> <b> Total of {total} exercises</b></p>
        </div>
    )
}
