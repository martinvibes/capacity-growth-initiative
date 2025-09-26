import PageTemplate from '../../_components/PageTemplate';

export default function VolunteerPage() {
  return (
    <PageTemplate title="Volunteer With Us">
      <div className="space-y-8">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900">Join Our Volunteer Team</h2>
          <p className="text-gray-600">
            Make a difference in your community by joining our team of dedicated volunteers. 
            We offer various opportunities to contribute your skills and time to meaningful projects.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Community Outreach',
              description: 'Help us connect with local communities and spread awareness about our programs.',
              commitment: '4-8 hours/month'
            },
            {
              title: 'Event Support',
              description: 'Assist in organizing and running our community events and workshops.',
              commitment: 'Weekends, 6-8 hours/event'
            },
            {
              title: 'Mentorship',
              description: 'Share your expertise by mentoring individuals in your field of knowledge.',
              commitment: '2-4 hours/month'
            },
            {
              title: 'Administrative Support',
              description: 'Help with office tasks, data entry, and organizational support.',
              commitment: 'Flexible hours'
            }
          ].map((role, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-green-700">{role.title}</h3>
              <p className="mt-2 text-gray-600">{role.description}</p>
              <div className="mt-3 text-sm text-gray-500">
                <span className="font-medium">Time Commitment:</span> {role.commitment}
              </div>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800">Why Volunteer With Us?</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Make a tangible impact in your community</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Gain valuable experience and skills</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Join a network of like-minded individuals</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Flexible scheduling to fit your availability</span>
            </li>
          </ul>
          <div className="mt-6">
            <p className="text-gray-600">
              Have questions? Contact our Volunteer Coordinator at{' '}
              <a href="mailto:volunteer@capacitygrowth.org" className="text-green-700 hover:underline">
                volunteer@capacitygrowth.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
