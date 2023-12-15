import Image from "next/image";
import profile from "../../../public/vercel.svg";
import nature from "../../../public/image-optimization.jpg";

const ImageOptimization = () => {
  console.log(profile, "profile");

  return (
    <>
      <Image src={profile} />
      <br />
      <br />
      <img src={profile.src}></img> {/* define height */}
      <br />
      <br />
      <Image src={nature} />
    </>
  );
};

export default ImageOptimization;
