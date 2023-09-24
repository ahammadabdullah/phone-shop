import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <h3 className="text-bold text-3xl">Phone Shop</h3>
      </Link>
    </div>
  );
};

export default Logo;
