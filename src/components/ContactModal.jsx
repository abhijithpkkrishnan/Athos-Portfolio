import React, { useState } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/abhijithpkkrishnan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:abhijithpkkrishnan@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback on network error
      window.location.href = `mailto:abhijithpkkrishnan@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 25, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 25, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <button className="close-modal-btn" onClick={onClose}>
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '32px 0' }}
              >
                <CheckCircle size={48} color="#22c55e" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                  Thank you for reaching out! Your message has been sent to <strong>abhijithpkkrishnan@gmail.com</strong>.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Get in Touch</h2>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
                  Have a project in mind, a technical query, or looking to collaborate? Drop a message below!
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Joe Cole"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Type your message here..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-pill-dark"
                    style={{ width: '100%', padding: '12px', marginTop: '12px', opacity: loading ? 0.8 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {loading ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <Loader2 className="animate-spin" size={16} /> Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


