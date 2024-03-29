const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-900 container mx-auto rounded-b-lg border-t border-teal-900 border-dashed lg:max-w-6xl">
      <p className="text-center text-teal-600 text-[1.2rem]">
        &copy; {new Date().getFullYear()} Kajal Rekha. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
