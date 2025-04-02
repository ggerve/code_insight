import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              System Architecture
            </h1>
            <p className="text-xl mb-8">
              A comprehensive overview of the technical architecture for both the MVP and full scope implementations of the Agentic Code Analysis Application.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Architecture Overview</h2>
            <p className="text-lg mb-6">
              The Agentic Code Analysis Application is designed with a modular, scalable architecture that leverages cutting-edge AI technologies. The architecture is designed to evolve from a streamlined MVP implementation suitable for a hackathon to a comprehensive enterprise-grade solution.
            </p>
          </div>
        </div>
      </section>

      {/* MVP Architecture Section */}
      <section id="mvp" className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">MVP Architecture (Hackathon Implementation)</h2>
            <p className="text-lg mb-8">
              The MVP architecture is designed to be implementable within a 2-day hackathon by 2-3 developers while still delivering core functionality.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">High-Level Architecture Diagram</h3>
              <div className="p-4 bg-slate-100 rounded-lg mb-4 overflow-x-auto">
                <pre className="text-sm">
{`
+------------------------------------------+
|                                          |
|              Web Frontend                |
|     (Next.js + Tailwind + React Flow)    |
|                                          |
+--------------------+---------------------+
                     |
                     v
+--------------------+---------------------+
|                                          |
|               API Backend                |
|        (Python or Node.js/Express)       |
|                                          |
+----+---------------+---------------+-----+
   |                 |               |
   v                 v               v
+----+----+     +----+----+     +----+----+
|         |     |         |     |         |
|  GitHub |     |   LLM   |     | Storage |
|   API   |     | Service |     | Service |
|         |     |         |     |         |
+---------+     +---------+     +---------+`
}
                </pre>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">1. Web Frontend</h3>
                <p className="mb-3"><strong>Technology:</strong> Next.js with Tailwind CSS</p>
                <p className="mb-3"><strong>Key Components:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Upload Interface:</strong> For code files and GitHub repository URLs</li>
                  <li><strong>Analysis Dashboard:</strong> Displays analysis results</li>
                  <li><strong>Visualization Panel:</strong> Shows code structure diagrams</li>
                  <li><strong>Chat Interface:</strong> For HITL clarification</li>
                </ul>
                <p><strong>Responsibilities:</strong> User authentication, code/repository submission, result visualization, user interaction</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">2. API Backend</h3>
                <p className="mb-3"><strong>Technology:</strong> Python or Node.js with Express</p>
                <p className="mb-3"><strong>Key Components:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Authentication Service:</strong> Handles user login/registration</li>
                  <li><strong>Analysis Orchestrator:</strong> Coordinates the analysis workflow</li>
                  <li><strong>Repository Handler:</strong> Manages code repository operations</li>
                  <li><strong>Result Formatter:</strong> Structures analysis results for frontend consumption</li>
                </ul>
                <p><strong>Responsibilities:</strong> Request handling, authentication, analysis coordination, result formatting</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">3. GitHub API Integration</h3>
                <p className="mb-3"><strong>Technology:</strong> GitHub REST API</p>
                <p><strong>Responsibilities:</strong> Repository cloning, metadata retrieval, file structure mapping</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">4. LLM Service</h3>
                <p className="mb-3"><strong>Technology:</strong> GPT-4o or Claude 3 Opus via API</p>
                <p className="mb-3"><strong>Key Components:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>LangChain Framework:</strong> For agent orchestration</li>
                  <li><strong>Analysis Agent:</strong> Performs code analysis</li>
                  <li><strong>Documentation Agent:</strong> Generates documentation</li>
                </ul>
                <p><strong>Responsibilities:</strong> Code understanding, technology stack identification, documentation generation, improvement suggestions</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">5. Storage Service</h3>
                <p className="mb-3"><strong>Technology:</strong> MongoDB or PostgreSQL</p>
                <p><strong>Responsibilities:</strong> User data storage, analysis results persistence, repository metadata storage</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-4">Data Flow</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Code Submission:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>User uploads code or provides GitHub repository URL</li>
                    <li>Frontend sends request to API backend</li>
                    <li>Backend validates and processes the submission</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Repository Processing:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Backend connects to GitHub API</li>
                    <li>Clones repository or processes uploaded files</li>
                    <li>Extracts metadata and file structure</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Code Analysis:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Backend sends code to LLM Service</li>
                    <li>LLM Service analyzes code using agents</li>
                    <li>Results are returned to backend</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Result Presentation:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Backend formats results</li>
                    <li>Frontend displays analysis, documentation, and visualizations</li>
                    <li>User can interact with results and request clarifications</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">HITL Interaction:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>User asks clarification questions</li>
                    <li>Questions are sent to LLM Service</li>
                    <li>Responses are displayed to user</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Full Scope Architecture Section */}
      <section id="full-scope" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Full Scope Architecture</h2>
            <p className="text-lg mb-8">
              The full scope architecture expands on the MVP to create a robust, scalable, enterprise-grade solution.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">High-Level Architecture Diagram</h3>
              <div className="p-4 bg-slate-100 rounded-lg mb-4 overflow-x-auto">
                <pre className="text-sm">
{`
+--------------------------------------------------------------------+
|                                                                    |
|                            Web Frontend                            |
|      (Next.js + Tailwind + Advanced Visualization Libraries)       |
|                                                                    |
+----------------------------------+---------------------------------+
                                   |
                                   v
+----------------------------------+---------------------------------+
|                                                                    |
|                             API Gateway                            |
|                                                                    |
+------+------------------+-----------------+-----------------+------+
       |                  |                 |                 |
       v                  v                 v                 v
+------+------+    +------+------+   +------+------+   +------+------+
|             |    |             |   |             |   |             |
|   Auth      |    | Repository  |   |  Analysis   |   |     HITL    |
| Microservice|    | Microservice|   | Microservice|   | Microservice|
|             |    |             |   |             |   |             |
+------+------+    +------+------+   +------+------+   +------+------+
       |                  |                 |                 |
       v                  v                 v                 v
+------+------+    +------+------+   +------+------+   +------+------+
|             |    |             |   |             |   |             |
|   User DB   |    |  Code Store |   |  Vector DB  |   |   Chat DB   |
|             |    |             |   |             |   |             |
+-------------+    +-------------+   +-------------+   +-------------+
       |                  |                 |                 | 
       v                  v                 v                 v
+----------------------------------+---------------------------------+
|                                                                    |
|                             Agent System                           |
|                                                                    |
+------+------------------+-----------------+-----------------+------+
       |                  |                 |                 |
       v                  v                 v                 v
+----------------------------------+---------------------------------+
|                                                                    |
|                          External Services                         |
|                                                                    |
+----------------------------------+---------------------------------+
`}
                </pre>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">1. Web Frontend</h3>
                <p className="mb-3"><strong>Technology:</strong> Next.js with Tailwind CSS, D3.js, Cytoscape.js</p>
                <p className="mb-3"><strong>Key Components:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Project Dashboard:</strong> Management of multiple projects</li>
                  <li><strong>Advanced Visualization Suite:</strong> Interactive diagrams and visualizations</li>
                  <li><strong>Collaborative Interface:</strong> Multi-user collaboration features</li>
                  <li><strong>Analysis Configuration:</strong> Customizable analysis parameters</li>
                  <li><strong>Report Generator:</strong> Customizable report creation</li>
                </ul>
                <p><strong>Responsibilities:</strong> Rich user interface, advanced visualizations, collaboration features, report generation</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">2. API Gateway</h3>
                <p className="mb-3"><strong>Technology:</strong> Node.js with Express/Fastify</p>
                <p><strong>Responsibilities:</strong> Request routing, load balancing, rate limiting, API documentation</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">3. Microservices</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">a. Auth Microservice</p>
                    <p className="mb-2"><strong>Technology:</strong> Node.js with JWT, OAuth</p>
                    <p><strong>Responsibilities:</strong> User authentication, authorization, SSO integration, role management</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">b. Repository Microservice</p>
                    <p className="mb-2"><strong>Technology:</strong> Node.js with Git integration</p>
                    <p><strong>Responsibilities:</strong> Multi-repository management, version control integration, code diff analysis, file system operations</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">c. Analysis Microservice</p>
                    <p className="mb-2"><strong>Technology:</strong> Python with FastAPI</p>
                    <p><strong>Responsibilities:</strong> Analysis orchestration, result processing, metrics calculation, report generation</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">d. HITL Microservice</p>
                    <p className="mb-2"><strong>Technology:</strong> Node.js with WebSockets</p>
                    <p><strong>Responsibilities:</strong> Real-time communication, context management, conversation history, feedback processing</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">4. Databases</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">a. User DB</p>
                    <p className="mb-2"><strong>Technology:</strong> PostgreSQL</p>
                    <p><strong>Responsibilities:</strong> User profiles, authentication data, preferences, usage metrics</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">b. Code Store</p>
                    <p className="mb-2"><strong>Technology:</strong> Object storage (S3-compatible)</p>
                    <p><strong>Responsibilities:</strong> Code repository storage, file version management, artifact storage</p>
                  </div>

                  <div>
                    <p className="font-semibold">c. Vector DB</p>
                    <p className="mb-2"><strong>Technology:</strong> Pinecone or Weaviate</p>
                    <p><strong>Responsibilities:</strong> Code embeddings storage, semantic search, pattern recognition, similar code identification</p>
                  </div>

                  <div>
                    <p className="font-semibold">d. Chat DB</p>
                    <p className="mb-2"><strong>Technology:</strong> MongoDB or similar document store</p>
                    <p><strong>Responsibilities:</strong> Storing HITL conversation history, feedback data</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">5. Agent System</h3>
                <p className="mb-3"><strong>Technology:</strong> Python with LangChain/AutoGen/CrewAI, connections to LLMs (GPT, Claude, etc.)</p>
                <p><strong>Responsibilities:</strong> Agent management, task execution, LLM communication, tool integration, memory management, planning</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">6. External Services</h3>
                <p className="mb-3"><strong>Examples:</strong> GitHub API, Static Analysis Tools (e.g., SonarQube API), LLM APIs</p>
                <p><strong>Responsibilities:</strong> Providing external data or capabilities accessed by the Agent System or Microservices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Tags */}
    </div>
  );
}