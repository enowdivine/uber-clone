import avatar from "../../assets/rides/avatar.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedcar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetals: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
};

const carList = [
  {
    service: "UberX",
    iconUrl: avatar,
    priceMultiplier: 1,
  },
  {
    service: "UberBlack",
    iconUrl: avatar,
    priceMultiplier: 1.5,
  },
  {
    service: "UberBlackSuv",
    iconUrl: avatar,
    priceMultiplier: 1.5,
  },
  {
    service: "UberSelect",
    iconUrl: avatar,
    priceMultiplier: 1.5,
  },
  {
    service: "UberXL",
    iconUrl: avatar,
    priceMultiplier: 1.5,
  },
];

const basePrice = 1542;

const RideSelector = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div className={style.car} key={index}>
            <Image
              src={car.iconUrl}
              width={50}
              height={50}
              alt="Car Icon"
              className={style.carImage}
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
