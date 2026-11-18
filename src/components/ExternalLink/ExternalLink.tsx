import { ExternalLinkProps } from './ExternalLink.props';

/**
 * Link that leaves the blog (portfolio, GitHub, RSS feed, ...). It opens in a
 * new tab, so the blog stays open in the current one.
 *
 * `rel="noopener noreferrer"` keeps the new page from accessing this one, and
 * screen readers announce that the link opens a new tab.
 */
const ExternalLink = ({ children, ...props }: ExternalLinkProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
};

export default ExternalLink;
