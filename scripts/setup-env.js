#!/usr/bin/env node

/**
 * Environment Setup Script for Parvati Climbing NGO
 * This script helps create and manage the .env.local file
 */

const fs = require('fs');
const path = require('path');

const ENV_TEMPLATE = `# Parvati Climbing NGO - Environment Configuration
# Generated on ${new Date().toISOString()}

# =============================================================================
# SITE CONFIGURATION
# =============================================================================
NEXT_PUBLIC_SITE_NAME="Parvati Climbing Foundation"
NEXT_PUBLIC_SITE_DESCRIPTION="Empowering communities through climbing in the Himalayas"
NEXT_PUBLIC_SITE_URL="https://parvaticlimbing.org"

# =============================================================================
# SOCIAL MEDIA LINKS
# =============================================================================
NEXT_PUBLIC_INSTAGRAM_HANDLE="@parvaticlimbing"
NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/parvaticlimbing/"

# =============================================================================
# INSTAGRAM POSTS
# Format: Comma-separated list of Instagram post/reel URLs
# =============================================================================
NEXT_PUBLIC_INSTAGRAM_POSTS="https://www.instagram.com/reel/DO9BuaBkt1u/,https://www.instagram.com/reel/DK9dhBUy4L0/,https://www.instagram.com/p/DKo20__xNglOzL0VsqSlHiYUKJHT6INaLb5WhU0/,https://www.instagram.com/reel/DKC_4RATjWE/,https://www.instagram.com/reel/DJb2hXfSJB0/,https://www.instagram.com/reel/DJW8L_OTKrZ/,https://www.instagram.com/reel/DJWQLR_yhZ-/,https://www.instagram.com/p/DII55wUy_Uj/"

# =============================================================================
# CONTACT INFORMATION
# =============================================================================
NEXT_PUBLIC_CONTACT_EMAIL="info@parvaticlimbing.org"
NEXT_PUBLIC_CONTACT_PHONE="+91-XXXXXXXXXX"
NEXT_PUBLIC_CONTACT_ADDRESS="Parvati Valley, Himachal Pradesh, India"

# =============================================================================
# DONATION LINKS
# =============================================================================
NEXT_PUBLIC_GOFUNDME_URL="https://gofundme.com/parvati-climbing"
NEXT_PUBLIC_PAYPAL_URL=""

# =============================================================================
# ANALYTICS & TRACKING (Optional)
# =============================================================================
NEXT_PUBLIC_GA_TRACKING_ID=""
NEXT_PUBLIC_FB_PIXEL_ID=""

# =============================================================================
# API ENDPOINTS (For future CMS integration)
# =============================================================================
NEXT_PUBLIC_API_BASE_URL=""
NEXT_PUBLIC_CMS_API_KEY=""

# =============================================================================
# FEATURE FLAGS
# =============================================================================
NEXT_PUBLIC_ENABLE_ANIMATIONS="true"
NEXT_PUBLIC_ENABLE_PARALLAX="true"
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
`;

function createEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (fs.existsSync(envPath)) {
    console.log('⚠️  .env.local already exists!');
    console.log('   To recreate it, delete the existing file first.');
    return;
  }
  
  try {
    fs.writeFileSync(envPath, ENV_TEMPLATE);
    console.log('✅ Created .env.local file successfully!');
    console.log('📝 Please edit .env.local with your actual values.');
    console.log('📖 See docs/ENVIRONMENT_SETUP.md for detailed instructions.');
  } catch (error) {
    console.error('❌ Error creating .env.local:', error.message);
  }
}

function validateEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envPath)) {
    console.log('❌ .env.local file not found!');
    console.log('   Run: node scripts/setup-env.js create');
    return;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const requiredVars = [
    'NEXT_PUBLIC_INSTAGRAM_POSTS',
    'NEXT_PUBLIC_CONTACT_EMAIL',
    'NEXT_PUBLIC_GOFUNDME_URL'
  ];
  
  const missingVars = requiredVars.filter(varName => 
    !envContent.includes(`${varName}=`) || 
    envContent.includes(`${varName}=""`) ||
    envContent.includes(`${varName}="XXXXXXXXXX"`)
  );
  
  if (missingVars.length === 0) {
    console.log('✅ All required environment variables are configured!');
  } else {
    console.log('⚠️  Missing or incomplete environment variables:');
    missingVars.forEach(varName => console.log(`   - ${varName}`));
    console.log('📖 See docs/ENVIRONMENT_SETUP.md for help.');
  }
}

// Command line interface
const command = process.argv[2];

switch (command) {
  case 'create':
    createEnvFile();
    break;
  case 'validate':
    validateEnv();
    break;
  default:
    console.log('Parvati Climbing NGO - Environment Setup');
    console.log('');
    console.log('Usage:');
    console.log('  node scripts/setup-env.js create    - Create .env.local file');
    console.log('  node scripts/setup-env.js validate  - Validate environment setup');
    console.log('');
    console.log('For detailed instructions, see docs/ENVIRONMENT_SETUP.md');
    break;
}
