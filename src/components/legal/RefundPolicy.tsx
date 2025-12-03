import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

interface RefundPolicyProps {
  onBack: () => void;
}

const RefundPolicy: React.FC<RefundPolicyProps> = ({ onBack }) => {
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
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Overview</h2>
              <p className="leading-relaxed">
                At OctoGenie, we are committed to ensuring customer satisfaction with our AI-powered automation solutions and services. This Refund Policy outlines the terms and conditions under which refunds may be requested and processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Eligibility for Refunds</h2>
              <p className="leading-relaxed mb-4">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Service not delivered as described in the agreed scope of work</li>
                <li>Technical issues that prevent the use of the service and cannot be resolved within a reasonable timeframe</li>
                <li>Duplicate charges or billing errors</li>
                <li>Cancellation within the cooling-off period (where applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Refund Request Period</h2>
              <p className="leading-relaxed">
                Refund requests must be submitted within <strong>14 days</strong> of the original purchase date or service activation date, whichever is later. Requests made after this period may be considered on a case-by-case basis at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Non-Refundable Items</h2>
              <p className="leading-relaxed mb-4">
                The following are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Services that have been fully delivered and accepted</li>
                <li>Custom development work that has been completed</li>
                <li>Consultation fees for services already rendered</li>
                <li>Setup fees and implementation charges once work has commenced</li>
                <li>Third-party costs incurred on your behalf (such as licenses, hosting, etc.)</li>
                <li>Services cancelled after the cooling-off period without valid cause</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Subscription Services</h2>
              <p className="leading-relaxed mb-4">
                For subscription-based services:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li><strong>Monthly Subscriptions:</strong> You may cancel at any time. No refunds will be provided for the current billing period, but you will retain access until the end of that period.</li>
                <li><strong>Annual Subscriptions:</strong> Cancellation within the first 14 days may be eligible for a full refund. After 14 days, a prorated refund may be considered based on unused months remaining.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. How to Request a Refund</h2>
              <p className="leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>Send an email to <strong>support@octogenie.com</strong> with the subject line "Refund Request"</li>
                <li>Include your order/invoice number and date of purchase</li>
                <li>Provide a detailed explanation of why you are requesting a refund</li>
                <li>Attach any relevant documentation or evidence supporting your request</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Refund Processing</h2>
              <p className="leading-relaxed mb-4">
                Once we receive your refund request:
              </p>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>We will acknowledge receipt within <strong>2 business days</strong></li>
                <li>Our team will review your request within <strong>5-7 business days</strong></li>
                <li>You will be notified of the decision via email</li>
                <li>If approved, the refund will be processed within <strong>10-14 business days</strong></li>
                <li>Refunds will be credited to the original payment method used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Partial Refunds</h2>
              <p className="leading-relaxed">
                In some cases, we may offer partial refunds where services have been partially delivered or where there are extenuating circumstances. The amount of any partial refund will be determined based on the work completed and the value delivered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Disputes</h2>
              <p className="leading-relaxed">
                If you disagree with our refund decision, you may appeal by responding to our decision email with additional information supporting your case. We will review your appeal and provide a final decision within 7 business days. Our decision on any appeal shall be final.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Refund Policy or need assistance with a refund request, please contact us:
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

export default RefundPolicy;
