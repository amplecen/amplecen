'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSend = async () => {
    if (!email) return
    setIsSubmitting(true)
    try {
      await supabase.from('user_invites').insert([
        {
          user_name: "",
          user_email: email,
          message: message,
          added_from: {
            source: {
              url: window.location.href,
              app: "landing_v1",
              cta: "footer_form"
            },
            meta: {
              referrer: document.referrer || "direct"
            }
          }
        }
      ])
      setSent(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="amp-section" style={{ padding: '96px 64px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">Contact</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>

        <div className="amp-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 400,
              color: 'var(--midnight)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              marginBottom: 20,
            }}>
              Got something<br />
              <em style={{ color: 'var(--ember)' }}>worth sharing?</em>
            </h2>
            <p style={{
              fontSize: 15,
              color: 'var(--midnight)',
              opacity: 0.5,
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: 360,
              marginBottom: 32,
            }}>
              For early access, press, partnerships, or if you've spotted a pain point you think we should know about — we read everything.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'General', value: 'hello@amplecen.com' },
                { label: 'Rhythmé early access', value: 'rhythme@amplecen.com' },
                { label: 'Lyceum', value: 'lyceum.amplecen.com' },
              ].map(({ label, value }) => (
                <div key={label} className="amp-contact-item" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.55, minWidth: 140 }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--midnight)', opacity: 0.55 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {sent ? (
            <div style={{ paddingTop: 8 }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: '50%',
                background: 'rgba(126,184,152,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16, fontSize: 18,
              }}>✓</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--midnight)', marginBottom: 8 }}>Sent.</p>
              <p style={{ fontSize: 14, color: 'var(--midnight)', opacity: 0.45, fontWeight: 300 }}>We'll get back to you soon.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.1)',
                  borderRadius: 12,
                  padding: '13px 18px',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
              />
              <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} rows={4}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.1)',
                  borderRadius: 12,
                  padding: '13px 18px',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
              />
              <button onClick={handleSend} disabled={isSubmitting}
                style={{
                  background: 'var(--midnight)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '13px 28px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'background 0.2s',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >{isSubmitting ? 'Sending...' : 'Send message'}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
