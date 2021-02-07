import * as React from "react";
import { Item } from "../types";

interface IForniteItemProps {
  item: Item;
}

const ForniteItem: React.FC<IForniteItemProps> = ({ item }) => {
  const filledstar = Math.round(item.item.ratings.avgStars);
  const rating = Array.from({ length: filledstar }, (_, index) => {
    return index;
  });

  return (
    <div key={item.itemId} className="">
      <div className="w-full overflow-hidden" style={{ minHeight: 150 }}>
        <img
          src={item.item?.images?.icon}
          className="object-cover w-full h-full"
          alt={item.item.description}
        />
      </div>
      <div className="p-4 justify-between flex-col">
        <h1 className="text-xl font-bold text-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis ">
          {item.item.name}
        </h1>
        <p className=" text-gray-300 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
          {item.item.description}
        </p>
        <p className="text-gray-300">{item.item.ratings.avgStars}</p>
        <div className="flex">
          {rating?.map((_, index) => (
            <img key={index} src="/icons/star.svg" width="20" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ForniteItem;
