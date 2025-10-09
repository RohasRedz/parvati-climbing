# Environment Configuration Guide

This guide explains how to set up and manage environment variables for the Parvati Climbing NGO website.

## Overview

The application uses environment variables to manage configuration data like Instagram links, contact information, and feature flags. This makes it easy to update content without modifying code.

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the root directory of your project:

```bash
# Copy the example and modify with your values
cp .env.example .env.local
```

### 2. Configure Your Variables

Edit `.env.local` with your actual values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_NAME="Parvati Climbing Foundation"
NEXT_PUBLIC_SITE_DESCRIPTION="Empowering communities through climbing in the Himalayas"
NEXT_PUBLIC_SITE_URL="https://parvaticlimbing.org"

# Social Media
NEXT_PUBLIC_INSTAGRAM_HANDLE="@parvaticlimbing"
NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/parvaticlimbing/"

# Instagram Posts (comma-separated URLs)
NEXT_PUBLIC_INSTAGRAM_POSTS="https://www.instagram.com/reel/DO9BuaBkt1u/,https://www.instagram.com/reel/DK9dhBUy4L0/"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL="info@parvaticlimbing.org"
NEXT_PUBLIC_CONTACT_PHONE="+91-XXXXXXXXXX"
NEXT_PUBLIC_CONTACT_ADDRESS="Parvati Valley, Himachal Pradesh, India"

# Donation Links
NEXT_PUBLIC_GOFUNDME_URL="https://gofundme.com/parvati-climbing"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANIMATIONS="true"
NEXT_PUBLIC_ENABLE_PARALLAX="true"
```

## Environment Variables Reference

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_INSTAGRAM_POSTS` | Comma-separated Instagram post URLs | `"url1,url2,url3"` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address | `"info@example.com"` |
| `NEXT_PUBLIC_GOFUNDME_URL` | GoFundMe donation link | `"https://gofundme.com/..."` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_NAME` | Website name | `"Parvati Climbing Foundation"` |
| `NEXT_PUBLIC_ENABLE_ANIMATIONS` | Enable/disable animations | `"true"` |
| `NEXT_PUBLIC_ENABLE_PARALLAX` | Enable/disable parallax effects | `"true"` |

## Instagram Posts Configuration

### Format
Instagram posts should be provided as a comma-separated string of URLs:

```env
NEXT_PUBLIC_INSTAGRAM_POSTS="https://www.instagram.com/reel/ABC123/,https://www.instagram.com/p/DEF456/,https://www.instagram.com/reel/GHI789/"
```

### Supported URL Formats
- Instagram Posts: `https://www.instagram.com/p/POST_ID/`
- Instagram Reels: `https://www.instagram.com/reel/REEL_ID/`
- With tracking parameters: URLs with `?igsh=...` will be automatically cleaned

### Adding New Posts
1. Copy the Instagram post/reel URL
2. Add it to the `NEXT_PUBLIC_INSTAGRAM_POSTS` variable (comma-separated)
3. Restart your development server

## Feature Flags

Control application features using environment variables:

```env
# Enable/disable animations
NEXT_PUBLIC_ENABLE_ANIMATIONS="true"

# Enable/disable parallax scrolling
NEXT_PUBLIC_ENABLE_PARALLAX="true"

# Enable/disable analytics
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
```

## Development vs Production

### Development (`.env.local`)
- Used for local development
- Should be added to `.gitignore`
- Contains actual values for testing

### Production
- Set environment variables in your hosting platform
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

## Security Notes

1. **Never commit `.env.local`** - it should be in your `.gitignore`
2. **Use `NEXT_PUBLIC_` prefix** for client-side variables
3. **Keep sensitive data secure** - don't expose API keys in public variables

## Troubleshooting

### Instagram Posts Not Loading
1. Check that URLs are properly formatted
2. Ensure no trailing spaces in the comma-separated list
3. Verify Instagram URLs are publicly accessible

### Environment Variables Not Working
1. Restart your development server after changes
2. Check that variable names start with `NEXT_PUBLIC_`
3. Verify `.env.local` is in the project root

### Build Issues
1. Ensure all required environment variables are set
2. Check for syntax errors in `.env.local`
3. Verify fallback values exist in `lib/config/env.js`

## Example .env.local File

```env
# Parvati Climbing NGO - Environment Configuration
NEXT_PUBLIC_SITE_NAME="Parvati Climbing Foundation"
NEXT_PUBLIC_SITE_DESCRIPTION="Empowering communities through climbing in the Himalayas"
NEXT_PUBLIC_SITE_URL="https://parvaticlimbing.org"

NEXT_PUBLIC_INSTAGRAM_HANDLE="@parvaticlimbing"
NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/parvaticlimbing/"
NEXT_PUBLIC_INSTAGRAM_POSTS="https://www.instagram.com/reel/DO9BuaBkt1u/,https://www.instagram.com/reel/DK9dhBUy4L0/,https://www.instagram.com/reel/DKC_4RATjWE/,https://www.instagram.com/reel/DJb2hXfSJB0/,https://www.instagram.com/reel/DJW8L_OTKrZ/,https://www.instagram.com/reel/DJWQLR_yhZ-/,https://www.instagram.com/p/DII55wUy_Uj/"

NEXT_PUBLIC_CONTACT_EMAIL="info@parvaticlimbing.org"
NEXT_PUBLIC_CONTACT_PHONE="+91-XXXXXXXXXX"
NEXT_PUBLIC_CONTACT_ADDRESS="Parvati Valley, Himachal Pradesh, India"

NEXT_PUBLIC_GOFUNDME_URL="https://gofundme.com/parvati-climbing"

NEXT_PUBLIC_ENABLE_ANIMATIONS="true"
NEXT_PUBLIC_ENABLE_PARALLAX="true"
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
```
