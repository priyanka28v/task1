export const Footer = () => {
  const array1 = ["Headless", "Capabilities", "Features", "Integrations", "API"];
  const array2 = ["Knowledge Base", "Developer Docs", "API Documentation", "Developer Hub", "Starter Projects", "API Status"];
  const array3 = ["Pricing", "Partners", "Security", "Careers", "Contact Us"];
  const array4 = ["Blog", "Podcast", "WordPress Alternative", "Contentful Alternative", "Medium Alternative", "Strapi Alternative"];

  return (
    <>
      <footer className="bg-gray-900 text-gray-300  pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
            <ul className="space-y-2">
              {array1.map((info, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              {array2.map((info, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              {array3.map((info, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Subscribe</h2>
            <ul className="space-y-2">
              {array4.map((info, index) => (
                <li
                  key={index}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shopping App. All rights reserved.</p>
          <p className="mt-2">
            <span className="hover:text-blue-400 cursor-pointer">Terms</span> •{" "}
            <span className="hover:text-blue-400 cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
};
