import { Frame } from "@mintlify/components";

export const DarkLightImage = ({ lightSrc, caption, alt, darkSrc = null, width = "1000" }) => {

  // Function to get absolute URL based on current domain
  const getAbsoluteUrl = (src) => {
    // If already an absolute URL, return as is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }

    // Get current domain
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    // If root path is https://XYZ.mintlify.app, then set base URL to
    // https://mintlify.s3.us-west-1.amazonaws.com/XYZ/
    if (currentUrl.includes('.mintlify.app')) {
      const subdomain = currentUrl.split('.')[0].replace('https://', '');
      return `https://mintlify.s3.us-west-1.amazonaws.com/${subdomain}${src.startsWith('/') ? '' : '/'}${src}`;
    }
    // Else if root path is https://docs.scorecard.io, then set base URL to
    // https://mintlify.s3.us-west-1.amazonaws.com/scorecard-d65b5e8a/
    else if (currentUrl === 'https://docs.scorecard.io') {
      return `https://mintlify.s3.us-west-1.amazonaws.com/scorecard-d65b5e8a${src.startsWith('/') ? '' : '/'}${src}`;
    }
    // Else use current domain as base (for local development)
    else {
      return `${currentUrl}${src.startsWith('/') ? '' : '/'}${src}`;
    }
  };

  const content = (
    <>
      <img className="block dark:hidden" width={width} src={getAbsoluteUrl(lightSrc)} alt={alt} />
      <img className="hidden dark:block" width={width} src={getAbsoluteUrl(darkSrc || lightSrc.replace('light', 'dark'))} alt={alt} />
    </>
  );

  if (caption) {
    return <Frame caption={caption}>{content}</Frame>
  } else {
    return content;
  }
}