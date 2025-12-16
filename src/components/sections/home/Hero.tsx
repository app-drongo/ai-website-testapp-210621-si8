'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Play, Zap, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  headline: 'Transform Your Business Operations with Smart Automation',
  subheadline:
    'TestApp empowers teams to automate repetitive tasks, streamline workflows, and boost productivity by up to 40%. Join 10,000+ companies already scaling efficiently.',
  primaryCtaText: 'Start Free Trial',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  features: ['No credit card required', 'Setup in under 5 minutes', '24/7 customer support'],
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  heroImageAlt: 'Modern office workspace with automation dashboard',
  trustBadgeText: 'Trusted by 10,000+ companies',
  productivityBoost: '40%',
  companiesCount: '10,000+',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-3 h-3 mr-1" />
                <span data-editable="trustBadgeText">{config.trustBadgeText}</span>
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span data-editable="headline">{config.headline}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subheadline">{config.subheadline}</span>
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  <span data-editable="companiesCount">{config.companiesCount}</span> companies
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  <span data-editable="productivityBoost">{config.productivityBoost}</span>{' '}
                  productivity boost
                </span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <Card className="bg-card border-border overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Overlay with play button for demo */}
                  <div className="absolute inset-0 bg-background/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="lg"
                      onClick={handleSecondaryClick}
                      className="bg-primary/90 text-primary-foreground hover:bg-primary rounded-full w-16 h-16 p-0"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">
                <span data-editable="productivityBoost">{config.productivityBoost}</span> faster
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground border border-border px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Setup complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
