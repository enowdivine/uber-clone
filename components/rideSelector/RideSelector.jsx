import "../../styles/Home.module.css";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { UberContext } from "../../context/uberContext";

const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carListStyle: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetals: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
};

const RideSelector = () => {
  const [carList, setCarList] = useState([]);
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/db/getRideTypes");

        const data = await response.json();
        setCarList(data.data);
        setSelectedRide(data.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={`${style.carListStyle} bar`}>
        {carList.map((car, index) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car);
              setPrice(
                ((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)
              );
            }}
          >
            <Image
              src={car.iconUrl}
              className={style.carImage}
              width={50}
              height={50}
              alt={car.service}
            />
            <div className={style.carDetals}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 mins away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                <FaEthereum />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
