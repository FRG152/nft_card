import Equilibrium from "../assets/image-equilibrium.jpg";
import Ethereum from "../assets/icon-ethereum.svg";
import Clock from "../assets/icon-clock.svg";
import Avatar from "../assets/image-avatar.png";

const Card = () => {
  return (
    <section className="bg-VeryDarkBlueCardBg max-w-lg p-8 rounded-xl">
      <article>
        <figure>
          <img
            className="rounded-xl"
            src={Equilibrium}
            alt="image-equilibrium.jpg"
          />
        </figure>
        <h1 className="text-3xl font-semibold text-White my-8">
          Equilibrium #3429
        </h1>
        <p className="text-SoftBlue text-lg  sm:text-2xl">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between my-4">
          <div className="flex items-center gap-x-2">
            <img
              className="w-[15px] sm:w-[20px]"
              src={Ethereum}
              alt="icon-ethereum.svg"
            />
            <p className="text-Cyan text-lg font-semibold sm:text-xl">
              0.041 ETH
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <img
              className="w-[25px] sm:w-[30px]"
              src={Clock}
              alt="icon-clock.svg"
            />
            <p className="text-xl text-SoftBlue font-semibold sm:text-2xl">
              3 days left
            </p>
          </div>
        </div>
        <hr className="text-VeryDarkBlueLine" />
        <div className="flex items-center gap-x-4 mt-4">
          <img
            className="w-[50px] border-2 border-White rounded-full"
            src={Avatar}
            alt="image-avatar.png"
          />
          <p className="text-VeryDarkBlueLine text-[1.4rem] my-4">
            Creation of <span className="text-White">Jules Wyvern</span>{" "}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Card;
