import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Calculator({ onOpenContact }) {
  const [siteType, setSiteType] = useState('informational'); // 'informational' | 'ecommerce'
  
  // Options state
  const [pageCount, setPageCount] = useState(1);
  const [sitePlanning, setSitePlanning] = useState(false);
  const [onsiteOptimization, setOnsiteOptimization] = useState(false);
  const [contentMigration, setContentMigration] = useState(false);
  const [motionGraphics, setMotionGraphics] = useState(1);
  const [customFeatures, setCustomFeatures] = useState(false);

  // Dynamic Price calculation in INR
  const baseCost = siteType === 'informational' ? 25000 : 75000;
  const baseTimeWeeks = siteType === 'informational' ? 2 : 4;

  const pagesPrice = (pageCount - 1) * 3500;
  const planningPrice = sitePlanning ? 8000 : 0;
  const optimizationPrice = onsiteOptimization ? 6000 : 0;
  const migrationPrice = contentMigration ? 10000 : 0;
  const motionPrice = motionGraphics * 5000;
  const customPrice = customFeatures ? 15000 : 0;

  const totalCost = baseCost + pagesPrice + planningPrice + optimizationPrice + migrationPrice + motionPrice + customPrice;

  // Dynamic Time calculation
  let extraWeeks = 0;
  if (pageCount > 5) extraWeeks += 1;
  if (motionGraphics > 3) extraWeeks += 1;
  if (customFeatures) extraWeeks += 1;
  const totalWeeks = baseTimeWeeks + extraWeeks;

  return (
    <motion.div
      className="calculator-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title" style={{ fontSize: '48px', marginBottom: '16px' }}>
            Website Cost Calculator
          </h1>
          <p className="section-subtitle">
            Fill in the features below and calculate custom web design price with our Free website cost calculator.
          </p>
        </motion.div>

        <div className="calc-grid">
          {/* Left Panel: Scope Selection */}
          <motion.div
            className="calc-panel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '20px' }}>Scope</h2>

            <div style={{ fontSize: '13px', fontWeight: 500, color: '#6b7280', marginBottom: '8px' }}>
              Choose your Website Type
            </div>

            <div className="calc-tabs" style={{ position: 'relative' }}>
              <button
                className={`calc-tab ${siteType === 'informational' ? 'active' : ''}`}
                onClick={() => setSiteType('informational')}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {siteType === 'informational' && (
                  <motion.div
                    layoutId="calcTabActiveBg"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#ffffff',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                Informational
              </button>
              <button
                className={`calc-tab ${siteType === 'ecommerce' ? 'active' : ''}`}
                onClick={() => setSiteType('ecommerce')}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {siteType === 'ecommerce' && (
                  <motion.div
                    layoutId="calcTabActiveBg"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: '#ffffff',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      zIndex: -1
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                E-commerce
              </button>
            </div>

            {/* Rows */}
            <div className="calc-row">
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${pageCount > 0 ? 'on' : ''}`}
                  onClick={() => setPageCount(pageCount > 0 ? 0 : 1)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: pageCount > 0 ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Number of Pages</span>
              </div>
              <div className="calc-controls">
                <div className="stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => setPageCount(Math.max(1, pageCount - 1))}
                  >
                    -
                  </button>
                  <span className="stepper-val">{pageCount}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => setPageCount(pageCount + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="calc-price-tag">₹{(pagesPrice + 3500).toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div className="calc-row">
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${sitePlanning ? 'on' : ''}`}
                  onClick={() => setSitePlanning(!sitePlanning)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: sitePlanning ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Site Planning</span>
              </div>
              <div className="calc-price-tag">₹{planningPrice.toLocaleString('en-IN')}</div>
            </div>

            <div className="calc-row">
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${onsiteOptimization ? 'on' : ''}`}
                  onClick={() => setOnsiteOptimization(!onsiteOptimization)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: onsiteOptimization ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Onsite Optimization</span>
              </div>
              <div className="calc-price-tag">₹{optimizationPrice.toLocaleString('en-IN')}</div>
            </div>

            <div className="calc-row">
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${contentMigration ? 'on' : ''}`}
                  onClick={() => setContentMigration(!contentMigration)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: contentMigration ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Content Migration</span>
              </div>
              <div className="calc-price-tag">₹{migrationPrice.toLocaleString('en-IN')}</div>
            </div>

            <div className="calc-row">
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${motionGraphics > 0 ? 'on' : ''}`}
                  onClick={() => setMotionGraphics(motionGraphics > 0 ? 0 : 1)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: motionGraphics > 0 ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Motion Graphics</span>
              </div>
              <div className="calc-controls">
                <div className="stepper">
                  <button
                    className="stepper-btn"
                    onClick={() => setMotionGraphics(Math.max(0, motionGraphics - 1))}
                  >
                    -
                  </button>
                  <span className="stepper-val">{motionGraphics}</span>
                  <button
                    className="stepper-btn"
                    onClick={() => setMotionGraphics(motionGraphics + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="calc-price-tag">₹{motionPrice.toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div className="calc-row" style={{ borderBottom: 'none' }}>
              <div className="calc-row-left">
                <div
                  className={`toggle-switch ${customFeatures ? 'on' : ''}`}
                  onClick={() => setCustomFeatures(!customFeatures)}
                >
                  <motion.div
                    className="toggle-thumb"
                    animate={{ x: customFeatures ? 20 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
                <span className="calc-label">Custom Integrations</span>
              </div>
              <div className="calc-price-tag">₹{customPrice.toLocaleString('en-IN')}</div>
            </div>
          </motion.div>

          {/* Right Panel: Summary Estimate */}
          <motion.div
            className="calc-panel"
            style={{ background: '#f8fafc', height: 'fit-content' }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '24px' }}>Project Estimate</h2>

            <div className="estimate-summary">
              <div className="estimate-row">
                <span style={{ color: '#6b7280' }}>Time</span>
                <span style={{ fontWeight: 600 }}>{totalWeeks} Weeks</span>
              </div>
              <div className="estimate-row" style={{ paddingTop: '12px', borderTop: '1px dashed #cbd5e1' }}>
                <span style={{ color: '#6b7280' }}>Cost</span>
                <motion.span
                  key={totalCost}
                  className="estimate-price-large"
                  initial={{ scale: 1.1, color: '#f97316' }}
                  animate={{ scale: 1, color: '#171717' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  ₹{totalCost.toLocaleString('en-IN')}
                </motion.span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', marginBottom: '24px' }}>
              Transparent pricing with no hidden costs. Includes revisions and delivery guarantee.
            </p>

            <motion.button
              onClick={onOpenContact}
              className="btn-pill-dark"
              style={{ width: '100%', padding: '14px', borderRadius: 'var(--radius-full)' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Contact us
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

