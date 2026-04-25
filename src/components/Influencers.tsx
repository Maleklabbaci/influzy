export default function Influencers() {
  const categories = [
    { name: 'Fashion & Beauty', count: '2,500+', icon: '👗', color: 'from-pink-500 to-rose-500' },
    { name: 'Tech & Gaming', count: '1,800+', icon: '🎮', color: 'from-blue-500 to-cyan-500' },
    { name: 'Food & Lifestyle', count: '3,200+', icon: '🍜', color: 'from-orange-500 to-red-500' },
    { name: 'Fitness & Health', count: '1,500+', icon: '💪', color: 'from-green-500 to-emerald-500' },
    { name: 'Travel & Adventure', count: '900+', icon: '✈️', color: 'from-purple-500 to-indigo-500' },
    { name: 'Business & Finance', count: '600+', icon: '💼', color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <div id="influencers" className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Influencer Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access thousands of verified influencers across all major niches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-500">{category.count} influencers</p>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition"
          >
            Browse All Influencers
          </a>
        </div>
      </div>
    </div>
  );
}
