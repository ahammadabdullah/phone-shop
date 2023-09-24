/* eslint-disable react/prop-types */
import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="py-5 space-y-5 ">
      <h3 className="text-2xl font-bold text-center">All categorized phones</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
