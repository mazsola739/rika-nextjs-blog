import Link from 'next/link';
import styles from './Footer.module.scss';
import ExternalLink from '../ExternalLink/ExternalLink';
import { copyrightText, footerList } from '@/constants/footer';

/**
 * Site footer: the links from `footerList` (portfolio, source code, socials,
 * RSS feed) and the copyright line below them.
 * Links that leave the blog open in a new tab; the email link opens the mail app.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {footerList.map((item) => (
          <li key={item.name}>
            {item.external && item.url.startsWith('mailto:') ? (
              <a href={item.url}>{item.name}</a>
            ) : item.external ? (
              <ExternalLink href={item.url}>{item.name}</ExternalLink>
            ) : (
              <Link href={item.url}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
