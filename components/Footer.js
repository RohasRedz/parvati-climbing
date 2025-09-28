import Link from 'next/link';
import siteConfig from '../lib/mock/site';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>{siteConfig.footerInfo.address}</p>
            <p>Email: <a href={`mailto:${siteConfig.footerInfo.email}`}>{siteConfig.footerInfo.email}</a></p>
            <p>Follow us: <a href={siteConfig.social.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.social.instagram}</a></p>
          </div>
          
          <div className="footer-nav">
            <ul>
              {siteConfig.navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">{siteConfig.footerInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
