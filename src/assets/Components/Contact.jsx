export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
            Get In Touch
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Together</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out to me directly!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                
                {/* Phone Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</p>
                    <a href="tel:+85512345678" className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors">
                      +855 12 345 678
                    </a>
                  </div>
                </div>

                {/* Telegram Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Telegram</p>
                    <a href="https://t.me/YourUsername" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-900 hover:text-blue-500 transition-colors">
                      @YourUsername
                    </a>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:your.email@example.com" className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-lg font-medium text-gray-900">
                      Phnom Penh, Cambodia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}