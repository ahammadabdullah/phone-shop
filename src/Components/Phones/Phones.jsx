/* eslint-disable react/prop-types */
import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="py-5 ">
      <h3>All categorized phones</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
