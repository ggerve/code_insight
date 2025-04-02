import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Visual Roadmaps
            </h1>
            <p className="text-xl mb-8">
              Detailed visual roadmaps for both the MVP hackathon implementation and the full scope of the Agentic Code Analysis Application.
            </p>
          </div>
        </div>
      </section>

      {/* MVP Roadmap Section */}
      <section id="mvp" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">MVP Roadmap (2-Day Hackathon)</h2>
            <p className="text-lg mb-8">
              This roadmap visualizes the implementation plan for a 2-3 developer team working over a 2-day hackathon. It breaks down tasks by hour and shows the parallel work streams required to deliver a functional MVP.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/images/mvp_roadmap.png" 
                  alt="MVP Roadmap" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 1 Milestones</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hour 2:</strong> Project Setup Complete</li>
                  <li><strong>Hour 5:</strong> Core Components Ready</li>
                  <li><strong>Hour 8:</strong> Basic Analysis Working</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Day 2 Milestones</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hour 3:</strong> Documentation & UI Enhanced</li>
                  <li><strong>Hour 6:</strong> Visualization & HITL Ready</li>
                  <li><strong>Hour 8:</strong> MVP Complete</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Work Streams</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Setup & Initialization:</strong> Project repository, environment configuration</li>
                  <li><strong>Frontend Development:</strong> UI components, visualizations, user interactions</li>
                  <li><strong>Backend Development:</strong> API endpoints, repository handling, data storage</li>
                  <li><strong>AI/Agent Development:</strong> LLM integration, analysis logic, documentation generation</li>
                  <li><strong>Integration & Testing:</strong> End-to-end testing, bug fixing, demo preparation</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/implementation#mvp">
                <Button variant="outline">View Detailed Implementation Plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full Scope Roadmap Section */}
      <section id="full-scope" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Full Scope Roadmap</h2>
            <p className="text-lg mb-8">
              This roadmap illustrates the six development phases for the complete Agentic Code Analysis Application, spanning approximately 12-18 months of development.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/images/full_scope_roadmap.png" 
                  alt="Full Scope Roadmap" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Development Phases</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">Phase 1: Foundation (1-2 Months)</h4>
                    <p>Establishing a solid foundation for the application, refining the MVP, and implementing core infrastructure.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Phase 2: Core Features (2-3 Months)</h4>
                    <p>Implementing the core features of the full scope application, building upon the foundation established in Phase 1.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Phase 3: Advanced Agents & HITL (2-3 Months)</h4>
                    <p>Implementing advanced agent capabilities and sophisticated human-in-the-loop interactions.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Phase 4: Collaboration & Integration (2-3 Months)</h4>
                    <p>Implementing team collaboration features and integration capabilities with external systems.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Phase 5: Enterprise Features (2-3 Months)</h4>
                    <p>Implementing enterprise-grade features for large organizations.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">Phase 6: Innovation & Refinement (Ongoing)</h4>
                    <p>Continuous innovation, refinement, and expansion of the application's capabilities.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Month 2:</strong> Foundation Complete</li>
                  <li><strong>Month 5:</strong> Core Features Complete</li>
                  <li><strong>Month 8:</strong> Advanced Agents Complete</li>
                  <li><strong>Month 11:</strong> Collaboration Features Complete</li>
                  <li><strong>Month 14:</strong> Enterprise Features Complete</li>
                  <li><strong>Month 17+:</strong> Continuous Innovation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Team Scaling</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Phase 1:</strong> 7 team members</li>
                  <li><strong>Phase 2:</strong> 12 team members</li>
                  <li><strong>Phase 3:</strong> 13 team members</li>
                  <li><strong>Phase 4:</strong> 14 team members</li>
                  <li><strong>Phase 5:</strong> 14 team members</li>
                  <li><strong>Phase 6:</strong> 14 team members</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/implementation#full-scope">
                <Button variant="outline">View Detailed Implementation Plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore the Technologies?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the cutting-edge agentic technologies that power the Agentic Code Analysis Application.
          </p>
          <Link href="/technologies">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              Explore Technologies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
