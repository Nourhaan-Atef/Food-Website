import Basecard from "../../assets/Basecard.png";
import WhiteBasecard from "../../assets/whiteBasecard.png";
import Piz1 from "../../assets/piz1.png";
import Piz2 from "../../assets/piz2.png";
import Piz3 from "../../assets/piz3.png";
import Piz4 from "../../assets/piz4.png";
import Piz5 from "../../assets/piz5.png";
import Piz6 from "../../assets/piz6.png";
import LeftSideSection from "../../assets/Left side section.png";
import burgerBadge from "../../assets/burger badge.png";
import free from "../../assets/Free.png";
import delivery from "../../assets/delivery.png";
import Pizza from "../../assets/pizza.png";
import Pizza1 from "../../assets/pizza 1.png";
import burger1 from "../../assets/burger 1.png";
import chicken1 from "../../assets/chicken.png";
import drinks from "../../assets/drinks.png";
import combo from "../../assets/combo.png";
import posters from "../../assets/posters.png";
import Chickpea2 from "../../assets/Chickpea Soup2.png";
import Chickpea from "../../assets/Chickpea Soup.png";
import Vegetable2 from "../../assets/Vegetable Pizza2.png";
import Vegetable from "../../assets/Vegetable Pizza.png";
import Garlic2 from "../../assets/Garlic Burger2.png";
import Garlic from "../../assets/Garlic Burger.png";
import Chicken from "../../assets/Chicken Fry.png";
import Chicken2 from "../../assets/Chicken Fry2.png";
import shapes3 from "../../assets/shapes3.png";
import shapes2 from "../../assets/Shapes2.png";
import downArrow from "../../assets/Shapes2.png";
import calender from "../../assets/calendar.png";

const Home = () => {
  return (
    <>
      <div className=" ">
        <section className="flex justify-between items-center mb-20 px-20 bg-darkGray">
          <div>
            <div>
              <h1 className="text-white font-extrabold font-Poppins text-5xl leading-relaxed">
                ENJOY OUR <br />
                DELICIOUS <span className="text-lightOrange">FOOD</span>
              </h1>
            </div>
            <div className="flex items-center my-5">
              <p className=" text-white py-4 pl-2 pr-10 border border-r-transparent rounded-l-xl ">
                Buy One. Get One
              </p>
              <img src={free} alt="free badge" />
            </div>
            <div className="flex items-end text-white my-5">
              <p className="font-bold text-lg pr-2">Price : </p>
              <span className="font-bold text-4xl text-lightOrange">
                $10.50
              </span>
            </div>
            <div className="mb-y">
              <div className="flex items-center gap-5">
                <img src={delivery} alt="delivery man" width="60px" />
                <div className="text-white text-sm">
                  <p>Delivery Order Num.</p>
                  <p className="font-bold text-lightOrange">123-59794069</p>
                </div>
                <button className="text-white bg-red  border border-red hover:bg-transparent hover:border-white hover:text-red rounded-xl px-10 py-2 font-Poppins text-lg">
                  Try It Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col justify-end items-center right-0 hidden mb-10">
            <img src={Pizza} alt="pizza" width="500px" />
          </div>
        </section>

        <section className=" flex flex-col shadow-lg md:m-20 my-20 mx-10 ">
          <div className="text-center  pt-2">
            <p className="font-Caveat text-4xl text-red mb-5">online booking</p>
            <h2 className="text-5xl font-Poppins font-extrabold text-blue">
              Table <span className="text-red">Booking</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 items-center gap-5 md:px-16 px-4 md:py-20 pb-10">
            <p className="flex justify-between border-2 px-3 py-1">
              <span>4 People</span> <img src={downArrow} />
            </p>
            <p className="flex justify-between border-2 px-3 py-1">
              <span>mm/dd/yyy</span> <img src={calender} />
            </p>
            <p className="flex justify-between border-2 px-3 py-1">
              <span>07.29 pm</span> <img src={downArrow} />
            </p>
            <button className="text-white bg-red  border border-red hover:bg-transparent hover:border-white hover:text-red rounded-xl px-10 py-2 font-Poppins text-lg">
              Find Table
            </button>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 items-center m-20">
          <div className="flex justify-center items-center">
            <img
              src={LeftSideSection}
              alt="left side section"
              className="w-full"
            />
          </div>
          <div>
            <h2 className="text-5xl font-Poppins font-extrabold text-blue">
              Fresh Taste At A Great Price, Only For
              <span className="text-red">Hungry People</span>.
            </h2>
            <p className="font-Roboto text-blue text-base font-medium py-5">
              Food is a restaurant, bar and coffee roastery located on a busy
              corner site in Farringdon's Exmouth Market. With glazed.
            </p>
            <div className="p-5 flex items-center gap-5 shadow-lg">
              <img src={burgerBadge} alt="burger badge" />
              <div className="">
                <h4 className="text-xl font-Poppins font-extrabold text-blue">
                  Garlic Burger Parties
                </h4>
                <p className="font-Roboto text-blue text-base font-medium ">
                  It is a long established fact that a reader BBQ food Chicken.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="md:m-20 mx-10 my-20 ">
          <div className="text-center my-16">
            <p className="font-Caveat text-4xl text-red mb-5">Food Items</p>
            <h2 className="text-5xl font-Poppins font-extrabold text-blue">
              Popular <span className="text-red">Menu</span>
            </h2>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-5">
            <div className="relative">
              <img src={Basecard} alt="Base Card" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <img src={Pizza1} className="" />
                <p className="text-white font-Poppins text-lg font-bold text-center">
                  Pizza
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={WhiteBasecard} alt="Base Card" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <img src={burger1} className="" />
                <p className="text-blue font-Poppins text-lg font-bold text-center">
                  Pizza
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={WhiteBasecard} alt="Base Card" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <img src={chicken1} className="" />
                <p className="text-blue font-Poppins text-lg font-bold text-center">
                  Chicken
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={WhiteBasecard} alt="Base Card" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <img src={drinks} className="" />
                <p className="text-blue font-Poppins text-lg font-bold text-center">
                  Drinks
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={WhiteBasecard} alt="Base Card" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <img src={combo} className="" />
                <p className="text-blue font-Poppins text-lg font-bold text-center">
                  Combo Menu
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-10 px-5 py-10 my-20 shadow-lg relative">
            <img
              src={shapes2}
              alt="Base Card"
              className="absolute bottom-0 right-0"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 py-5">
              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz1} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">Margherita</h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz2} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">Tomato</h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz3} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">Marinara</h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz4} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">
                    Frutti Di Mare
                  </h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz5} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">Americana</h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="flex gap-5 border p-5 rounded-md">
                <img src={Piz6} alt="pizza1" />
                <div className="text-blue flex flex-col gap-3">
                  <h4 className="font-Poppins font-bold text-xl">
                    Pizza Al Pesto
                  </h4>
                  <p className="font-roboto text-base font-normal">
                    Shrimp, Squid, Pineapple
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-10">
              <button className="text-white bg-red  border border-red hover:bg-transparent hover:border-white hover:text-red rounded-xl px-10 py-2 font-Poppins text-lg">
                Order Now
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20  bg-lightRed  pb-20 relative">
          <img
            src={shapes3}
            alt="shapes"
            className="md:absolute hidden top-0  w-full"
          />
          <div className="md:px-20  px-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 mb-10">
              <div className="my-16">
                <p className="font-Caveat text-4xl text-red lg:mb-5 sm:text-start text-center">
                  Food Items
                </p>
                <h2 className="text-5xl font-Poppins font-extrabold text-blue sm:text-start text-center">
                  Popular <span className="text-red">Dishes</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row  justify-between items-center">
                <button className="text-white bg-red   rounded-xl px-10 py-2 font-Poppins text-lg">
                  All Items
                </button>
                <button className="text-blue   rounded-xl px-5 py-2 font-Poppins text-lg font-medium">
                  Chicken
                </button>
                <button className="text-blue   rounded-xl px-5 py-2 font-Poppins text-lg font-medium">
                  Pizza
                </button>
                <button className="text-blue   rounded-xl px-5 py-2 font-Poppins text-lg font-medium">
                  Burger
                </button>
                <button className="text-blue  rounded-xl px-5 py-2 font-Poppins text-lg font-medium">
                  Drinks
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-5 ">
              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Garlic} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Garlic Burger
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Vegetable} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Vegetable Pizza
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Chicken} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Chicken Fry
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <div className="flex justify-between items-center">
                    <h4 className="font-Poppins font-semibold text-base text-red">
                      Price : $15.00
                    </h4>
                    <img src="/src/assets/Stars.png" alt="Stars" />
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Chickpea} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Chickpea Soup{" "}
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Garlic2} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Garlic Burger
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Vegetable2} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Vegetable Pizza{" "}
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Chicken2} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Chicken Fry
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <div className="flex justify-between items-center">
                    <h4 className="font-Poppins font-semibold text-base text-red">
                      Price : $15.00
                    </h4>
                    <img src="/src/assets/Stars.png" alt="Stars" />
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-400 rounded-lg p-4 bg-white flex flex-col items-center">
                <img src={Chickpea2} />
                <div className="text-blue flex flex-col gap-3 text-center md:text-start">
                  <h4 className="font-Poppins font-bold text-xl">
                    Chickpea Soup{" "}
                  </h4>
                  <p className="font-roboto text-sm font-normal">
                    It is a long established fact that a reader BBQ food Chicken
                  </p>
                  <h4 className="font-Poppins font-semibold text-base">
                    Price : $15.00
                  </h4>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <img src={posters} alt="posters" className="w-full" />
            </div>
          </div>
        </section>

        {/* <section className="mb-20 relative">
          <img
            src="/src/assets/countdown shapes.png"
            alt=""
            className="w-full absolute bg-black"
          />
          <div className="top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="my-16">
              <p className="font-Caveat text-4xl text-red mb-5">Food Items</p>
              <h2 className="text-5xl font-Poppins font-extrabold text-red">
                Coming Soon
              </h2>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Home;
