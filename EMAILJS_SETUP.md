# EmailJS Setup Instructions

To make the contact forms fully functional, you need to set up EmailJS service. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates
You need to create two templates:

### Template 1: Contact Form
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Website
```

4. Note down your **Template ID**

### Template 2: Consultation Form
1. Create another template for consultation requests
2. Use this template content:

**Subject:** New Consultation Request from {{from_name}}

**Body:**
```
Hello,

You have received a new consultation request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Requirements:
{{requirements}}

Best regards,
Your Portfolio Website
```

4. Note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)

## 5. Update the Code
Replace the placeholder values in both Contact.jsx and ConsultationForm.jsx:

### In Contact.jsx (line ~30):
```javascript
const result = await emailjs.send(
  'service_xzcbo9a', // Replace with your actual service ID
  '.template_pjb1ion', // Replace with your contact template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: email,
  },
  '_DTzWXEmKqgPN6h-E' // Replace with your actual public key
);
```

### In ConsultationForm.jsx (line ~28):
```javascript
const result = await emailjs.send(
  'service_xzcbo9a', // Replace with your actual service ID
  'template_qmajc6f', // Replace with your consultation template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    company: formData.company,
    project_type: formData.projectType,
    budget: formData.budget,
    timeline: formData.timeline,
    requirements: formData.requirements,
    to_email: 'mudassir.dev09@gmail.com',
  },
  '_DTzWXEmKqgPN6h-E' // Replace with your actual public key
);
```

## 6. Test Your Forms
1. Fill out and submit both forms
2. Check your email inbox for the messages
3. Verify that all form data is being sent correctly

## Notes
- EmailJS free plan allows 200 emails per month
- Make sure to keep your keys secure
- Test thoroughly before going live
- Consider adding additional validation if needed

Your contact forms are now ready to send real emails!