import Link from 'next/link';
import styles from './Footer.module.scss';
import { footerList } from '@/constants/footer';

/**
 * Site footer with the copyright notice and the links from `footerList`.
 * Links to other websites open in a new tab.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.copyright}>Rika &copy; {new Date().getFullYear()}</li>
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
    </footer>
  );
};

export default Footer;
