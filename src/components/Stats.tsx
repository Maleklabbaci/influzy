export default function Stats() {
  const stats = [
    { value: '10M+', label: 'Total Reach', icon: '📈' },
    { value: '$50M+', label: 'Campaign Value', icon: '💰' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '24/7', label: 'Support', icon: '🎯' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
