import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    city: '',
    state: '',
    practiceType: '',
    lawFirmName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, 'leads'), {
        name: formData.name,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        practiceType: formData.practiceType,
        lawFirmName: formData.practiceType === 'Law Firm' ? formData.lawFirmName : '',
        message: formData.message,
        createdAt: serverTimestamp(),
        source: 'octogenie-website'
      });

      console.log('Document written with ID: ', docRef.id);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        city: '',
        state: '',
        practiceType: '',
        lawFirmName: '',
        message: ''
      });

      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit(e);
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[101] p-4"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10 
              shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2.5 rounded-full 
                  bg-gray-800/80 hover:bg-gray-700/80 active:bg-gray-600/80 
                  backdrop-blur-sm border border-white/10
                  transition-all duration-200 z-[102] touch-manipulation
                  shadow-lg hover:shadow-xl"
              >
                <X className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </button>

              <h2 className="text-2xl font-bold mb-6">Let's Transform Your Legal Business</h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="city">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="state">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Practice Type *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="practiceType"
                        value="Individual Lawyer"
                        checked={formData.practiceType === 'Individual Lawyer'}
                        onChange={handleChange}
                        className="mr-3 text-blue-500 focus:ring-blue-500/20"
                        required
                      />
                      <span className="text-sm">Individual Lawyer</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="practiceType"
                        value="Law Firm"
                        checked={formData.practiceType === 'Law Firm'}
                        onChange={handleChange}
                        className="mr-3 text-blue-500 focus:ring-blue-500/20"
                        required
                      />
                      <span className="text-sm">Law Firm</span>
                    </label>
                  </div>
                </div>

                {formData.practiceType === 'Law Firm' && (
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lawFirmName">
                      Name of the Law Firm *
                    </label>
                    <input
                      type="text"
                      id="lawFirmName"
                      name="lawFirmName"
                      value={formData.lawFirmName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                        focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500
                      focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center">
                    ✅ Thank you! Your inquiry has been submitted successfully. We'll get back to you soon!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-center">
                    ❌ Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                    py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group transition-all
                    hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to Database...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;