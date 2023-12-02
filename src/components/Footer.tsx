import footerShapes from "../assets/footer shapes.png";
import logo from "../assets/logo.png";
import email from "../assets/Email icon.png";
import copyrights from "../assets/Copyright.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-black relative">
        <img
          src={footerShapes}
          alt="footer shapes"
          className="md:absolute z-1 h-full top-0 hidden"
        />
        <div className="md:px-20 px-10 pb-20 pt-28">
          <div className="flex md:flex-row flex-col gap-5 justify-between md:items-center items-start border-b border-b-gray-500 pb-10">
            <img src={logo} />
            <h3 className="font-Poppins font-bold text-3xl text-white">
              Feel Hunger! Order Your{" "}
              <span className="text-lightOrange">Like Food.</span>
            </h3>
            <button className="text-white bg-red  border border-red hover:bg-transparent hover:border-white hover:text-red rounded-xl px-10 py-2 font-Poppins text-lg">
              Order Now
            </button>
          </div>
          <div className="text-white my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="">
              <h4 className="font-Poppins font-bold text-2xl">Address</h4>
              <p className="font-Roboto font-normal text-base py-2">
                570 8th Ave,New York, NY 10018 United States
              </p>
              <p className="font-Roboto font-normal text-base py-2 text-lightOrange">
                View Google Maps
              </p>
            </div>

            <div className="">
              <h4 className="font-Poppins font-bold text-2xl">Address</h4>
              <p className="font-Roboto font-normal text-base py-2">
                Dogfood och Sliders foodtruck. Under Om oss kan ni läsa
              </p>
              <p className="font-Roboto font-normal text-base py-2 text-lightOrange">
                Make A Call
              </p>
            </div>

            <div className="">
              <h4 className="font-Poppins font-bold text-2xl">Opening Hours</h4>
              <p className="font-Roboto font-normal text-base py-2">
                Monday-Friday: 8am - 4pm Saturday: 9am - 5pm
              </p>
              <p className="font-Roboto font-normal text-base py-2 text-lightOrange">
                Make A Call
              </p>
            </div>

            <div className="">
              <h4 className="font-Poppins font-bold text-2xl">Newsletter</h4>
              <div className="flex items-center my-5">
                <p className=" text-white py-2 pl-2 pr-10 border border-r-transparent  ">
                  Enter Your Email{" "}
                </p>
                <img src={email} />
              </div>

              <p className="font-Roboto font-normal text-base py-2 text-lightOrange">
                Subscribe Now
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <p className="text-white flex gap-1 font-Roboto font-medium">
              Copyright
              <img src={copyrights} />
              2021 <span className="text-lightOrange"> Khadyo</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
