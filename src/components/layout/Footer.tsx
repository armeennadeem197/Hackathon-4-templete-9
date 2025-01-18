import footer3 from "../../../public/footer3.png";
import footer1 from "../../../public/footer1.png";
import footer2 from "../../../public/footer2.png";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const recentPosts = [
    { id: 1, image: footer1, date: "20 Feb 2022", title: "Keep Your Business" },
    { id: 2, image: footer2, date: "20 Feb 2022", title: "Grow Your Ideas" },
    { id: 3, image: footer3, date: "20 Feb 2022", title: "Achieve Your Goals" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Subscription Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-[135px] py-[50px]">
        <div className="md:w-[50%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>
        <div className="flex md:mt-0 mt-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 mr-2"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-3 md:px-6">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="border-[#FF9F0D] mx-8 md:mx-[135px]" />

      {/* Footer Content */}
      <div className="px-8 md:px-[135px] py-6 lg:py-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase">About Us</h2>
            <p className="text-[16px] text-gray-400">
              Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeured car
              service in major cities worldwide.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                <PiClockClockwiseBold className="text-white text-[40px]" />
              </div>
              <div>
                <h3 className="text-[16px]">Opening Hours</h3>
                <p className="text-[10px]">Mon - Sat (8:00 - 6:00)</p>
                <p className="text-[10px]">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Useful Links</h2>
            <ul className="space-y-4 text-gray-400">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Help?</h2>
            <ul className="space-y-4 text-gray-400">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase">Recent Posts</h2>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex gap-4">
                  <Image src={post.image} alt={post.title} width={72} height={72} />
                  <div>
                    <p className="text-[12px] text-gray-400">{post.date}</p>
                    <h3 className="text-[14px] font-normal">{post.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 mt-6">
          <span className="text-sm text-gray-500">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, idx) => (
              <div key={idx} className="bg-white w-[36px] h-[36px] flex justify-center items-center rounded-full">
                <Icon className="text-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
