import React, { Component } from 'react'
import './Body.css'
import Bodyheader from './Bodyheader'
import Bodymiddle from './Bodymiddle'
import axios from 'axios'

export default class Body extends Component {

    state = {
        loading: false,
        location: 'India',
        condition: 'normal',
        cloud: '0',
        humidity: '0',
        temp: '0',
        wind_speed: '0',
    }

    changeLoaction = e => {
        this.setState({
            location: e.target.value
        })
    }

    getWeatherdata = async () => {
        this.setState({
            loading: true
        })
        axios.get(`https://api.weatherapi.com/v1/current.json?key=cbbafcb394aa4eb488d53447202311&q=${this.state.location}`)
            .then(data1 => {
                var { data: { current } } = data1
                this.setState({
                    cloud: current.cloud,
                    humidity: current.humidity,
                    temp: current.temp_f,
                    wind_speed: current.wind_kph
                })
                const { data: { current: { condition } } } = data1
                this.setState({
                    condition: condition.text
                })
                this.setState({
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
                alert("Error Occured in Getting Data check internet🧩🚀🚀 Connection")
            })
    }

    componentDidMount() {
        this.getWeatherdata()
    }


    render() {
        const { loading, condition, cloud, humidity, temp, wind_speed } = this.state
        return (
            <>
                {
                    loading === true ? (
                        <div className="loading">Loding</div>) : (
                            <div className="body__container">
                                <div className="body__input">
                                    <input type="text" onChange={this.changeLoaction} name="location" />
                                    <div className="body__searchicon">
                                        <button onClick={this.getWeatherdata}>
                                            <svg width={15} height={20} viewBox="0 0 11.462 11.464">
                                                <defs>
                                                    <style>{".a{fill:url(#a);}"}</style>
                                                    <radialGradient
                                                        id="a"
                                                        cx={0.422}
                                                        cy={0.401}
                                                        r={0.474}
                                                        gradientTransform="translate(0.359 -0.177) rotate(40.231)"
                                                        gradientUnits="objectBoundingBox"
                                                    >
                                                        <stop offset={0} stopColor="red" />
                                                        <stop offset={1} stopColor="maroon" />
                                                    </radialGradient>
                                                </defs>
                                                <path
                                                    className="a"
                                                    d="M11.306,9.911,9.074,7.679a.537.537,0,0,0-.381-.157H8.328a4.655,4.655,0,1,0-.806.806v.365a.537.537,0,0,0,.157.381l2.232,2.232a.535.535,0,0,0,.759,0l.634-.634a.54.54,0,0,0,0-.761ZM4.657,7.522A2.866,2.866,0,1,1,7.522,4.657,2.864,2.864,0,0,1,4.657,7.522Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="body__">
                                    <Bodyheader weathercondition={condition} temperatue={temp} />
                                    <Bodymiddle humidity={humidity} windspeed={wind_speed} cloud={cloud} />
                                </div>
                            </div >
                        )
                }
            </>

        )
    }
}
