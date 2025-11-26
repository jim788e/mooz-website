# Social Preview Image Guide

## Current Setup

The social preview metadata has been configured in `app/layout.tsx` with comprehensive Open Graph and Twitter Card tags.

## Recommended Social Preview Image

For the best social media preview experience, create a dedicated Open Graph image with the following specifications:

### Image Requirements:
- **Dimensions**: 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format**: PNG or JPG
- **File Size**: Under 1MB (optimized)
- **File Location**: `/public/images/og-image.png` or `/public/images/og-image.jpg`

### Design Recommendations:

1. **Include Key Information:**
   - MOOZ logo
   - "Staking LIVE" badge or text
   - "Migrating to Ethereum" announcement
   - Collection size: "3,333 MOOZ Cows"
   - Call to action: "Visit mooz.farm"

2. **Visual Elements:**
   - Use MOOZ brand colors (navy blue, orange gradient)
   - Include one or more MOOZ cow characters
   - Keep text readable and prominent
   - Ensure good contrast for readability

3. **Current Temporary Image:**
   - Currently using `/images/about/about-preview.jpg` as a placeholder
   - Update the metadata in `app/layout.tsx` to use `/images/og-image.png` once created

## How to Update

Once you create the `og-image.png` file, update `app/layout.tsx`:

```typescript
images: [
  {
    url: '/images/og-image.png',  // Change from about-preview.jpg
    width: 1200,
    height: 630,
    alt: 'MOOZ NFT Collection - Staking Live',
  },
],
```

And in the Twitter metadata:
```typescript
images: ['/images/og-image.png'],  // Change from about-preview.jpg
```

## Testing Social Previews

Test your social previews using these tools:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Open Graph Preview**: https://www.opengraph.xyz/

## Current Metadata Features

✅ Open Graph tags for Facebook, LinkedIn, etc.
✅ Twitter Card tags (summary_large_image)
✅ Updated description with current status
✅ Keywords for SEO
✅ Proper image dimensions and alt text
✅ Site name and creator information

