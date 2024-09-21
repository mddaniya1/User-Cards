import { useParams } from "react-router";
import { userData } from "../utils/constant/userData";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ProfileDetails = () => {
  const { id } = useParams();
  const singleData = userData.find((item) => item.id == id);
  console.log(singleData);
  const { name, profession, description, background, profileImage } =
    singleData;

  return (
    <div className="flex justify-between items-center">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover bg-no-repeat bg-center w-[30%] h-[100vh] relative"
      >
        <div className="rounded-full absolute right-[-150px] top-1/2 transform -translate-y-1/2">
          <img
            className=" object-cover h-80 w-80 rounded-full border-[10px] border-whiteClr"
            src={profileImage}
            alt=""
          />
        </div>
      </div>

      <div className="pr-20">
        <h1 className="text-7xl text-blackClr mb-6">{name}</h1>
        <p className="text-4xl text-primaryClr mb-8">{profession}</p>
        <p className="text-[20px] text-blackClr mb-8 text-balance w-[800px]">
          {description}
        </p>
        <div className=" mt-4 flex gap-8 text-grayClr text-[30px] ">
          <FaFacebook className=" hover:text-primaryClr " />
          <FaLinkedin className=" hover:text-primaryClr " />
          <FaInstagram className=" hover:text-primaryClr " />
          <FaYoutube className=" hover:text-primaryClr " />
          <FaTwitter className=" hover:text-primaryClr " />
        </div>
        <button className="bg-primaryClr px-[25px] py-2 rounded-lg text-whiteClr mt-6">
          Buy Me Coffee
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
