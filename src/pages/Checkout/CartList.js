import React from 'react'
import MultiCaroucel from '../../components/common/MultiCarousel'

export default function CartList(props) {
    return (
        <MultiCaroucel responsive={{desktop: 10, mobile: 3, tablet: 4}}>
            {props.items.map((item, i)=>(
                <img width="90" className="mr-2" src={item.image} />
            ))}
        </MultiCaroucel>
    )
}
