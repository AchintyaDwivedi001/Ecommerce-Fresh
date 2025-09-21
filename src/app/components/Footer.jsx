const Footer = () => {
  const footerSections = [
    {
      title: "Follow Us",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"]
    },
    {
      title: "Contact Us", 
      links: ["E-Comm Pvt Ltd", "42 Dream House", "Dreamy Street", "+92 3XX XXX XXXX"]
    },
    {
      title: "Information",
      links: ["About Us", "Privacy Policy", "Terms & Conditions", "Service & Exchange"]
    },
    {
      title: "Service",
      links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
    },
    {
      title: "My Account",
      links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
    },
    {
      title: "Our Offers",
      links: ["About Us", "Information", "Privacy Policy", "Terms & Conditions"]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-LightSteelBlue-600 to-sky-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-LightSteelBlue-600 font-bold text-sm">
                E
              </div>
              <span className="text-xl font-bold">E-Comm</span>
            </div>
            <p className="text-sm text-LightSteelBlue-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Auctor libero id et, in gravida.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-LightSteelBlue-100 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-LightSteelBlue-400 mt-8 pt-8 text-center">
          <p className="text-LightSteelBlue-100 text-sm">© 2020 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;