"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent } from "./ui/card"
import { Mail } from "lucide-react"
import { useToast } from "../hooks/use-toast"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    designation: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "498721e2-e465-4bec-aac0-8b60ba275e8e",
          name: formData.name,
          email: formData.email,
          website: formData.website,
          designation: formData.designation,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "The form has been submitted successfully",
        })
        
        // Reset form
        setFormData({
          name: "",
          website: "",
          designation: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
              <Card className="bg-white/5 backdrop-blur-lg border-white/10">
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
              <Card className="w-full max-w-lg bg-white/5 backdrop-blur-lg border-white/10">
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400"
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
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Feel free to reach out..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400 resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
