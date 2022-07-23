import React from 'react'
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'

import './map.css'

const YandexMap = () => {

    const mapState = {
        center: [41.278529, 69.305986],
    };

    return (
        <YMaps>
            <Map 
                defaultState={{
                  center: [41.278529, 69.305986],
                  zoom: 15,
                  controls: [],
                }}
                instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                className = 'my_yandex_map'
            >
                    <Placemark defaultGeometry={[41.278529, 69.305986]} />
                    <ZoomControl options={{ float: 'right' }} />
            </Map>
        </YMaps>
    )
}

export default YandexMap
