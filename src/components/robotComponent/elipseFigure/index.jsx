import React from 'react'

export default function ElipseFigure(props) {
    return (
        <div style={
            {
                position: "absolute",
                top: props.top,
                left: props.left,
                right: props.right,
                transform: `scale(${props.scale}) rotate(${props.rotate}deg)`,
                opacity: props.opacity
            }
        }>
            <svg width="92" height="65" viewBox="0 0 92 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M88.2658 4.49523C88.6177 5.02646 88.9215 6.32978 87.8132 9.06296C86.7489 11.6876 84.628 14.9645 81.4677 18.6876C75.1741 26.1021 65.2154 34.755 53.0653 42.8022C40.9152 50.8494 29.0625 56.6426 19.7801 59.5444C15.1189 61.0015 11.2742 61.6757 8.44237 61.6316C5.49338 61.5856 4.4119 60.7973 4.06006 60.2661C3.70822 59.7349 3.40441 58.4316 4.51272 55.6984C5.57702 53.0737 7.69789 49.7969 10.8582 46.0737C17.1518 38.6592 27.1105 30.0064 39.2606 21.9592C51.4107 13.9119 63.2634 8.11875 72.5458 5.21696C77.207 3.75984 81.0516 3.08563 83.8835 3.12978C86.8325 3.17574 87.914 3.964 88.2658 4.49523Z" stroke="url(#paint0_radial_8_7)" stroke-width="6" />
                <defs>
                    <radialGradient id="paint0_radial_8_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.1629 32.3807) rotate(56.4828) scale(15.5 53.5)">
                        <stop stop-color="#3F51E8" />
                        <stop offset="0.572917" stop-color="#9BA4ED" />
                        <stop offset="1" stop-color="#1F34E7" />
                    </radialGradient>
                </defs>
            </svg>
        </div>


    )
}
