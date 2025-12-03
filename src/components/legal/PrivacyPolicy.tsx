import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="fixed w-full backdrop-blur-md z-50 bg-black/80">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://i.postimg.cc/mrDc2tqj/3dgifmaker09870.gif"
              alt="OctoGenie"
              className="h-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              OCTOGENIE
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24 pt-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                OctoGenie ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3 text-gray-200">2.1 Personal Information</h3>
              <p className="leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
                <li>Fill out contact forms on our website</li>
                <li>Register for our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a demo or consultation</li>
                <li>Communicate with us via email or other channels</li>
              </ul>
              <p className="leading-relaxed">
                This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-6 text-gray-200">2.2 Automatically Collected Information</h3>
              <p className="leading-relaxed">
                When you access our website, we may automatically collect certain information about your device and usage, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf, such as hosting, data analysis, and customer service.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share information with third parties when you give us explicit consent to do so.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Retention</h2>
              <p className="leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When we no longer need to use your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Access:</strong> The right to request copies of your personal information.</li>
                <li><strong>Rectification:</strong> The right to request correction of inaccurate or incomplete information.</li>
                <li><strong>Erasure:</strong> The right to request deletion of your personal information under certain conditions.</li>
                <li><strong>Restriction:</strong> The right to request that we restrict processing of your personal information.</li>
                <li><strong>Data Portability:</strong> The right to request transfer of your data to another organization.</li>
                <li><strong>Objection:</strong> The right to object to our processing of your personal information.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to improve your experience on our website. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                <p><strong>Email:</strong> support@octogenie.com</p>
                <p className="mt-2"><strong>Address:</strong> Anik & Associates, No.39/2, 2nd Floor, K. G. Road, Bangalore North, Karnataka, India, 560009</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-gray-800/50 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} OctoGenie. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
