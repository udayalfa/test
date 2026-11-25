const AboutUs = () => {
  return (
    <div className="w-full text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">
          Celebrating Excellence with Every Award
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Jagdish Industries is a trusted name in trophies, medals, shields,
          and customized awards — proudly honoring achievements for generations.
        </p>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-custom-yellow py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Signature Creations
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Trophies", img: "/img/trophy.png" },
            { title: "Medals", img: "/img/medal.png" },
            { title: "Shields", img: "/img/shield.png" },
            { title: "Awards", img: "/img/award.png" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain p-4"
              />
              <h3 className="py-3 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAMILY / LEGACY */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-24 py-20 bg-white">
        <div className="md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/img/family.png"
            alt="Jagdish Industries Family"
            className="w-full h-auto object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">
            A Legacy Built on Trust & Craftsmanship
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jagdish Industries began as a small family-run workshop and has grown
            into a respected name in trophies and awards. Our journey is rooted
            in honesty, skilled craftsmanship, and long-standing relationships
            with schools, institutions, and organizations.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission & Values</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Our mission is simple — to honor achievements with products that
          reflect pride, quality, and meaning. We value precision, commitment,
          transparency, and customer satisfaction in every piece we create.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Jagdish Industries
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "Decades of Experience",
            "Premium Quality Materials",
            "Custom Designs Available",
            "Trusted by Institutions",
          ].map((point) => (
            <div
              key={point}
              className="p-6 rounded-xl border hover:shadow-md transition"
            >
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
