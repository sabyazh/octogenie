import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-gray-400 mb-8">Last updated: December 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to OctoGenie. These Terms and Conditions govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>"Company"</strong> refers to OctoGenie, located at Anik & Associates, No.39/2, 2nd Floor, K. G. Road, Bangalore North, Karnataka, India, 560009.</li>
                <li><strong>"Service"</strong> refers to the AI-powered automation solutions and related services provided by OctoGenie.</li>
                <li><strong>"User"</strong> refers to any individual or entity that accesses or uses our services.</li>
                <li><strong>"Content"</strong> refers to all information, data, text, software, graphics, and other materials available through our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Use of Services</h2>
              <p className="leading-relaxed mb-4">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Provide accurate and complete information when creating an account or using our services.</li>
                <li>Maintain the security of your account credentials and notify us immediately of any unauthorized access.</li>
                <li>Use our services only for lawful purposes and in accordance with these terms.</li>
                <li>Not attempt to interfere with or disrupt the integrity or performance of our services.</li>
                <li>Not attempt to gain unauthorized access to our systems or networks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of OctoGenie or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. User Content</h2>
              <p className="leading-relaxed">
                You retain ownership of any content you submit, post, or display through our services. By submitting content, you grant OctoGenie a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content solely for the purpose of providing and improving our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Payment Terms</h2>
              <p className="leading-relaxed">
                If you purchase any paid services, you agree to pay all applicable fees as described at the time of purchase. All payments are non-refundable except as expressly set forth in our Refund Policy. We reserve the right to change our pricing at any time, with notice provided for existing subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, OctoGenie shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless OctoGenie and its officers, directors, employees, agents, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsOfService;
