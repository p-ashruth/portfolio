import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'ashruthpamidimarri@gmail.com',
      href: 'mailto:ashruthpamidimarri@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 77949 59643',
      href: 'tel:+917794959643',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Hyderabad, India',
      href: 'https://maps.app.goo.gl/9ymeYvZoyfEWWmZS7',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
            Let's connect! Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Coding illustration */}
          <div className="relative">
            <div className="bg-black rounded-2xl p-8 relative overflow-hidden">
              {/* Coding illustration */}
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coding workspace"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Ashruth Pamidimarri</h3>
                  <p className="text-white mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code.</p>

                  {/* Contact details */}
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                      >
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <info.icon size={16} />
                        </div>
                        <span className="text-sm">{info.detail}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-gray-400"
                    placeholder="Enter your subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none placeholder-gray-400"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>

                {status === 'success' && (
                  <div className="text-center text-green-600 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
