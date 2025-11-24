# Images Directory

This directory contains all images for the website.

## Structure

```
images/
├── hero/
│   └── hero-main.jpg          # Main hero image (recommended: 1920x1080px)
├── portfolio/
│   ├── bryllup/               # Wedding photos
│   │   ├── wedding-1.jpg
│   │   ├── wedding-2.jpg
│   │   └── ...
│   ├── familie/               # Family photos
│   │   ├── family-1.jpg
│   │   ├── family-2.jpg
│   │   └── ...
│   └── business/              # Business/Corporate photos
│       ├── business-1.jpg
│       ├── business-2.jpg
│       └── ...
└── about/
    └── anita-profile.jpg      # Profile photo of Anita (recommended: 600x800px)
```

## Image Requirements

- **Format**: JPG or WebP
- **Hero image**: Minimum 1920x1080px, optimized for web
- **Portfolio images**: Minimum 1200x900px, consistent aspect ratio recommended
- **Profile image**: Minimum 600x800px

## Optimization

All images should be optimized for web before uploading:
- Compress images to reduce file size
- Use appropriate quality settings (80-90% for JPG)
- Consider using WebP format for better compression

## Adding New Images

1. Add images to the appropriate directory
2. Update `src/data/portfolio.json` with new image paths
3. Ensure image paths match the structure in the JSON file

