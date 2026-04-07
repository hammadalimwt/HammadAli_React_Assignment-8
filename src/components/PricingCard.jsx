function PricingCard({
  planName,
  price,
  features = [],
  buttonText = "Get Started",
  highlighted = false,
  children,
}) {
  return (
    <article
      className={`flex flex-col gap-6 p-8 bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 ${highlighted ? "border-blue-500" : ""}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{planName}</h2>
          <p className="text-2xl font-bold text-gray-900 mt-3">{price}</p>
        </div>
        {highlighted && (
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        )}
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-600">
            <span className="text-green-600 text-lg">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {children && (
        <div className="p-4 bg-blue-50 rounded-lg text-blue-700 text-sm">
          {children}
        </div>
      )}

      <button className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
        {buttonText}
      </button>
    </article>
  );
}

export default PricingCard;
