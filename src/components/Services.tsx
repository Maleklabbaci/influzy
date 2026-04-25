export default function Services() {
  const services = [
    {
      title: 'Influencer Matching',
      description: 'Our AI-powered algorithm connects you with influencers that perfectly align with your brand values and target audience.',
      icon: '🎯',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Campaign Management',
      description: 'End-to-end campaign management from strategy to execution. We handle everything so you can focus on results.',
      icon: '📊',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Content Creation',
      description: 'Work with talented creators who produce authentic, engaging content that resonates with your audience.',
      icon: '✨',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track your campaign performance with real-time analytics and detailed reports that measure ROI and engagement.',
      icon: '📈',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Brand Partnerships',
      description: 'Build long-term relationships with influencers who become authentic brand ambassadors.',
      icon: '🤝',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Social Strategy',
      description: 'Get expert guidance on social media strategy and maximize your influencer marketing impact.',
      icon: '🚀',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run successful influencer marketing campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 text-3xl group-hover:scale-110 transition`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
