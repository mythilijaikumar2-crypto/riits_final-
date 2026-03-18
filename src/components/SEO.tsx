import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME } from '../config/contact';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  schemaData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.webp',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schemaData,
}: SEOProps) => {
  const siteName = COMPANY_NAME;
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = 'https://riits.in';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content="index, follow" />

      {/* Local SEO Geo Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tiruchirappalli" />
      <meta name="geo.position" content="10.7905;78.7047" />
      <meta name="ICBM" content="10.7905, 78.7047" />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
