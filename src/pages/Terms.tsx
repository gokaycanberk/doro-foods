import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsPage = () => {
  return (
    <>
      <Header />

      {/* Terms and Conditions Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            Welcome to Doro Foods LLC. These Terms of Service ("Terms") govern
            your use of the Doro Foods website, services, and products. By
            accessing or using our services, you agree to be bound by these
            Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using the Doro Foods website and services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms. If you do not agree to these Terms, please do not use
            our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            2. Changes to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will
            provide notice of any material changes by updating the "Last
            Updated" date at the top of these Terms. Your continued use of our
            services following any changes constitutes your acceptance of the
            revised Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            3. Services
          </h2>
          <p className="mb-4">
            Doro Foods provides food distribution services, connecting premium
            quality products to retailers. Our website provides information
            about our products and services, and allows business customers to
            contact us for distribution inquiries.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            4. User Accounts
          </h2>
          <p className="mb-4">
            Some features of our services may require you to create an account.
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            5. Intellectual Property
          </h2>
          <p className="mb-4">
            All content, features, and functionality of our website, including
            but not limited to text, graphics, logos, and images, are owned by
            Doro Foods and are protected by copyright, trademark, and other
            intellectual property laws. You may not use, reproduce, distribute,
            or create derivative works based on our content without our express
            written permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            In no event shall Doro Foods, its officers, directors, employees, or
            agents be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your
            use of our services. Our liability is limited to the maximum extent
            permitted by law.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            7. Indemnification
          </h2>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Doro Foods and its
            officers, directors, employees, and agents from and against any
            claims, liabilities, damages, losses, and expenses, including
            reasonable attorneys' fees, arising out of or in any way connected
            with your access to or use of our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            8. Governing Law
          </h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the State of New Jersey, without regard to its conflict
            of law provisions. Any dispute arising out of or relating to these
            Terms shall be subject to the exclusive jurisdiction of the courts
            located in New Jersey.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            9. Termination
          </h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our
            services at any time, without notice, for any reason, including if
            we believe that you have violated these Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            10. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
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

export default TermsPage;
