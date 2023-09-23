import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import swal from "sweetalert";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);
  const { image, brand_name, phone_name } = phone || {};
  const favoriteArray = [];
  const handleAddToFavorite = () => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (!favoriteItem) {
      favoriteArray.push(phone);
      localStorage.setItem("favorites", JSON.stringify(favoriteArray));
      swal("Good job!", "Product Added Successfully!", "success");
    } else {
      const isExist = favoriteItem.find((phone) => phone.id === id);
      if (!isExist) {
        favoriteArray.push(...favoriteItem, phone);
        localStorage.setItem("favorites", JSON.stringify(favoriteArray));
        swal("Good job!", "Product Added Successfully!", "success");
      } else {
        swal("Error!", "Already Added!", "error");
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-[130vh] lg:h-screen">
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="flex flex-col justify-evenly">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {brand_name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {phone_name}
          </Typography>

          <a href="#" className="inline-block">
            <Button
              onClick={handleAddToFavorite}
              variant="text"
              className="flex items-center gap-2 bg-green-200"
            >
              Add to Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Phone;
