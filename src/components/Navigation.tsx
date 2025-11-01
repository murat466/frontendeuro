"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type NavigationLink = {
  id: number;
  name: string;
  categorySlug: string;
  isActivated: boolean;
  href: string;
};

const Navigation = () => {
  const [links, setLinks] = useState<NavigationLink[]>([]);
  const [loading, setLoading] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/navigation');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Navigation data fetched:', data);
        setLinks(data);
      } catch (error) {
        console.error("Failed to fetch navigation links", error);
        
        // Fallback to static links if API fails
        const fallbackLinks = [
          { id: 0, name: "Logo", categorySlug: "home", isActivated: true, href: "/" },
          // { id: 998, name: "عنا", categorySlug: "about", isActivated: true, href: "/about" },
          // { id: 999, name: "اتصل بنا", categorySlug: "contact", isActivated: true, href: "/contact" }
        ];
        setLinks(fallbackLinks);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return (
    <nav ref={navRef} className="container mx-auto bg-primaryOther font-bold text-white">
      <ul className="flex flex-wrap gap-1 mt-1 px-2 py-1">
        {loading ? (
          <li className="px-2 py-1">جاري التحميل...</li>
        ) : (
          links
            .filter((link) => link && link.href) // Filter out null/undefined links and links without href
            .map((link) => (
            <li key={link.id} className="relative group">
              <Link href={link.href} className="px-2 py-1 hover:bg-opacity-80 rounded transition-colors inline-block">
                {link.categorySlug === 'home' ? (
                  <Image 
                    src="/img/logo-small-right.png" 
                    alt="الرئيسية" 
                    width={20} 
                    height={8} 
                    className="h-auto m-0 p-0 block leading-none"
                  />
                ) : (
                  link.name
                )}
              </Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
