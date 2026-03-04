import { useEffect } from 'react';

export function PWAMeta() {
  useEffect(() => {
    // Add meta tags to head
    const metaTags = [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover' },
      { name: 'theme-color', content: '#155dfc' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'SSO v1.9' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Smart System SSO' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Smart System SSO v1.9' },
      { property: 'og:description', content: 'Hệ thống quản lý nhà nước - Thu thập và giám sát thông tin khuyến mãi' },
      { property: 'og:type', content: 'website' },
    ];

    const addedTags: HTMLMetaElement[] = [];

    metaTags.forEach(({ name, property, content }) => {
      const existingTag = name 
        ? document.querySelector(`meta[name="${name}"]`)
        : document.querySelector(`meta[property="${property}"]`);
      
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (name) meta.name = name;
        if (property) meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
        addedTags.push(meta);
      }
    });

    // Add title
    document.title = 'Smart System SSO v1.9';

    return () => {
      addedTags.forEach(tag => tag.remove());
    };
  }, []);

  return null;
}