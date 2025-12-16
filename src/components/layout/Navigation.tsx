'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'TechFlow',
  brandHref: '#hero',
  navItems: [{ label: 'Home', href: '#hero' }],
  ctaText: 'Get Started',
  ctaHref: '#hero',
  mobileMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleBrandClick = () => {
    navigate(config.brandHref);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <button
              onClick={handleBrandClick}
              data-editable-href="brandHref"
              data-href={config.brandHref}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Go to homepage"
            >
              <span data-editable="brandName">{config.brandName}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleCtaClick}
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-accent hover:text-accent-foreground"
                  aria-label={config.mobileMenuLabel}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card text-card-foreground w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <button
                      onClick={handleBrandClick}
                      data-editable-href="brandHref"
                      data-href={config.brandHref}
                      className="text-xl font-bold text-card-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
                    >
                      <span data-editable="brandName">{config.brandName}</span>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-card-foreground hover:bg-accent hover:text-accent-foreground"
                      aria-label={config.closeMenuLabel}
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6" role="navigation" aria-label="Mobile navigation">
                    <div className="space-y-4">
                      {config.navItems.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavClick(item.href)}
                          data-editable-href={`navItems[${idx}].href`}
                          data-href={item.href}
                          className="block w-full text-left text-card-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-4 py-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
