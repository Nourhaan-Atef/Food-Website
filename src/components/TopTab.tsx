import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook-app-symbol.png";
import twitter from "../assets/twitter.png";
import phone from "../assets/phone-call.png";
import mail from "../assets/mail.png";

const TopTab = () => {
  return (
    <>
      <div className="bg-black flex justify-between items-center px-20 py-4">
        <div className="flex items-center justify-between text-white gap-5">
          <div className="flex items-center justify-between gap-2">
            <img src={phone} alt="Phone" />
            <p>123-58794069</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <img src={mail} alt="Mail" />
            <p>supportfoodkhan@.com</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <img src={instagram} />
          <img src={linkedin} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </>
  );
};

export default TopTab;
