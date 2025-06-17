import React, { useState } from "react";

const RegionalMarkets = () => {
    return(
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        We Serve These Markets
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 font-bold text-xl">TX</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">ERCOT Market</h3>
          <p className="text-gray-700">
            Deep expertise in Texas grid interconnection and market dynamics
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 font-bold text-xl">MW</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Midwest ISO</h3>
          <p className="text-gray-700">
            Proven track record in MISO capacity and ancillary markets
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 font-bold text-xl">SPP</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">
            Southwest Power Pool
          </h3>
          <p className="text-gray-700">
            Regional knowledge of SPP requirements and opportunities
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default RegionalMarkets;