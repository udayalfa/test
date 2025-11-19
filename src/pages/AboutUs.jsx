const AboutUs = () => {
  return (
    <div className="w-full text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-serif mb-4">
          Our Legacy of Trust & Craftsmanship
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          From humble beginnings in 1974 to an enduring legacy at Abnash Jewellers — where every piece tells a story of devotion, integrity, and excellence in jewelry craftsmanship.
        </p>
      </section>

      {/* Gen 1 – Founding Era */}
      <section className="flex bg-custom-yellow flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-24 py-16 animate-fade-in-up">
        <div className="w-full md:w-[40%] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/img/gen1.png"
            alt="Founding Era"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full md:w-[60%] text-left md:pl-10">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">
            The Beginning – Gurdev Singh (1974)
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The story of Abnash Jewellers began with the vision and craftsmanship of
            **Sardar Gurdev Singh**, a man dedicated to creating jewelry that stood
            for integrity and artistry. Founded in 1974 at Gandhi Chowk, Sri Muktsar
            Sahib, his work quickly became known for fine quality and trust within
            the community.
          </p>
        </div>
      </section>

      {/* Gen 2 – Present Era */}
      <section className="flex bg-custom-yellow  flex-col md:flex-row-reverse items-center justify-between gap-10 px-6 md:px-24 py-16 animate-fade-in-up">
        <div className="w-full md:w-[40%] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/img/gen2.png"
            alt="Current Generation"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full md:w-[60%] text-left md:pr-10">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">
            Continuing the Legacy – Abnash Singh
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, under the leadership of **Mr. Abnash Singh**, the brand proudly
            carries forward its legacy. From traditional to modern designs, the
            boutique continues to symbolize honesty, artistry, and family heritage.
            Moving to our new home near Naka No. 6, Opp. Pandit Jai Dayal Street, we
            serve customers with the same principles of transparency and excellence
            that shaped our beginning.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-28 py-16 bg-gray-50 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-center">
          About Us
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center text-gray-700">
          Abnash Jewellers is a trusted destination for gold, silver, diamond, and
          custom jewelry that celebrates timeless beauty. Every design reflects
          our promise to create meaningful, lasting pieces that mark life's most
          precious moments — built on a foundation of trust, detail, and heart.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="px-6 md:px-28 py-16 bg-white text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6">Our Mission & Values</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our mission is to combine heritage with modern design, blending
          craftsmanship and creativity to craft jewelry that tells every
          family's story. Built on trust, transparency, and authenticity, our
          creations reflect both emotional and artistic value for generations
          to come.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
