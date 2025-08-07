"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"
import { Mail, X } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    designation: "",
    email: "",
    message: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)

    // Show confirmation popup
    setShowConfirmation(true)

    // Reset form
    setFormData({
      name: "",
      website: "",
      designation: "",
      email: "",
      message: "",
    })
  }

  const closeConfirmation = () => {
    setShowConfirmation(false)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 text-white py-16 px-6 md:px-8 lg:px-12 min-h-screen" id="contact">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border-blue-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Nivedan Rathi</h3>
                      <p className="text-blue-300 text-lg font-medium mb-1">AI Strategy Architect & Global Tech Innovator</p>
                      <p className="text-purple-300 mb-4">Jaipur, Rajasthan</p>
                      
                      <div className="flex items-center justify-center gap-2 text-white">
                        <Mail className="w-5 h-5 text-blue-400" />
                        <a 
                          href="mailto:nivedan@futureandai.com" 
                          className="hover:text-blue-300 transition-colors"
                        >
                          nivedan@futureandai.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Contact Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-lg bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border-blue-500/30">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-200 mb-2">
                          Website/Company
                        </label>
                        <Input
                          id="website"
                          name="website"
                          type="text"
                          placeholder="Your website or company name"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="designation" className="block text-sm font-medium text-gray-200 mb-2">
                          Designation
                        </label>
                        <Input
                          id="designation"
                          name="designation"
                          type="text"
                          placeholder="Your job title or role"
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                          E-Mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-blue-400 focus:ring-blue-400 resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Thank You!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out to us. We've received your submission and will get back to you shortly.
                </p>
                <Button
                  onClick={closeConfirmation}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
                >
                  Close
                </Button>
              </div>
              <button onClick={closeConfirmation} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
