import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">CodeInsight</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/scope" className="text-sm font-medium hover:text-primary">
            Project Scope
          </Link>
          <Link href="/architecture" className="text-sm font-medium hover:text-primary">
            Architecture
          </Link>
          <Link href="/implementation" className="text-sm font-medium hover:text-primary">
            Implementation
          </Link>
          <Link href="/roadmap" className="text-sm font-medium hover:text-primary">
            Roadmaps
          </Link>
          <Link href="/technologies" className="text-sm font-medium hover:text-primary">
            Technologies
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="hidden md:flex">
            Get Started
          </Button>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
