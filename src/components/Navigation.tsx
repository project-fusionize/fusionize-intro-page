import * as React from "react";
import {Menu, ChevronDown, Sun, Moon, Search} from "lucide-react";
import {
    Button,
} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {Separator} from "@/components/ui/separator";
import VariableProximity from "@/components/VariableProximity.tsx";
import {useRef} from "react";

// --- Types ---
export type NavItem = {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
};

export type NavbarProps = {
    items?: NavItem[];
    logo?: React.ReactNode;
    cta?: React.ReactNode;
    className?: string;
};

// --- Helpers ---
function cx(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

// --- Component ---
export default function Navbar({
                                   items = [
                                       {label: "Documents", href: "#"},
                                   ],
                                   logo = (
                                       <div className="flex items-center space-x-2">
                                           <img src={"/branding/fusionize_logo-white.png"} className={"w-[36px]"}/>
                                           <span className="text-white text-xl">Fusionize</span>
                                       </div>
                                   ),
                                   cta = (
                                       <div className="flex items-center gap-2">
                                           <Button variant="outline">Get started</Button>
                                       </div>
                                   ),
                                   className,
                               }: NavbarProps) {

    return (
        <header className={cx("sticky top-0 left-0 right-0 z-50 ", className)}>
            <div
                className="mx-auto rounded-b-2xl md:rounded-b-4xl flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:py-4">
                {/* Left: Mobile Menu + Logo */}
                <div className="flex items-center gap-2">
                    <MobileMenu items={items} cta={cta} logo={logo}/>
                    <a href="#" aria-label="Go to homepage" className="shrink-0">
                        {logo}
                    </a>
                </div>

                {/* Middle: Search (hidden on small) */}
                <div className="hidden min-w-[220px] max-w-md grow items-center gap-2 sm:flex">

                </div>

                {/* Right: Nav + Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <DesktopNav items={items}/>
                    {cta}
                </div>
            </div>
        </header>
    );
}

// --- Subcomponents ---
function DesktopNav({items}: { items: NavItem[] }) {
    const containerRef = useRef(null);

    return (
        <nav>
            <ul className="flex items-center gap-1">
                {items.map((item) => (
                    <li key={item.label}>
                        {item.children ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="gap-1">
                                        {item.label}
                                        <ChevronDown className="h-4 w-4 opacity-60"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="min-w-56">
                                    <DropdownMenuLabel className="text-xs uppercase tracking-widest opacity-60">
                                        {item.label}
                                    </DropdownMenuLabel>
                                    <Separator className="my-1"/>
                                    {item.children.map((child) => (
                                        <DropdownMenuItem asChild key={child.label}>
                                            <a href={child.href} className="cursor-pointer">
                                                {child.label}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button asChild variant="ghost">
                                <a href={item.href}>
                                    <div
                                        ref={containerRef}
                                        style={{position: 'relative'}}
                                    >
                                        <VariableProximity
                                            label={item.label}
                                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                            containerRef={containerRef}
                                            radius={100}
                                            falloff='linear'
                                        />
                                    </div>
                                </a>
                            </Button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function MobileMenu({items, cta, logo}: { items: NavItem[]; cta: React.ReactNode, logo: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                    <Menu className="h-5 w-5"/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
                <SheetHeader className="px-4 py-3 text-left">
                    <SheetTitle>
                        {logo}
                    </SheetTitle>
                </SheetHeader>
                <Separator/>
                <nav className="flex flex-col gap-1 p-2">
                    {items.map((item) => (
                        <div key={item.label}>
                            {item.children ? (
                                <details className="group">
                                    <summary
                                        className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 text-sm hover:bg-muted">
                                        <span>{item.label}</span>
                                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180"/>
                                    </summary>
                                    <div className="ml-2 flex flex-col">
                                        {item.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.href}
                                                className="rounded-lg px-3 py-2 text-sm hover:bg-muted"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            ) : (
                                <a href={item.href} className="rounded-lg px-2 py-2 text-sm hover:bg-muted">
                                    {item.label}
                                </a>
                            )}
                        </div>
                    ))}
                </nav>
                <Separator/>
                <div className="p-3">
                    {cta}
                </div>
            </SheetContent>
        </Sheet>
    );
}

// --- Usage example ---
// import Navbar from "./Navbar";
// export default function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Navbar />
//       <main className="mx-auto max-w-7xl p-6">Your content…</main>
//     </div>
//   );
// }
