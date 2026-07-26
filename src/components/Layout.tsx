import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Portfolio",
    "href": "#portfolio"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  { name: "Blog", href: "/blog" },

];

  return (
    <StyleProvider buttonVariant="default" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Made New Studio"
      ctaButton={{
        text: "Get Free Website Audit",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Redesign",
              href: "#services",
            },
            {
              label: "New Site",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      leftText="Made New Studio © 2024"
      rightText="Privacy Policy"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
