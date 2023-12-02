const TopTab = () => {
  return (
    <>
      <div className="bg-black flex justify-between items-center px-20 py-4">
        <div className="flex items-center justify-between text-white gap-5">
          <div className="flex items-center justify-between gap-2">
            <img src="/src/assets/phone-call.png" alt="Phone" />
            <p>123-58794069</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <img src="/src/assets/mail.png" alt="Mail" />
            <p>supportfoodkhan@.com</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <img src="/src/assets/instagram.png" />
          <img src="/src/assets/linkedin.png" />
          <img src="/src/assets/facebook-app-symbol.png" />
          <img src="/src/assets/twitter.png" />
        </div>
      </div>
    </>
  );
};

export default TopTab;
