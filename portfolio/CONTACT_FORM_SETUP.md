# Contact Form Setup Guide

The contact form is currently set up with placeholder code. Here are 3 easy options to make it work:

## Option 1: Formspree (Recommended - Free & Easy)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: `xrgkqjqw`)
5. Replace `YOUR_FORM_ID` in `script.js` with your actual form ID

**Example:**
```javascript
const response = await fetch('https://formspree.io/f/xrgkqjqw', {
```

**Benefits:**
- ✅ Free for up to 50 submissions/month
- ✅ No server required
- ✅ Spam protection included
- ✅ Email notifications

---

## Option 2: Netlify Forms (If hosting on Netlify)

1. Deploy your site to Netlify
2. Add `netlify` attribute to your form in `index.html`:
```html
<form netlify name="contact" method="POST">
```
3. Uncomment the Netlify Forms code in `script.js`
4. Remove the Formspree code

**Benefits:**
- ✅ Free with Netlify hosting
- ✅ Built-in spam protection
- ✅ Form submissions in Netlify dashboard

---

## Option 3: EmailJS (Client-side email)

1. Go to [emailjs.com](https://emailjs.com)
2. Create account and connect your email service
3. Create email template
4. Get your Service ID, Template ID, and Public Key
5. Replace placeholders in `script.js`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID` 
   - `YOUR_PUBLIC_KEY`
6. Uncomment the EmailJS code and remove Formspree code

**Benefits:**
- ✅ Free tier available
- ✅ Works with Gmail, Outlook, etc.
- ✅ No server required

---

## Quick Setup (Formspree - 5 minutes)

1. **Sign up**: Go to formspree.io and create account
2. **Create form**: Click "New Form" 
3. **Get ID**: Copy the form ID from the URL
4. **Update code**: In `script.js`, replace `YOUR_FORM_ID` with your ID
5. **Test**: Submit a test message

**Example update:**
```javascript
// Change this line in script.js:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {

// To this (with your actual ID):
const response = await fetch('https://formspree.io/f/xrgkqjqw', {
```

That's it! Your contact form will now send real emails to your inbox.

---

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify your form ID is correct
- Make sure you're online
- Check spam folder for test emails

**Need help?**
- Formspree: Check their documentation
- Netlify: Check Netlify Forms docs
- EmailJS: Check their setup guide

---

## Current Status

The form currently shows "Message sent successfully!" but doesn't actually send emails. Follow one of the options above to make it functional.
