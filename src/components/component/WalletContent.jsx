import React from "react";
import profileimg from "../../img/profileimg.png";

const WalletContent = () => {
  return (
    <div className="w-full p-8 bg-white min-h-screen flex md:flex-row flex-col justify-between  gap-8">
      {/* Wallet Summary Section */}
      <div className="md:w-[70%] flex flex-col gap-10">
        <section>
          <h2 className="text-3xl font-bold mb-6">Wallet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Total Spending Card */}

            <div className="bg-white border border-[#F3F3F3] p-6 rounded-lg shadow-sm flex flex-col md:w-full ">
              <span className="text-sm text-gray-500">Total Spending</span>
              <span className="text-2xl font-bold mt-2">$432,215.32</span>
              <span className="text-sm text-green-500 mt-1">
                +2.4% • May 17, 2022
              </span>
            </div>

            {/* Total Income Card */}
            <div className="bg-white border border-[#F3F3F3] p-6 rounded-lg shadow-sm flex flex-col w-full">
              <span className="text-sm text-gray-500">Total Income</span>
              <span className="text-2xl font-bold mt-2">$21,579.22</span>
              <span className="text-sm text-red-500 mt-1">
                -2.32% • May 17, 2022
              </span>
            </div>

            {/* Total Savings Card */}
            <div className="bg-white border border-[#F3F3F3] p-6 rounded-lg shadow-sm flex flex-col w-full">
              <span className="text-sm text-gray-500">Total Saving</span>
              <span className="text-2xl font-bold mt-2">$68,483.16</span>
              <span className="text-sm text-green-500 mt-1">
                +2.4% • May 17, 2022
              </span>
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className=" ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <a href="#!" className="text-blue-600 text-sm">
              View All
            </a>
          </div>
          <div className="bg-white border border-[#F3F3F3] p-6 rounded-lg shadow-sm overflow-x-auto w-full">
            <table className="min-w-full">
              <thead>
                <tr className="bg-white text-gray-600 text-left">
                  <th className="px-4 py-3 text-sm font-medium">Item List</th>
                  <th className="px-4 py-3 text-sm font-medium">Status</th>
                  <th className="px-4 py-3 text-sm font-medium">Open Price</th>
                  <th className="px-4 py-3 text-sm font-medium">Your Offer</th>
                  <th className="px-4 py-3 text-sm font-medium">Time Left</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {/* Example Item Row */}
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium">Peachy Puch#22</div>
                    <div className="text-sm text-gray-500">
                      From Mindblowstudio
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                      Activated
                    </span>
                  </td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">5.62 ETH</td>
                  <td className="px-4 py-4">1h 19m</td>
                </tr>

                {/* Additional Rows: Map or hardcode based on your data */}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Wallet Details and Transaction History Section */}
      <section className="flex flex-col gap-6 md:w-[30%]">
        {/* Wallet Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col space-y-4 lg:col-span-1">
          <h3 className="text-lg font-semibold">Wallet</h3>
          <div class="card-wallet">
            <div class="card__side card__side_front">
              <div class="flex__1">
                <p class="card__side__name-bank">monobank</p>
                <div class="card__side__chip"></div>
                <p class="card__side__name-person">PAVLO MATVIIENKO</p>
              </div>
            </div>
            <div class="card__side card__side_back">
              <div class="card__side__black"></div>
              <p class="card__side__number">XXXX XXXX XXXX XXXX</p>
              <div class="flex__2">
                <p class="card__side__other-numbers card__side__other-numbers_1">
                  XX/XX
                </p>
                <p class="card__side__other-numbers card__side__other-numbers_2">
                  XXX
                </p>
                <div class="card__side__photo">
                  <img src={profileimg} alt="" />
                </div>
                <div class="card__side__debit"></div>
              </div>
              <p class="card__side__other-info">
                MONOBANK.UA | 0 800 205 205 | АТ "УНІВЕРСАЛ БАНК". ЛІЦЕНЗІЯ НБУ
                №92 ВІД 20.01.1994 | PCE PC100650 WORLD DEBIT
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold">$185,424.52</h4>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Add New Card
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className=" bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
          <div className="space-y-4">
            {/* Transaction Item */}
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                  {/* Replace with an icon */}
                  <span className="text-blue-600 text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Exchange to ETH</h4>
                  <p className="text-xs text-gray-500">Today at 4:13 PM</p>
                </div>
              </div>
              <p className="text-sm font-medium">2.22 ETH</p>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                  {/* Replace with an icon */}
                  <span className="text-blue-600 text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Exchange to ETH</h4>
                  <p className="text-xs text-gray-500">Today at 4:13 PM</p>
                </div>
              </div>
              <p className="text-sm font-medium">2.22 ETH</p>
            </div>
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                  {/* Replace with an icon */}
                  <span className="text-blue-600 text-xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Exchange to ETH</h4>
                  <p className="text-xs text-gray-500">Today at 4:13 PM</p>
                </div>
              </div>
              <p className="text-sm font-medium">2.22 ETH</p>
            </div>

            {/* Additional Transaction Items can be repeated here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletContent;
