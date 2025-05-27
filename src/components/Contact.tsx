
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Input 
                placeholder="Email" 
                type="email"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input 
                placeholder="Subject" 
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea 
                placeholder="Your message..." 
                rows={5}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card> */}

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">info@aronixwebtech.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 921-139-1122</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-white text-lg font-semibold">Address</h3>
                  <p className="text-gray-300">Plot 55 , 4th floor ,sector-23B ,Dwarka </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
