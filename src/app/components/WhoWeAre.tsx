import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <section className="max-w-5xl md:max-w-full mx-auto md:px-4 py-5">
      <h2 className="text-2xl md:text-[40px] font-bold text-center mb-6">
        Who We Are
      </h2>
      <div className="space-y-4 leading-relaxed md:text-2xl text-lg">
        <p>
          Capacity Growth Initiative (CGI) is a dedicated organisation committed
          to unlocking the inherent potential within individuals and
          communities. We focus on providing essential skills, resources, and
          opportunities necessary for sustainable development.
        </p>
        <p className="md:my-8 my-3">
          Our approach is centered around innovative capacity-building programs
          and strategic partnerships designed to empower leaders, foster
          resilience, and drive transformative change across all sectors of
          society.
        </p>
        <p className="md:my-8 my-4">
          At CGI, we focus on developing individuals and communities in three
          key areas:
          <br />
          <strong>1. Business</strong> – Equipping individuals with
          entrepreneurial skills and business acumen to drive economic growth
          and innovation.
          <br />
          <strong>2. Leadership</strong> – Nurturing strong and visionary
          leaders capable of inspiring positive change and spearheading
          impactful initiatives.
          <br />
          <strong>3. Tech</strong> – Providing cutting-edge technological skills
          and resources to empower individuals and communities to thrive in a
          rapidly evolving digital landscape.
        </p>
        <p>
          Our goal is to become the largest nonprofit capacity development NGO
          in Africa, with a network of alumni leading top sectors across the
          continent and driving transformative change.
        </p>
        <p>
          Through these efforts, CGI strives to create a future where empowered
          communities lead the way in shaping a more equitable, prosperous, and
          resilient world.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
