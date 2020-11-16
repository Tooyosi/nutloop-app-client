import React from 'react'
import CarouselSlide from 'react-multi-carousel';

export default function MultiCaroucel(props) {
    return (
        <CarouselSlide
            additionalTransfrom={0}
            arrows={true}
            // autoPlaySpeed={3000}
            autoPlay={false}
            centerMode={false}
            containerClass="w-md-100 h-100"
            // itemClass="w-100 h-100"
            draggable={true}
            focusOnSelect={false}
            infinite
            keyBoardControl={true}

            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: props.responsive.desktop,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: props.responsive.mobile,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: props.responsive.tablet,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable={true}
        >
            {props.children}
        </CarouselSlide>
    )
}
