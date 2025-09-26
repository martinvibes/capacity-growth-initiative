import PageTemplate from '../../_components/PageTemplate';

export default function PartnerWithUsPage() {
  return (
    <PageTemplate title="Partner With Us">
      <div className="space-y-12">
        <section className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Become a Valued Partner</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join hands with Capacity Growth Initiative to create lasting impact in our communities. 
            Together, we can drive positive change and build a better future for all.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: 'handshake',
                title: 'Strategic Alliances',
                description: 'Align your organization with our mission through meaningful partnerships.'
              },
              {
                icon: 'users',
                title: 'Community Impact',
                description: 'Reach and positively influence communities through our established networks.'
              },
              {
                icon: 'chart-bar',
                title: 'Shared Success',
                description: 'Measure and celebrate the collective impact of our collaboration.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">
                    {item.icon === 'handshake' && '🤝'}
                    {item.icon === 'users' && '👥'}
                    {item.icon === 'chart-bar' && '📊'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Partnership Opportunities</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Corporate Sponsorship',
                description: 'Support our programs through financial contributions and in-kind donations.',
                benefits: [
                  'Brand visibility across our platforms',
                  'Recognition in our annual report',
                  'Opportunities for employee engagement',
                  'Tax benefits'
                ]
              },
              {
                title: 'Program Collaboration',
                description: 'Co-create and implement initiatives that align with both our missions.',
                benefits: [
                  'Access to our expertise and networks',
                  'Joint program development',
                  'Shared resources and knowledge',
                  'Amplified impact'
                ]
              },
              {
                title: 'Research Partnership',
                description: 'Collaborate on research projects that inform policy and practice.',
                benefits: [
                  'Access to our research data',
                  'Joint publications and presentations',
                  'Influence in the field',
                  'Policy impact'
                ]
              },
              {
                title: 'Community Engagement',
                description: 'Engage your employees in meaningful volunteer opportunities.',
                benefits: [
                  'Team building activities',
                  'Skills-based volunteering',
                  'Corporate social responsibility fulfillment',
                  'Positive brand association'
                ]
              }
            ].map((opportunity, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-green-700">{opportunity.title}</h3>
                      <p className="mt-1 text-gray-600">{opportunity.description}</p>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can work together to create meaningful change. 
              Our partnership team is ready to explore opportunities for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Contact Our Team
              </a>
              <a
                href="/projects/partner-resources"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Download Partnership Kit
              </a>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Valued Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-gray-400 text-sm">Partner Logo {i}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
