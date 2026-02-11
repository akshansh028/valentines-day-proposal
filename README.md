# 💝 Valentine's Day Proposal Website

A beautiful, interactive Valentine's Day proposal website with full-width buttons and playful animations!

## ✨ Features

- **Interactive Proposal Page**: 
  - A4-style page with margins on all sides
  - Full-width YES (green) and NO (red) buttons spanning left to right border
  - YES button above NO button
  - YES button expands vertically with each NO click (5 stages total)
  - After 5 NO clicks, YES fills the entire space and NO disappears
  - Cute images and messages that change with each stage
  - Floating hearts animations

- **Success Page**:
  - Confetti/crackers animation celebration
  - "I Knew It!" and "I Love You!" messages
  - Benefits package with customizable promises
  - Downloadable love coupon as an image
  - Beautiful animations and effects

## 🎨 How It Works

### Button Behavior:
- **Stage 0 (Initial)**: YES button is normal size, NO button below it
- **Stage 1-4**: Each NO click makes YES grow taller (vertically), pushing NO down
- **Stage 5 (Final)**: YES button becomes huge, filling from below the message to the bottom border. NO button completely disappears!
- **Any YES click**: Redirects to success page with crackers animation 🎉

## 📝 Customization Guide

### **Step 1: Customize Images**

Open `script.js` and find the `stageImages` array (around line 6):

```javascript
const stageImages = [
    'URL_FOR_STAGE_0',  // Initial image
    'URL_FOR_STAGE_1',  // After 1st "No" click
    'URL_FOR_STAGE_2',  // After 2nd "No" click
    'URL_FOR_STAGE_3',  // After 3rd "No" click
    'URL_FOR_STAGE_4',  // After 4th "No" click
    'URL_FOR_STAGE_5'   // After 5th "No" click (final)
];
```

**Replace each URL with:**
- Your own uploaded images (use services like Imgur, Cloudinary, or GitHub)
- Or use Unsplash URLs (already provided as defaults)
- Recommended size: 400x400px for best quality

### **Step 2: Customize Messages**

In the same `script.js` file, find the `stageMessages` array (around line 16):

```javascript
const stageMessages = [
    "Your message for stage 0",
    "Your message for stage 1",
    "Your message for stage 2",
    "Your message for stage 3",
    "Your message for stage 4",
    "Your message for stage 5 (final)"
];
```

**Write your own romantic messages for each stage!**

### **Step 3: Customize Benefits**

Open `success.js` and find the `benefits` array (around line 6):

```javascript
const benefits = [
    { icon: '💝', text: 'Unlimited Love' },
    { icon: '🤗', text: 'Always Support' },
    // Add more benefits here!
];
```

Add as many benefits as you want! Each benefit needs an emoji icon and short text.

### **Step 4: Customize Coupon (Optional)**

In `success.html`, you can edit the coupon text (around line 30).

## 🚀 How to Upload to GitHub

### Method 1: GitHub Web Interface (Easiest)

1. **Create a new repository:**
   - Go to github.com and sign in
   - Click the "+" icon → "New repository"
   - Name it: `valentine-proposal` (or any name you like)
   - Make it public
   - Click "Create repository"

2. **Upload files:**
   - Click "uploading an existing file"
   - Drag and drop all 5 files:
     - `index.html`
     - `success.html`
     - `styles.css`
     - `script.js`
     - `success.js`
   - Click "Commit changes"

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/valentine-proposal/`

### Method 2: Using Git (Terminal)

```bash
# Navigate to your project folder
cd path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Valentine proposal website"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/valentine-proposal.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages as described in Method 1, step 3.

## 📱 Testing Locally

Before uploading, test your website:

1. Open `index.html` in your web browser
2. Click the "NO" button 5 times to see YES expand and NO disappear
3. Click "YES" at any stage to see the success page
4. Test the coupon download feature

## 🎁 File Structure

```
valentine-proposal/
│
├── index.html          # Main proposal page
├── success.html        # Success/celebration page
├── styles.css          # All styling
├── script.js           # Main page functionality
└── success.js          # Success page functionality
```

## 💡 Layout Details

- **A4 Page**: 794px wide with 40px margins on all sides
- **Inner Padding**: 60px padding inside the white container
- **Buttons**: Full width from left border to right border
- **Button Stacking**: YES above, NO below
- **Button Colors**: YES in bright green, NO in red
- **YES Growth**: Expands vertically (height) with each NO click
- **Stage 5**: YES button fills all space below message to bottom, NO removed

## 🎨 Color Customization

Want to change colors? Edit the CSS variables in `styles.css` (around line 3):

```css
:root {
    --color-yes: #00e676;          /* YES button - green */
    --color-no: #ff1744;           /* NO button - red */
    --color-primary: #ff1744;      /* Main pink/red color */
}
```

## 💖 Made with Love for Valentine's Day
