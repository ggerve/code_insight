import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Understand Any Codebase in Minutes, Not Months
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              AI-Powered Code Analysis That Transforms How Developers Work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Analyze Your Code Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 text-white border-white">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Transform Your Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Instant Understanding</h3>
              <p className="text-center text-gray-600">
                Visualize project structure and dependencies to quickly grasp any codebase.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Comprehensive Documentation</h3>
              <p className="text-center text-gray-600">
                Generate detailed documentation automatically from your existing code.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Actionable Insights</h3>
              <p className="text-center text-gray-600">
                Receive intelligent improvement suggestions to enhance your code quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Project Overview
            </h2>
            <p className="text-lg text-center mb-12">
              The Agentic Code Analysis Application is a web-based platform that leverages AI agents to analyze user-provided codebases, providing valuable insights and documentation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">MVP Scope (Hackathon)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Code Upload & Repository Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Basic Code Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Documentation Generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Human-in-the-Loop (HITL) Mechanism</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/scope#mvp">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Full Scope</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Advanced Repository Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Comprehensive Code Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Enhanced Documentation Generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Advanced Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-1">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Team Collaboration Features</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/scope#full-scope">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Implementation Roadmaps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">MVP Roadmap (2-Day Hackathon)</h3>
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <Image 
                  src="/images/mvp_roadmap.png" 
                  alt="MVP Roadmap" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4">
                A detailed implementation plan for a 2-3 developer team working over a 2-day hackathon.
              </p>
              <Link href="/roadmap#mvp">
                <Button variant="outline" size="sm">View Full Roadmap</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Full Scope Roadmap</h3>
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <Image 
                  src="/images/full_scope_roadmap.png" 
                  alt="Full Scope Roadmap" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive six-phase implementation approach for the complete solution.
              </p>
              <Link href="/roadmap#full-scope">
                <Button variant="outline" size="sm">View Full Roadmap</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Cutting-Edge Agentic Technologies
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-12">
            The application leverages state-of-the-art AI agent technologies to deliver sophisticated code analysis capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Large Language Models</h3>
              <p className="text-gray-600">
                Advanced models like GPT-4o and Claude 3 Opus for code understanding and generation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Agent Frameworks</h3>
              <p className="text-gray-600">
                LangChain, AutoGen, and CrewAI for building sophisticated multi-agent systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Vector Databases</h3>
              <p className="text-gray-600">
                Pinecone and Weaviate for storing code embeddings and enabling semantic search.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Code Analysis Tools</h3>
              <p className="text-gray-600">
                Tree-sitter, Semgrep, and other tools for detailed code parsing and analysis.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/technologies">
              <Button>Explore Technologies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Development Process Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are saving time and improving code quality with our Agentic Code Analysis Application.
          </p>
          <Button size="lg" className="text-lg bg-white text-primary hover:bg-white/90">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
