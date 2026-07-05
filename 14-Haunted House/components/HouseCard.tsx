/*
HouseCard 에서 자체적으로 .map 을 하지 않는건.. HOuseCard 는 단일카드로서 늘 들어온 정보만 출력시키는 역할이니깐..
당연하지.  여기서 .map 생쑈하면 나중에 다른데서 HouseCard 쓸려고 할 때 간단히 prop 으로 정보만 전달해서 보여줄 수 없지.
 */

type House = {
  id: string;
  image: string;
  price: string;
  location: string;
  squareFeet: string;
  acres: number;
  bedrooms: number;
  bathrooms: number;
  otherRooms: number;
  yearBuilt: number;
  garage: boolean;
  airConditioning: boolean;
  heating: boolean;
  haunted: boolean;
};

type HouseCardProps = {
  houseData: House;
  index: number;
  array: House[];
};

export default function HouseCard({ houseData, index, array }: HouseCardProps) {
  return (
    <div className="house-card">
      <p>
        Listing {index + 1} of {array.length}
      </p>
      <img src={houseData.image} />
      <div>
        <ul>
          <li>
            <span>Price:</span>
            {houseData.price}
          </li>
          <li>
            <span>Location:</span>
            {houseData.location}
          </li>
          <li>
            <span>Square Feet:</span>
            {houseData.squareFeet}
          </li>
          <li>
            <span>Acres:</span>
            {houseData.acres}
          </li>
          <li>
            <span>Year Built:</span>
            {houseData.yearBuilt}
          </li>
          <li>
            <span>Bedrooms:</span>
            {houseData.bedrooms}
          </li>
          <li>
            <span>Bathrooms:</span>
            {houseData.bathrooms}
          </li>
          <li>
            <span>Other Rooms:</span>
            {houseData.otherRooms}
          </li>
          <li>
            <span>Garage:</span>
            {houseData.garage ? "Yes" : "No"}
          </li>
          <li>
            <span>Air Conditioning:</span>
            {houseData.airConditioning ? "Yes" : "No"}
          </li>
          <li>
            <span>Heating:</span>
            {houseData.heating ? "Yes" : "No"}
          </li>
          <li>
            <span>Haunted:</span>
            {houseData.haunted ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    </div>
  );
}
