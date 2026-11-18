import Link from 'next/link';
import styles from './Footer.module.scss';
import { copyrightText, footerList } from '@/constants/footer';

/**
 * Site footer: the links from `footerList` (portfolio, source code, socials,
 * RSS feed) and the copyright line below them.
 * Links to other websites open in a new tab.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {footerList.map((item) => (
          <li key={item.name}>
            {item.external ? (
              <a href={item.url} {...(item.url.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
                {item.name}
              </a>
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
