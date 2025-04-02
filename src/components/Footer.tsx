import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodeInsight</h3>
            <p className="text-slate-300">
              AI-Powered Code Analysis That Transforms How Developers Work
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/scope" className="text-slate-300 hover:text-white">
                  Project Scope
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="text-slate-300 hover:text-white">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/implementation" className="text-slate-300 hover:text-white">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-slate-300 hover:text-white">
                  Roadmaps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/technologies" className="text-slate-300 hover:text-white">
                  Agentic Technologies
                </Link>
              </li>
              <li>
                <Link href="/architecture#mvp" className="text-slate-300 hover:text-white">
                  MVP Architecture
                </Link>
              </li>
              <li>
                <Link href="/architecture#full-scope" className="text-slate-300 hover:text-white">
                  Full Scope Architecture
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/implementation#mvp" className="text-slate-300 hover:text-white">
                  Hackathon Plan
                </Link>
              </li>
              <li>
                <Link href="/implementation#full-scope" className="text-slate-300 hover:text-white">
                  Full Scope Plan
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Landing Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} CodeInsight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
