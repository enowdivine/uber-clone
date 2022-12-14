import "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import Map from "../components/map/Map";
import LocationSelector from "../components/locationSelector/LocationSelector";
import Confirm from "../components/confirm/Confirm";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-5 left-0 flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={`${style.rideRequest} bar`}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
