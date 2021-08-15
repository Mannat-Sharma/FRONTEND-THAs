import { useSelector } from "react-redux";

const Weather = () => {
  const placeData = useSelector((state) => state.placeData)
    return(
        <div className="container">
          {placeData.location? (
            <>
            <div className="weather">
              <div className="condition">
              <img src={placeData.current.condition.icon} alt=""/>
              <h4>{placeData.current.condition.text}</h4>
              <h1>{placeData.current.temp_c}<span style={{fontWeight:"lighter"}}>°</span></h1>
            </div>
            </div>
            <div>
              <div className="conditions">
                <h1>{placeData.location.name}</h1>
                <div className="wind">
                  <div>
                    <h2>{placeData.current.wind_kph} KM</h2>
                    <p>Wind Now</p>
                  </div>
                  <div>
                    <h2>{placeData.current.humidity} %</h2>
                    <p>Humidity</p>
                  </div>
                  <div>
                    <h2>{placeData.current.precip_mm} MM</h2>
                    <p>Precipitation</p>
                  </div>
                  </div>
             </div>
          </div>
            </>
          ):(
          <h1 style={{textAlign:"center"}}>Place Not Found</h1>
          )}
          </div>
    )
}

export default Weather;