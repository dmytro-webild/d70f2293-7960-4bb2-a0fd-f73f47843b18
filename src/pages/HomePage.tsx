import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Made New Studio"
      title="Your Website Should Bring You Customers—Not Drive Them Away"
      description="I build beautiful, high-converting websites for local businesses in as little as 24–48 hours. Fast, modern, mobile-friendly, and built to grow your business."
      primaryButton={{
        text: "Get My Free Website Audit",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See My Work",
        href: "#portfolio",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-buttons_23-2149917545.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medication-drug-pharmacist-prescription-patient_53876-124312.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Trust"
      title="Trusted by Local Businesses"
      description="Building brands that scale across all digital platforms."
      names={[
        "TechCorp",
        "InnovateLab",
        "GrowthCo",
        "StartupXYZ",
        "LocalBistro",
        "PeakFitness",
        "StyleDesign",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBentoGrid
      tag="Our Services"
      title="Designed to Grow"
      description="Comprehensive web solutions tailored for local businesses."
      features={[
        {
          title: "Website Refresh",
          description: "Modern redesign of your existing website. Includes SEO, mobile optimization, and branding updates.",
          imageSrc: "http://img.b2bpic.net/free-photo/internet-speed-test-software-concept_53876-120681.jpg",
        },
        {
          title: "New Website",
          description: "Completely custom business website. Includes contact form, Google Maps, mobile responsive, and basic SEO.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-view-black-price-tag-with-shadow_23-2148629508.jpg",
        },
        {
          title: "Website Care Plan",
          description: "Monthly maintenance including hosting support, content edits, backups, and performance monitoring.",
          imageSrc: "http://img.b2bpic.net/free-photo/user-profile-icon-front-side_187299-39596.jpg",
        },
        {
          title: "SEO & Performance",
          description: "Get found on Google with optimized speed and visibility improvements.",
          imageSrc: "http://img.b2bpic.net/free-photo/internet-speed-test-software-concept_53876-124238.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Value"
      title="Why Choose Made New Studio"
      description="Focused on speed, results, and your long-term success."
      metrics={[
        {
          value: "24-48h",
          description: "Rapid Turnaround",
        },
        {
          value: "100%",
          description: "Mobile Optimized",
        },
        {
          value: "SEO",
          description: "Search Ready",
        },
        {
          value: "0",
          description: "Contracts",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="before-after" data-section="before-after">
    <SectionErrorBoundary name="before-after">
          <AboutMediaOverlay
      tag="Results"
      title="Before vs After"
      description="Don't settle for outdated layouts. Transform your digital presence into a conversion machine."
      imageSrc="http://img.b2bpic.net/free-photo/web-page-design-user-interface-template-copy-space_53876-120721.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="Portfolio"
      title="Recent Projects"
      description="Beautiful, high-converting sites for diverse local businesses."
      items={[
        {
          title: "Local Cafe",
          description: "Website Design",
          imageSrc: "http://img.b2bpic.net/free-photo/image-young-stylish-guy-with-laptop-sitting-cafe-with-his-computer-typing-something-drinking_1258-314318.jpg",
        },
        {
          title: "Fitness Studio",
          description: "Brand Redesign",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-pensive-sporty-woman-has-fitness-training-outdoors-holds-stereo-headphones-dressed-activewear-poses-knees-karemat-modern-city-daytime-healthy-lifestyle-concept_273609-59150.jpg",
        },
        {
          title: "Architect",
          description: "Portfolio Site",
          imageSrc: "http://img.b2bpic.net/free-photo/blueprint-architect-construction-project-sketch-concept_53876-120012.jpg",
        },
        {
          title: "Boutique Shop",
          description: "E-commerce Build",
          imageSrc: "http://img.b2bpic.net/free-photo/online-shop-buy-internet-shopping-store-concept_53876-127377.jpg",
        },
        {
          title: "Law Firm",
          description: "Corporate Identity",
          imageSrc: "http://img.b2bpic.net/free-photo/business-marketing-planning-trategy-graph_53876-121052.jpg",
        },
        {
          title: "Real Estate",
          description: "Property Listings",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-isometric-house_23-2150727946.jpg",
        },
        {
          title: "Coming Soon",
          description: "Stay Tuned",
          imageSrc: "http://img.b2bpic.net/free-photo/agenda-calendar-appointment-graphic-concept_53876-121111.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Pricing"
      title="Transparent Pricing"
      description="Choose the perfect plan to grow your business."
      plans={[
        {
          tag: "Starter",
          price: "$500",
          description: "Perfect for small businesses needing a refresh.",
          features: [
            "5 pages",
            "Mobile optimization",
            "Contact form",
            "SEO basics",
          ],
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
        },
        {
          tag: "Professional",
          price: "$800",
          description: "Everything in Starter plus advanced design features.",
          features: [
            "Everything in Starter",
            "Custom design",
            "Blog",
            "Google Analytics",
            "Speed optimization",
          ],
          highlight: "Recommended",
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
        },
        {
          tag: "Premium",
          price: "Custom",
          description: "Advanced functionality for high-growth businesses.",
          features: [
            "Booking systems",
            "Memberships",
            "E-commerce",
            "Custom integrations",
          ],
          primaryButton: {
            text: "Contact Me",
            href: "#contact",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="FAQ"
      title="Common Questions"
      description="Everything you need to know about our web design process."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "How long does it take?",
              answer: "I deliver most projects within 24–48 hours.",
            },
            {
              question: "Can you redesign my current website?",
              answer: "Yes, I specialize in modernizing outdated sites.",
            },
          ],
        },
        {
          name: "Service",
          items: [
            {
              question: "Do you provide hosting?",
              answer: "Yes, I offer maintenance plans that include hosting support.",
            },
            {
              question: "Can I edit the website later?",
              answer: "Absolutely, all builds are easy to update.",
            },
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact"
      text="Ready to get your new website started? Schedule a free audit today."
      primaryButton={{
        text: "Get Free Website Audit",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:hello@madenew.studio",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
