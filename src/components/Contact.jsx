import React, { useRef } from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q5gqvj6',      
        'template_51cwhpm',     
        form.current,
        '_sv5ttGk98coeE0FU'     
      )
      .then(
        (result) => {
          alert('Message sent successfully! Thank you for reaching out. I\'ll get back to you soon :)');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen px-6 py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // animation triggers every time in viewport
            className="bg-[#1B1B1B] p-8 rounded-xl shadow-md space-y-10"
          >
            <h3 className="text-3xl font-semibold text-white">Get In Touch</h3>

            <div className="flex items-start gap-4">
              <Mail className="text-green-400 mt-1 transition-transform duration-300 hover:scale-125" size={32} />
              <div>
                <p className="text-xl font-semibold text-white">Email</p>
                <a
                  href="mailto:priyadharshini6508@gmail.com"
                  className="text-xl text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  priyadharshini6508@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Linkedin className="text-green-400 mt-1 transition-transform duration-300 hover:scale-125" size={32} />
              <div>
                <p className="text-xl font-semibold text-white">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/priyadharshini-ganeshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  linkedin.com/in/priyadharshini-ganeshkumar
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-green-400 mt-1 transition-transform duration-300 hover:scale-125" size={32} />
              <div>
                <p className="text-xl font-semibold text-white">Location</p>
                <p className="text-xl text-gray-300">Davis, California</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // animation triggers every time in viewport
            className="bg-[#1B1B1B] p-8 rounded-xl shadow-md"
          >
            <h3 className="text-3xl font-semibold mb-6 text-white">Send Me a Message</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-[#0F0F0F] text-white text-lg p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#0F0F0F] text-white text-lg p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-[#0F0F0F] text-white text-lg p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black text-xl font-semibold py-4 rounded-md flex justify-center items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
