import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Donation Proof
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Donation Proof is a Web3-application, which lets you donate MATIC and generate a decentralized PDF-proof of your donation.
            </p>

            
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="1920"
              height="1280"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

              <button className="flex text-2xl text-indigo-400 border-4 border-indigo-300 rounded-lg p-2 bg-indigo-100 bg-opacity-30">Donate NOW!</button>
      </Container>
      
    </>
  );
}
