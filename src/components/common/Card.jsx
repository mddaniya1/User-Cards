import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
  } = data;

  return (
    <div className="w-[300px]">
      <div className="relative">
        <div className="h-28 object-cover  ">
          <img className="object-cover w-full h-full " src={background} />
          <img
            className="object-cover rounded-full w-24 h-24 absolute top-16 left-[100px] border-[5px] "
            src={profileImage}
          />
        </div>
      </div>
      <div className="mt-[60px] ">
        <h1 className="text-center text-3xl font-semibold">{name}</h1>
        <p className=" mt-2 text-center text-gray-400 font-medium">
          {profession}
        </p>
        <p className=" text-pretty text-center font-normal mt-2 text-slate-950">
          {description}
        </p>
      </div>

      <div className=" mt-4 flex gap-5 text-gray-500 text-[20px] justify-center">
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>
      <button
        to={profileLink}
        className="bg-cyan-700 w-full py-2 mt-8 text-white font-normal rounded-sm"
      >
        <Link className="w-full" to={profileLink}>
          View Profile
        </Link>
      </button>

      <div />
    </div>
  );
};
export default Card;
