import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="py-5">
      <h3>All categorized phones</h3>
      <div>
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
