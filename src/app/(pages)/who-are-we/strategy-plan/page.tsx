import PageTemplate from '../../_components/PageTemplate';

export default function StrategyPlanPage() {
  return (
    <PageTemplate title="Strategy Plan">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Strategic Direction</h2>
        <p>Our comprehensive strategy for sustainable impact and community development.</p>
        
        <div className="space-y-6 mt-8">
          <div className="p-6 bg-green-50 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800">Vision 2025</h3>
            <p className="mt-2 text-gray-700">Expanding our reach to empower 1 million people by 2025 through innovative programs and partnerships.</p>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">Key Focus Areas</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-700">
              <li>Community Development</li>
              <li>Education & Training</li>
              <li>Sustainable Solutions</li>
              <li>Partnership Building</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
