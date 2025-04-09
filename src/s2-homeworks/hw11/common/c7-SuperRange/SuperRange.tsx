import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SuperRangeProps = SliderProps & {
    // change: (event: Event, value: number | number[]) => void
}
const SuperRange: React.FC<SuperRangeProps> = (props) => {

    return (
        <Slider
            defaultValue={props.value}
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: 'rgba(0, 204, 34, 1)',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
