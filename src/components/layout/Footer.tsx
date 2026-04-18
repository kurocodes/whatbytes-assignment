export default function Footer() {
  return (
    <footer className="w-full bg-[#051C3A] px-8 pt-16 pb-12 mt-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        
        {/* Filters Column */}
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-bold mb-6">Filters</h3>
          <div className="flex gap-4 text-white/80 text-[15px] mb-8">
            <a href="#" className="hover:text-white transition-colors">All</a>
            <a href="#" className="hover:text-white transition-colors">electronics</a>
          </div>
          <p className="text-white/60 text-[13px] mt-auto">© 2024 American</p>
        </div>

        {/* About Us Column */}
        <div>
          <h3 className="text-xl font-bold mb-6">About Us</h3>
          <div className="flex flex-col gap-4 text-white/80 text-[15px]">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Follow Us Column */}
        <div>
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#0856AA] flex items-center justify-center hover:bg-[#0b64c4] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0856AA] flex items-center justify-center hover:bg-[#0b64c4] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#0856AA] flex items-center justify-center hover:bg-[#0b64c4] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
