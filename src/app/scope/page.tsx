import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ScopePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Scope and Requirements
            </h1>
            <p className="text-xl mb-8">
              A comprehensive overview of the Agentic Code Analysis Application's scope, features, and requirements for both MVP and full implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg mb-6">
              The Agentic Code Analysis Application is a web-based platform that leverages AI agents to analyze user-provided codebases. The application aims to provide comprehensive insights into code structure, quality, and potential improvements, enabling developers and organizations to better understand, document, and enhance their software projects.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Core Value Proposition</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Automated Code Understanding:</strong> Quickly grasp the essence of unfamiliar codebases</li>
              <li><strong>Enhanced Documentation:</strong> Generate comprehensive documentation from existing code</li>
              <li><strong>Quality Improvement:</strong> Identify potential issues and suggest improvements</li>
              <li><strong>Visual Representation:</strong> Create diagrams that illustrate code structure and relationships</li>
              <li><strong>Time Efficiency:</strong> Reduce the time required to onboard new developers or evaluate codebases</li>
              <li><strong>Interactive Analysis:</strong> Engage with the AI agent to clarify and refine analysis results</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Target Users</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li><strong>Software Developers:</strong> Seeking to understand new codebases or improve existing ones</li>
              <li><strong>Technical Managers:</strong> Evaluating code quality and project structure</li>
              <li><strong>Open Source Contributors:</strong> Quickly understanding project architecture before contributing</li>
              <li><strong>Code Reviewers:</strong> Gaining insights to provide more effective reviews</li>
              <li><strong>Technical Recruiters:</strong> Evaluating candidate code samples</li>
              <li><strong>Educational Institutions:</strong> Teaching code analysis and best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MVP Scope Section */}
      <section id="mvp" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">MVP Scope (Hackathon Implementation)</h2>
            <p className="text-lg mb-8">
              The Minimum Viable Product (MVP) is designed to be implemented during a 2-day hackathon with 2-3 developers. It focuses on core functionality while maintaining a realistic scope.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">1. Code Upload & Repository Integration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>File upload interface for code samples</li>
                  <li>GitHub repository URL integration</li>
                  <li>Basic repository cloning functionality</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">2. Basic Code Analysis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project description generation</li>
                  <li>Technology stack identification</li>
                  <li>High-level architecture overview</li>
                  <li>Basic code quality assessment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">3. Documentation Generation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>README.md generation/enhancement</li>
                  <li>Basic function and class documentation</li>
                  <li>Simple usage examples</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">4. Visualization</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic project structure diagram</li>
                  <li>Simple dependency graph</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">5. Human-in-the-Loop (HITL) Mechanism</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Simple chat interface for clarification questions</li>
                  <li>Ability to refine analysis based on user feedback</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">6. User Interface</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clean, responsive web interface</li>
                  <li>Analysis results display</li>
                  <li>Basic user authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Scope Section */}
      <section id="full-scope" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Full Scope (Post-Hackathon Development)</h2>
            <p className="text-lg mb-8">
              The full scope implementation extends the MVP with advanced features and capabilities for a comprehensive code analysis solution.
            </p>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">1. Advanced Repository Integration</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multi-repository analysis</li>
                  <li>Branch comparison</li>
                  <li>Commit history analysis</li>
                  <li>Integration with GitLab, Bitbucket, and other platforms</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">2. Comprehensive Code Analysis</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deep code structure analysis</li>
                  <li>Design pattern identification</li>
                  <li>Security vulnerability detection</li>
                  <li>Performance bottleneck identification</li>
                  <li>Code complexity metrics</li>
                  <li>Test coverage analysis</li>
                  <li>Coding standards compliance</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">3. Enhanced Documentation Generation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive API documentation</li>
                  <li>Architectural decision records (ADRs)</li>
                  <li>Deployment guides</li>
                  <li>Contribution guidelines</li>
                  <li>Customizable documentation templates</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">4. Advanced Visualization</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Interactive architecture diagrams</li>
                  <li>Call graphs</li>
                  <li>Data flow diagrams</li>
                  <li>State transition diagrams</li>
                  <li>Class hierarchy visualizations</li>
                  <li>Timeline visualizations for project evolution</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">5. Intelligent Improvement Suggestions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refactoring recommendations</li>
                  <li>Design improvement suggestions</li>
                  <li>Performance optimization strategies</li>
                  <li>Security enhancement recommendations</li>
                  <li>Test coverage improvement suggestions</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">6. Advanced HITL Capabilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Context-aware questioning</li>
                  <li>Collaborative analysis refinement</li>
                  <li>Knowledge retention across sessions</li>
                  <li>Multi-stakeholder collaboration</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">7. Team Collaboration Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Shared projects and analyses</li>
                  <li>Commenting and discussion</li>
                  <li>Analysis version control</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">8. Integration Capabilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CI/CD pipeline integration</li>
                  <li>IDE plugins</li>
                  <li>Issue tracker integration</li>
                  <li>Knowledge base integration</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">9. Analytics and Reporting</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Code quality trends</li>
                  <li>Team performance metrics</li>
                  <li>Customizable dashboards</li>
                  <li>Exportable reports</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">10. Enterprise Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>On-premises deployment option</li>
                  <li>SSO integration</li>
                  <li>Audit logging</li>
                  <li>Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the technical architecture and implementation plans for the Agentic Code Analysis Application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/architecture">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                View Architecture
              </Button>
            </Link>
            <Link href="/implementation">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Implementation Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
