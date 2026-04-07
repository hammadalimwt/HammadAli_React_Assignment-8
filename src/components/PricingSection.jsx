import PricingCard from "./PricingCard";

function PricingSection() {
  const plans = [
    {
      planName: "Starter",
      price: "$14 / month",
      features: ["3 Projects", "Up to 3 team members", "Basic analytics"],
      buttonText: "Start Free",
    },
    {
      planName: "Pro",
      price: "$34 / month",
      features: [
        "Unlimited projects",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
      ],
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      planName: "Enterprise",
      price: "$99 / month",
      features: [
        "Unlimited projects",
        "Dedicated account manager",
        "Custom integrations",
        "Security review",
      ],
      buttonText: "Contact Sales",
      children: "Priority support included",
    },
  ];

  return (
    <section className="px-4 pb-16 bg-blue-50">
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.planName} {...plan}>
            {plan.children}
          </PricingCard>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
