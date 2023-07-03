import PlaceList from "../components/places/PlaceList";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

function AllPlaces({ route }) {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlaceList places={loadedPlaces}></PlaceList>;
}

export default AllPlaces;
