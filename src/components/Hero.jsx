// SoftMaxLandingPage.js - Hero Section (Section 2)

// Note: These constants should be defined at the top of your file.
const HERO_BACKGROUND_IMAGE = 'image_4937c2.jpg';
const LOGO_IMAGE = 'logo.jpg'; 

<section 
    className="relative flex flex-col items-center justify-center min-h-screen pt-24 bg-cover bg-center"
    style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
>
    {/* Dark Overlay (bg-gray-700 opacity-80) */}
    <div className="absolute inset-0 bg-gray-700 opacity-80"></div>
    
    <div className="container mx-auto px-6 text-center z-10 py-32 md:py-0">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Make Your Home <span className="text-yellow-400">Pest Free</span>
        </h1>

        {/* Prominent Logo/Branding Image */}
        <img src={LOGO_IMAGE} alt="SoftMax Fumigation" className="w-48 md:w-64 h-auto object-contain mx-auto mb-6 rounded-xl shadow-2xl" />

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto">
            Professional cleaning and fumigation services to keep your home and workplace safe from pests and bacteria.
        </p>

        <a href="#contact" className="bg-yellow-500 text-black text-xl font-bold px-10 py-4 rounded-full shadow-2xl hover:bg-yellow-400 transition duration-300 transform hover:scale-105">
            Get a Free Quote
        </a>
    </div>
</section>