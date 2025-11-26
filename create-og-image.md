# Create OG Image for Social Preview

## Quick Setup Instructions

To create the social preview image (`og-image.jpg`), you can:

### Option 1: Use an Existing Image
Copy one of these images and resize it to 1200x630px:
- `/public/images/about/about-preview.jpg`
- `/public/images/staking/stacking.jpg`
- `/public/images/marketplace/marketplace-preview.jpg`

### Option 2: Create a New Image
1. Create a 1200x630px image
2. Include:
   - MOOZ logo
   - "Staking LIVE" text
   - "Migrating to Ethereum" badge
   - MOOZ cow character(s)
   - Brand colors (navy blue, orange gradient)
3. Save as `/public/images/og-image.jpg`

### Option 3: Use Online Tools
- **Canva**: Use their OG Image template (1200x630px)
- **Figma**: Create custom design
- **Image Resizer**: https://imageresizer.com/ (resize existing image)

### Recommended Image
The `about-preview.jpg` or `stacking.jpg` would work well - just resize to 1200x630px and save as `og-image.jpg` in `/public/images/`

## Current Status
The metadata is configured to look for `/public/images/og-image.jpg`. Once you create/place the image there, it will automatically be used for social previews.

