# Instagram Integration for Parvati Climbing NGO

## Current Status
Currently using mock data with placeholder Instagram posts. The Instagram account [@parvaticlimbing](https://www.instagram.com/parvaticlimbing/) is correctly configured in the site settings.

## Real Instagram Integration Setup

### Option 1: Instagram Basic Display API (Recommended)

#### Prerequisites
1. Instagram account: `@parvaticlimbing`
2. Facebook Developer Account
3. Instagram Basic Display App

#### Setup Steps
1. **Create Facebook App**
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create new app, select "Consumer" type
   - Add Instagram Basic Display product

2. **Configure Instagram Basic Display**
   - Add Instagram Test Users
   - Generate User Token
   - Get User Media endpoint

3. **Environment Variables**
   ```bash
   INSTAGRAM_APP_ID=your_app_id
   INSTAGRAM_APP_SECRET=your_app_secret
   INSTAGRAM_ACCESS_TOKEN=your_access_token
   ```

4. **API Route** (`pages/api/instagram/posts.js`)
   ```javascript
   export default async function handler(req, res) {
     const { INSTAGRAM_ACCESS_TOKEN } = process.env;
     
     try {
       const response = await fetch(
         `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
       );
       
       const data = await response.json();
       res.status(200).json(data);
     } catch (error) {
       res.status(500).json({ error: 'Failed to fetch posts' });
     }
   }
   ```

### Option 2: Instagram Embed (Current Implementation)

#### How It Works
- Uses Instagram's official embed script
- Converts post URLs to embeddable format
- Provides attractive fallback placeholders

#### Real Post URLs Needed
Update `lib/mock/instagram.ts` with actual post URLs from:
https://www.instagram.com/parvaticlimbing/

#### Example Post URL Format
```
https://www.instagram.com/p/POST_ID/
```

### Option 3: Third-Party Services

#### InstagramFeed.js (Alternative)
- Simpler setup, may have rate limits
- Services like Instafeed.js or SnapWidget

## Current Placeholder Features

### Enhanced Instagram Placeholders
- ✅ Instagram-like UI design
- ✅ Real branding (@parvaticlimbing)
- ✅ Himalayan climbing theme
- ✅ Interactive hover effects
- ✅ Direct link to real Instagram account

### Carousel Integration
- ✅ 3 posts per view on desktop
- ✅ Auto-play every 4 seconds
- ✅ Responsive breakpoints
- ✅ Loading and error states

## Next Steps

1. **Get Real Post URLs**: Copy actual post URLs from [@parvaticlimbing](https://www.instagram.com/parvaticlimbing/)

2. **Update Mock Data**: Replace example URLs in `lib/mock/instagram.ts`

3. **Test Embedding**: Verify Instagram embeds work with real URLs

4. **Optional API Setup**: For dynamic feeds, implement Instagram Basic Display API

5. **Content Strategy**: Ensure posts align with website's mission and storytelling

## Files to Update

- `lib/mock/instagram.ts` - Real post URLs
- `components/InstagramPost.js` - Already handles real embeds
- `components/InstagramCarousel.js` - Ready for real data
- `pages/api/instagram/posts.js` - Create for API integration

## Benefits of Current Setup

- **CMS-Ready**: Easy to switch to API or CMS data
- **Fallback Graceful**: Beautiful placeholders if embeds fail
- **Performance**: Loads quickly with proper error handling
- **SEO-Friendly**: Contains real content even without embeds
- **Mobile Optimized**: Responsive across all devices
