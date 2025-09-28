import { useRouter } from 'next/router';
import Link from 'next/link';
import siteConfig from '../lib/mock/site';

export default function Nav() {
  const router = useRouter();
  
  return (
    <nav>
      <div className="nav-left">
        <Link href="/" className="nav-title">
          {siteConfig.title}
        </Link>
      </div>
      <div className="nav-right">
        {siteConfig.navItems.map((item) => (
          <Link 
            href={item.path} 
            key={item.path}
            className={router.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}