'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TestApp',
  tagline: 'Streamline your workflow with intelligent automation and seamless team collaboration',
  copyright: '© 2024 TestApp. All rights reserved.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],

  // Social Links
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  ],

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates and insights delivered to your inbox.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',

  // Contact
  contactEmail: 'hello@testapp.com',
  contactText: 'Get in touch',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                <span data-editable="tagline">{config.tagline}</span>
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-2 max-w-sm"
                  data-form-id="6941e15a716352ed2374ca54"
                >
                  <input
                    type="email"
                    placeholder={config.newsletterPlaceholder}
                    className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {config.legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                      data-editable-href={`legalLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Contact */}
            <button
              onClick={() => (window.location.href = `mailto:${config.contactEmail}`)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              data-editable-href="contactEmail"
              data-href={`mailto:${config.contactEmail}`}
            >
              <Mail className="h-4 w-4" />
              <span data-editable="contactText">{config.contactText}</span>
            </button>

            <Separator orientation="vertical" className="h-4 bg-border" />

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {config.socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(social.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label={social.label}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                >
                  {getSocialIcon(social.icon)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
