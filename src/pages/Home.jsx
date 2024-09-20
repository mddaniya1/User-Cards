import React from "react";
import { userData } from "../utils/userData";
import Card from "../components/common/Card";

const Home = () => {
  return (
    <>
      <div className="flex gap-5 flex-wrap my-5 p-10 justify-center">
        {userData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
