import React, { Component } from 'react'
import './Bodyheader.css'

export default class Bodyheader extends Component {
    render() {
        var weathercondition = this.props.weathercondition
        const temp = this.props.temperatue
        var temperatue = Math.ceil(temp)
        return (
            <div className="bodyheader__container">
                <div className="bodyheader__iconcontainer">
                    <div className="bodyheader__icon">
                        <svg width={77} height={62.407} viewBox="0 0 77 62.407">
                            <defs>
                                <style>{".a{fill:#eb1b1b;stroke:#000;stroke-width:2px;}"}</style>
                            </defs>
                            <g transform="translate(-1.25 -3.5)">
                                <g transform="translate(2.25 4.5)">
                                    <path
                                        className="a"
                                        d="M17.754,7.066H23.6v4.279H17.754Z"
                                        transform="translate(19.16 -1.325)"
                                    />
                                    <path
                                        className="a"
                                        d="M20.366,8.838c-7.584,0-13.778,5.82-13.778,12.947a12.24,12.24,0,0,0,2.494,7.394,22.63,22.63,0,0,1,9.157-4.342l2.21-2.611a21.74,21.74,0,0,1,8.5-6.119,25.655,25.655,0,0,1,3.181-1.038A14.008,14.008,0,0,0,20.366,8.838Z"
                                        transform="translate(3.741 0.868)"
                                    />
                                    <path
                                        className="a"
                                        d="M11.391,4.5h4.688v6.45H11.391Z"
                                        transform="translate(10.373 -4.5)"
                                    />
                                    <path
                                        className="a"
                                        d="M2.25,13.641H9.114v4.4H2.25Z"
                                        transform="translate(-2.25 6.81)"
                                    />
                                    <path
                                        className="a"
                                        d="M8.214,19.532l-.134-.126L3.945,23.292l3.214,3.02,4.135-3.886Z"
                                        transform="translate(0.09 13.944)"
                                    />
                                    <path
                                        className="a"
                                        d="M4.542,7.066h5.843v4.279H4.542Z"
                                        transform="translate(0.915 -1.325)"
                                    />
                                </g>
                                <path
                                    className="a"
                                    d="M58.58,28.7c-1.825-8.684-9.944-15.2-19.687-15.2-5.692,0-10.9,1.872-14.481,6.1a20.93,20.93,0,0,1,13.025,5.333,19.081,19.081,0,0,1,5.374,8.7h-4.8A15.911,15.911,0,0,0,22.838,23.568a17.608,17.608,0,0,0-2.963.267C12.208,25.314,6.75,31.276,6.75,38.67c0,8.337,7.2,15.1,16.071,15.1H57.643c7.4,0,13.393-5.632,13.393-12.585C71.036,34.548,65.545,29.152,58.58,28.7Z"
                                    transform="translate(6.214 11.136)"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="bodyheader__condition">{weathercondition}</div>
                </div>
                <div className="bodyheader__temperature">
                    {temperatue}<sup style={{ fontFamily: 'Microsoft Tai Le', fontWeight: 'normal', fontSize: '30px', color: 'white', marginLeft: '3px' }}>o</sup><span style={{ fontFamily: 'Microsoft Tai Le', color: 'whitesmoke', marginLeft: '3px', fontSize: '30px' }}>C</span>
                </div>
            </div>
        )
    }
}