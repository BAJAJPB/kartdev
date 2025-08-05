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
  const [showEmailReveal, setShowEmailReveal] = useState(false)

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

  const toggleEmailReveal = () => {
    setShowEmailReveal(!showEmailReveal)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 px-6 md:px-8 lg:px-12 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Content */}
            <div className="space-y-8">

              {/* Email Reveal Section */}
              <div className="space-y-4">
                <Button
                  onClick={toggleEmailReveal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>

                {showEmailReveal && (
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-400">Primary Contact:</span>
                        </div>
                        <p className="text-white font-medium">contact@futureandai.com</p>
                        <p className="text-sm text-gray-400">(Direct: nivedan@futureandai.com)</p>
                        <p className="text-sm text-gray-400">CC: team@futureandai.com</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-lg bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                          E-Mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
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
