function geolocationSupport() {
    return 'geolocation' in navigator
}

const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 1000000,

}

export function getCurrentPosition(option = defaultOptions) { 
    if (!geolocationSupport()) throw new Error('You do not have geolocation in your browser')

    return new Promise((resolve, reject)=>{
        
        navigator.geolocation.getCurrentPosition( (position) => {
            // console.log(position)
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            resolve(position)
            // console.log(lat, lon)
        }, () => {
            reject('We could not get your location')
        }, option)
    })
}

export async function getLatLon(options = defaultOptions) {
    try{
        const{coords: {latitude:lat, longitude:lon}} = await getCurrentPosition(options)
        return {lat, lon, isError: false}
    }catch{
        return {isError: true, lat: null, lon: null}

    }
}