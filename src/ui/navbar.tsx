'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Metamask } from './metamask';

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800 rounded-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/home">
                                <img className="h-8 w-8" src="/flame.svg" alt="Your Company" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavItem href="/home" currentPath={pathname}>Home</NavItem>
                                    <NavItem href="/business" currentPath={pathname}>Business</NavItem>
                                    <NavItem href="/staking" currentPath={pathname}>Staking</NavItem>
                                    <NavItem href="/about-token" currentPath={pathname}>About Token</NavItem>
                                    <NavItem href="/governance" currentPath={pathname}>Governance</NavItem>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <span className="sm:ml-3">
                                    <Metamask />
                                </span>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Menu open: "hidden", Menu closed: "block" */}
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* Menu open: "block", Menu closed: "hidden" */}
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Your content */}
                </div>
            </main>
        </div>
    );
};

interface NavItemProps {
    href: string;
    currentPath: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, currentPath, children }) => {
    const isActive = href === currentPath;

    return (
        <Link href={href}>
            <div className={`px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md`} aria-current={isActive ? 'page' : undefined}>
                {children}
            </div>
        </Link>
    );
};

export default Navbar;

