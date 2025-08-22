'use client';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

type ContactProps = {
  className?: string;
};

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:Zacharyat19@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zachtaylor22775/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact({ className = '' }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = (formData: FormData) => {
    const newErrors: typeof formErrors = {};
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
    if (!message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate before sending
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({}); // clear errors

    try {
      const response = await fetch('https://formspree.io/f/xnnzenwp', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`py-24 bg-gradient-to-br from-background to-background/50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Links */}
          <ScrollAnimation animation="fade-in-left" delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <ScrollAnimation key={link.name} animation="fade-in-left" delay={300 + index * 100}>
                    <a
                      href={link.href}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                        {link.name}
                      </span>
                    </a>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Quick Contact Form */}
          <ScrollAnimation animation="fade-in-right" delay={400}>
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 no-validate">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground ${
                      formErrors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground ${
                      formErrors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-input border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
                {status === 'success' && <p className="text-green-500 mt-2">Message sent, thank you!</p>}
                {status === 'error' && <p className="text-red-500 mt-2">Oops, something went wrong. Try again.</p>}
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}