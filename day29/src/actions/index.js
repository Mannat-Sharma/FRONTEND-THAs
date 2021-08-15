const updatePlace = (place) => {
    return{
        type : "UPDATE_PLACE",
        payload : place,
    }
}

const updatePlaceData = (place) => {
    return(dispatch) => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=2e3ab97f41a543e6a0c143233211108&q=${place}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
            type:"UPDATE_PLACE_DATA",
            payload: data,
        })
      })
    }
}

export {updatePlace, updatePlaceData}