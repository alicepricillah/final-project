// SoftMaxLandingPage.js - Services Section (Section 4)

// Note: These constants should be defined at the top of your file.
const CLEANING_IMAGE = 'cleaning.jpg'; 
const SPRAYING_IMAGE = 'spraying.jpg';
const ECO_FRIENDLY_IMAGE = 'eco.jpg';

<section id="services" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-yellow-400">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Service Card 1: Cleaning */}
            <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:bg-gray-700 transition duration-300">
                <img src={CLEANING_IMAGE} alt="Cleaning service icon" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
                <h3 className="text-2xl font-semibold mb-3">Cleaning</h3>
                <p className="text-gray-400">Professional cleaning services for homes and offices using eco-friendly products.</p>
            </div>
            
            {/* Service Card 2: Spraying & Pest Control */}
            <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:bg-gray-700 transition duration-300">
                <img src={SPRAYING_IMAGE} alt="Spraying and pest control service icon" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
                <h3 className="text-2xl font-semibold mb-3">Spraying & Pest Control</h3>
                <p className="text-gray-400">Safe and effective fumigation and pest control services for residential and commercial spaces.</p>
            </div>
            
            {/* Service Card 3: Eco-Friendly Products */}
            <div className="p-8 bg-gray-800 rounded-xl shadow-xl hover:bg-gray-700 transition duration-300">
                <img src={ECO_FRIENDLY_IMAGE} alt="Eco-Friendly products icon" className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
                <h3 className="text-2xl font-semibold mb-3">Eco-Friendly Products</h3>
                <p className="text-gray-400">We use safe, eco-friendly cleaning and fumigation products to protect your family, pets, and environment.</p>
            </div>
        </div>
    </div>
</section>