// SoftMaxLandingPage.js - Navigation Bar (Section 1)

// Note: These constants should be defined at the top of your file.
const LOGO_IMAGE = 'logo.jpg'; 

<nav className="bg-green-700 text-white p-4 shadow-lg fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Brand Name */}
        <a href="#top" className="flex items-center space-x-2">
            <img src={LOGO_IMAGE} alt="SoftMax Logo" className="w-16 h-16 object-contain" />
            <span className="text-2xl font-bold">SoftMax Fumigation</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#about" className="hover:text-yellow-400 transition duration-300">About</a>
            <a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a>
            <a href="#contact" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300">Get a Quote</a>
        </div>
        
        {/* Mobile Menu Button (Functionality needs JavaScript/React state) */}
        <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </div>
</nav>
