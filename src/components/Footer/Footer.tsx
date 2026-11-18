import Link from 'next/link';
import styles from './Footer.module.scss';
import ExternalLink from '../ExternalLink/ExternalLink';
import { copyrightText, footerList, type FooterLink } from '@/constants/footer';

/** Icon and name of a footer link. The icon is decorative: the name says where the link goes. */
const LinkContent = ({ name, icon: Icon }: FooterLink) => (
  <>
    <Icon aria-hidden="true" className={styles.icon} />
    {name}
  </>
);

/**
 * Site footer: the links from `footerList` (portfolio, source code, socials,
 * RSS feed), each with an icon, and the copyright line below them.
 * Links that leave the blog open in a new tab; the email link opens the mail app.
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {footerList.map((item) => (
          <li key={item.name}>
            {item.external && item.url.startsWith('mailto:') ? (
              <a href={item.url}>
                <LinkContent {...item} />
              </a>
            ) : item.external ? (
              <ExternalLink href={item.url}>
                <LinkContent {...item} />
              </ExternalLink>
            ) : (
              <Link href={item.url}>
                <LinkContent {...item} />
              </Link>
            )}
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
