// TODO: add and export your own actions
import cities from "../cities_data";

export function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities,
  };
}

export function setActiveCity(city) {
  return {
    type: "SET_CITY",
    payload: city,
  };
}
