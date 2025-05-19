import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Beauty Sparkle Hub',
  description: 'Learn about our privacy policy and how we protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">
            Last updated: January 1, 2025
          </p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              Beauty Sparkle Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected to Beauty Sparkle Hub (collectively, the &quot;Site&quot;).
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register on the Site, place an order, fill out a form, respond to a survey, engage in other activities, or use certain Site features.
            </p>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name, email address, postal address, and phone number</li>
              <li>Username and password</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Order history and preferences</li>
              <li>Demographic information such as age, gender, and interests</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p>
              We also automatically collect certain information when you visit, use, or navigate the Site. This information does not reveal your specific identity but may include:
            </p>
            <ul>
              <li>Device and usage information (IP address, browser and device characteristics)</li>
              <li>Operating system</li>
              <li>Browsing actions and patterns</li>
              <li>Referring websites</li>
              <li>Information collected through cookies, pixel tags, and other technologies</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Create and manage your account</li>
              <li>Provide you with customer service and support</li>
              <li>Send you administrative information, such as order confirmations and updates to our terms or policies</li>
              <li>Send you marketing and promotional communications (with your consent where required by law)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Understand your preferences and personalize your experience</li>
              <li>Monitor and analyze usage, trends, and activities related to the Site</li>
              <li>Detect, prevent, and address technical issues, fraud, or illegal activity</li>
              <li>Improve the Site, products, and customer experience</li>
            </ul>
            
            <h2>Sharing Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
              <li>
                <strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.
              </li>
              <li>
                <strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
              </li>
            </ul>
            
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy.
            </p>
            
            <h2>Third-Party Websites</h2>
            <p>
              The Site may contain links to third-party websites and applications of interest. Once you have used these links to leave our site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
            </p>
            
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2>Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>Right to access and receive a copy of your personal information</li>
              <li>Right to rectify or update your personal information</li>
              <li>Right to erase or delete your personal information</li>
              <li>Right to restrict processing of your personal information</li>
              <li>Right to object to processing of your personal information</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details provided in the &quot;Contact Us&quot; section below.
            </p>
            
            <h2>Children&apos;s Privacy</h2>
            <p>
              The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              Beauty Sparkle Hub<br />
              123 Beauty Lane<br />
              New York, NY 10001<br />
              United States
            </p>
            <p>
              Email: privacy@beautysparkle.com<br />
              Phone: +1 (234) 567-890
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}