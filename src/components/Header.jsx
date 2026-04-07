function Header() {
  return (
    <header className="text-center py-16 px-4">
      <p className="inline-flex items-center gap-2 mb-4 text-indigo-700 uppercase tracking-wider text-sm font-bold">
        Pricing
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
        Simple SaaS pricing for growing teams
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Pick a plan to scale your product and collaborate with your team.
      </p>
    </header>
  );
}

export default Header;
