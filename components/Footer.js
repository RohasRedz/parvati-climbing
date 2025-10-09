import Link from 'next/link';
import config from '../lib/config/env';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>{config.contact.address}</p>
            <p>Email: <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>
            <p>Follow us: <a href={config.social.instagram.url} target="_blank" rel="noopener noreferrer">{config.social.instagram.handle}</a></p>
          </div>
          
          <div className="footer-nav">
            <ul>
              {config.navigation.map((item) => (
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
          <p className="copyright">© {new Date().getFullYear()} {config.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
