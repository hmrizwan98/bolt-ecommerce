"use client"

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message received!",
      description: "Thank you for contacting us. We&apos;ll get back to you shortly.",
    })
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    setIsSubmitting(false)
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you. Fill out the form below or reach out through any of our contact channels.
          </p>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <a href="mailto:hello@beautysparkle.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@beautysparkle.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Fri, 9am-5pm EST
                    </p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <address className="text-muted-foreground not-italic">
                      123 Beauty Lane<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-card p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pinterest"><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/><path d="M12 3v4"/><path d="m9 7 3 3 3-3"/><line x1="3" x2="9" y1="14" y2="14"/><line x1="15" x2="21" y1="14" y2="14"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-playfair mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-playfair text-lg mb-3">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for all unused and unopened products. If you&apos;re not completely satisfied, please contact our customer service team to initiate a return.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-playfair text-lg mb-3">How long does shipping take?</h3>
              <p className="text-muted-foreground">
                Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping options are available at checkout for faster delivery.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-playfair text-lg mb-3">Are your products cruelty-free?</h3>
              <p className="text-muted-foreground">
                Yes, all of our products are 100% cruelty-free. We never test on animals and work only with suppliers who uphold the same ethical standards.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-playfair text-lg mb-3">Do you offer international shipping?</h3>
              <p className="text-muted-foreground">
                Yes, we ship to most countries worldwide. International shipping times and costs vary by location. Please check our shipping policy for more details.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Can&apos;t find the answer you&apos;re looking for? 
              <a href="mailto:support@beautysparkle.com" className="text-primary hover:underline ml-1">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}