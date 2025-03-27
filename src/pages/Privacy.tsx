import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Header />

      {/* Privacy Policy Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            At Doro Foods LLC, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways,
            including:
          </p>
          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            Personal Data
          </h3>
          <p className="mb-4">
            When you use our website or services, we may collect personally
            identifiable information, such as your name, email address, phone
            number, company name, and other details that you voluntarily provide
            when you:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Submit a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our products or services</li>
            <li>Participate in a survey or promotion</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <p className="mb-4">
            When you visit our website, our servers may automatically log
            standard data provided by your web browser, such as your IP address,
            browser type, operating system, referring pages, and the dates and
            times of your visits.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We may use the information we collect about you for various
            purposes, including to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>
              Send you technical notices, updates, and administrative messages
            </li>
            <li>Communicate with you about products, services, and events</li>
            <li>
              Monitor and analyze trends, usage, and activities in connection
              with our services
            </li>
            <li>
              Detect, investigate, and prevent fraud and other illegal
              activities
            </li>
            <li>Protect the rights and property of Doro Foods and others</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            3. Disclosure of Your Information
          </h2>
          <p className="mb-4">
            We may share information about you in the following circumstances:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With your consent or at your direction</li>
          </ul>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information to third
            parties for their marketing purposes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="mb-4">
            We implement reasonable security measures to help protect your
            personal information from unauthorized access, use, or disclosure.
            However, no method of electronic transmission or storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            5. Your Choices
          </h2>
          <p className="mb-4">
            You have certain rights regarding your personal information,
            including the right to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Access, update, or delete your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>
              Request a copy of the personal information we hold about you
            </li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information
            provided below.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            We may use cookies, web beacons, and similar tracking technologies
            to collect information about your browsing activities and to improve
            your experience on our website. You can control cookies through your
            browser settings and other tools.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            7. Children's Privacy
          </h2>
          <p className="mb-4">
            Our services are not intended for individuals under the age of 18.
            We do not knowingly collect personal information from children under
            18. If we learn that we have collected personal information from a
            child under 18, we will take steps to delete that information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date. You are advised to review this
            Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            9. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <address className="not-italic mb-6">
            Doro Foods LLC
            <br />
            2 Main Street
            <br />
            Ridgefield Park, NJ 07660
            <br />
            Email: info@dorofoods.com
            <br />
            Phone: +1 (347) 592-4494
          </address>

          <p className="text-sm text-gray-500 mt-10">Last Updated: June 2024</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPage;
