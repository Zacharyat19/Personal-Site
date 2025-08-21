'use client';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

type ContactProps = {
  className?: string;
};

const contactLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Zacharyat19',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.3-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.876.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.63-5.48 5.925.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 22.297 24 17.798 24 12.5 24 5.87 18.627.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zachtaylor22775/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:Zacharyat19@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact({ className = '' }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnnzenwp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`py-24 bg-gradient-to-br from-background to-background/50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 text-foreground resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
                {status === 'success' && <p className="text-green-500 mt-2">Message sent, Thank you!</p>}
                {status === 'error' && <p className="text-red-500 mt-2">Oops, something went wrong. Try again.</p>}
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}