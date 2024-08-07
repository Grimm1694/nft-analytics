import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#111a22] text-white py-8 border-t border-t-[#243647]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">LumiNifty</h2>
            <p className="text-sm">Illuminate Your NFT Journey</p>
          </div>
          
          {/* Resources */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li><Link href="/insights"><span className="hover:text-[#00FFF1] text-gray-500">Insights</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-[#00FFF1] text-gray-500">Blog</span></Link></li>
              <li><Link href="/guides"><span className="hover:text-[#00FFF1] text-gray-500">Guides</span></Link></li>
              <li><Link href="/help-center"><span className="hover:text-[#00FFF1] text-gray-500">Help Center</span></Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul>
              <li><Link href="/general-enquiry"><span className="hover:text-[#00FFF1] text-gray-500">General Enquiry</span></Link></li>
              <li><Link href="/support"><span className="hover:text-[#00FFF1] text-gray-500">Support</span></Link></li>
              <li><Link href="/press"><span className="hover:text-[#00FFF1] text-gray-500">Press</span></Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><Link href="/about-us"><span className="hover:text-[#00FFF1] text-gray-500">About Us</span></Link></li>
              <li><Link href="/pricing"><span className="hover:text-[#00FFF1] text-gray-500">Pricing</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-[#00FFF1] text-gray-500">Careers</span></Link></li>
              <li><Link href="/legal"><span className="hover:text-[#00FFF1] text-gray-500">Legal</span></Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Social</h3>
            <ul>
              <li><Link href="https://twitter.com"><span className="hover:text-[#00FFF1] text-gray-500">X (Twitter)</span></Link></li>
              <li><Link href="https://discord.com"><span className="hover:text-[#00FFF1] text-gray-500">Discord</span></Link></li>
              <li><Link href="https://linkedin.com"><span className="hover:text-[#00FFF1] text-gray-500">LinkedIn</span></Link></li>
              <li><Link href="https://youtube.com"><span className="hover:text-[#00FFF1] text-gray-500">YouTube</span></Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-8">
          <p>© 2024 LumiNifty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
