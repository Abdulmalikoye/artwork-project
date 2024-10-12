import React from "react";

const Quarterly = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pro Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-sm text-gray-600 mb-4">
            Ideal for those who've already got their website up and running and
            are seeking assistance to enhance and update it further.
          </p>
          <div className="text-3xl font-bold mb-4">
            $25/quarter
            <span className="text-sm font-normal text-gray-600">/month</span>
          </div>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Post up to 5 art pieces for sale.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">2% commission on each sale.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Basic analytics (views and clicks).
              </span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">No transaction fee.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Artist profile page.</span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 rounded-md bg-[#6271EB] text-white hover:bg-opacity-90 transition duration-300">
            Get started
          </button>
        </div>

        {/* Pro Plus Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pro Plus</h3>
          <p className="text-sm text-gray-600 mb-4">
            Ideal if you want to build or scale your Art fast, with full
            strategy.
          </p>
          <div className="text-3xl font-bold mb-4">
            $79/quarter
            <span className="text-sm font-normal text-gray-600">/month</span>
          </div>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Post up to 15 art pieces for sale.
              </span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">1.5% commission on each sale.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Advanced analytics (views, clicks, engagement, and sales
                tracking).
              </span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Priority support.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">No transaction fee.</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Artist profile page with a featured artist badge.
              </span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Access to exclusive marketing resources and guides.
              </span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 rounded-md bg-[#6271EB] text-white hover:bg-opacity-90 transition duration-300">
            Get started
          </button>
        </div>

        {/* Custom Plan */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Custom</h3>
          <p className="text-sm text-gray-600 mb-4">
            If these plans don't fit, let's create one that suits. Customize
            your subscription for a perfect fit, major or minor.
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">
                Everything in design & development
              </span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Strategy workshop</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Priority support</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Multiple tasks at once</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Ongoing autonomous A/B testing</span>
            </li>
            <li className="flex items-center mb-2">
              {/* <Check size={20} className="text-purple-600 mr-2" /> */}
              <span className="text-sm">Advanced custom development</span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 rounded-md bg-indigo-900 text-white hover:bg-opacity-90 transition duration-300">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quarterly;
