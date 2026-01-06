const FeatureSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-white mt-5 py-10 px-4 text-center text-gray-900">
      {/* Direct Inquiry */}
      <div className="w-64">
        <div className="mb-2 flex justify-center">
          <img src="/img/inquiry.svg" alt="Enquiry" className="h-8" />
        </div>
        <h3 className="font-semibold text-xl">Enquiry-Based Ordering</h3>
        <p className="text-sm mt-2">
          Found a piece you love?{" "}
          <span className="font-medium">Email or contact us</span> to get
          details, pricing, and place your order directly with our expert team.
        </p>
      </div>

      {/* Personalized Service */}
      <div className="w-64">
        <div className="mb-2 flex justify-center">
          <img
            src="/img/consultation.svg"
            alt="Personal Service"
            className="h-8"
          />
        </div>
        <h3 className="font-semibold text-xl">One-on-One Consultation</h3>
        <p className="text-sm mt-2">
          We offer personalized recommendations and guidance for every
          inquiry—get custom options, size help, and style advice from our
          jewelry experts.
        </p>
      </div>

      {/* Quality & Transparency */}
      <div className="w-64">
        <div className="mb-2 flex justify-center">
          <img src="/img/assurance.svg" alt="Assured Quality" className="h-8" />
        </div>
        <h3 className="font-semibold text-xl">Assured Craftsmanship</h3>
        <p className="text-sm mt-2">
          All pieces are handmade by skilled artisans using skin-safe and
          certified materials. Authenticity and transparent details are always
          provided.
        </p>
      </div>

      {/* Customization */}
      <div className="w-64">
        <div className="mb-2 flex justify-center">
          <img src="/img/customization.svg" alt="Customization" className="h-8" />
        </div>
        <h3 className="font-semibold text-xl">Customization Available</h3>
        <p className="text-sm mt-2">
          Request personalized engravings, custom gemstone settings, or size
          changes. We craft each order as per your unique preferences.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
