import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaDiscord } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const {
    name,
    profession,
    description,
    background,
    profileImage,
    profileLink,
    id,
  } = data;

  return (
    <div className="w-[300px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[20px] font-primaryFont pb-5">
      <div className="relative">
        <div className="h-28 object-cover  ">
          <img
            className="object-cover w-full h-full rounded-t-[15px] "
            src={background}
          />
          <img
            className="object-cover rounded-full w-28 h-28 absolute top-16 left-1/2 transform -translate-x-1/2 border-[6px] border-whiteClr "
            src={profileImage}
          />
        </div>
      </div>
      <div className="mt-[60px] p-2 ">
        <h1 className="text-center text-[25px] font-[500] text-whiteClr">
          {name}
        </h1>
        <p className=" mt-3 text-center text-purple font-[400]">
          {profession}
        </p>
        <p className=" text-pretty text-center font-[400] mt-2 text-grayClr text-[14px]">
          {description.slice(0,60)+ "..."}
        </p>
      </div>

      <div className=" mt-4 flex gap-5 text-grayClr text-[20px] justify-center">
    
         <FaInstagram className=" hover:text-purple " />
        <FaFacebook className=" hover:text-purple " />
        <FaLinkedin className=" hover:text-purple " />
        <FaDiscord className=" hover:text-purple " />
        <FaTwitter className=" hover:text-purple " />
        
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/profile/${id}`)}
          className="bg-purple w-[80%] text-[#ffffff]  py-1 mt-4 text-white font-normal rounded-md"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};
export default Card;
