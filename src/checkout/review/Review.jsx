import React from "react";

const Review = ({ Token }) => {
  return (
    <div className="w-full p-4 shadow-sm sm:p-8 bg-white">
      <div className="flex items-center justify-between mb-4 ">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          Food Summary
        </h5>
      </div>
      <div className="flow-root">
        {Token.line_items.map((d) => (
          <ul role="list" className="divide-y divide-gray-200" key={d.id}>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={d.image.url}
                    alt={d.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{d.name}</p>
                  <p className="text-sm text-gray-900 truncate ">
                    Quantity : {d.quantity}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  {d.price.formatted_with_symbol}
                </div>
              </div>
            </li>
          </ul>
        ))}
        <h1 className="text-xl font-bold leading-none text-gray-900 my-5 flex justify-end">
          Total price : {Token.total.formatted_with_symbol}
        </h1>
      </div>
    </div>
  );
};

export default Review;
