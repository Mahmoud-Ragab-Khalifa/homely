const links = [
  {
    title: "ABOUT",
    links: [
      "How Homely works",
      "About us",
      "Careers",
      "Press & News",
      "Sustainability",
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      "Diversity & Inclusion",
      "Accessibility",
      "Trust & Safety",
      "Guest Referrals",
      "Homely Community",
    ],
  },
  {
    title: "HOST",
    links: [
      "Become a Host",
      "Host your home",
      "Host an experience",
      "Responsible hosting",
      "Host resources",
    ],
  },
  {
    title: "SUPPORT",
    links: [
      "Help Center",
      "Cancellation options",
      "Safety information",
      "Contact support",
      "Report a concern",
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-10 py-10 md:py-14 bg-section">
        {links.map((link) => (
          <div key={link.title} className="space-y-4">
            <h5 className="font-bold text-gray-800 text-sm">{link.title}</h5>

            {link.links.map((item) => (
              <span
                key={item}
                className="block cursor-pointer text-xs font-medium text-gray-600 transition-all duration-300 hover:ps-2 active:ps-2 hover:font-semibold hover:text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
