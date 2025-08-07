"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ContactNow from "./ContactNow";

interface FormData {
  fullName: string;
  email: string;
  jobDesignation: string;
  company: string;
}

export default function WeeklyAINewsletter() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    jobDesignation: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to confirmation page (you can change this URL)
    window.location.href = "/thank-you";

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-8 lg:px-12" id="subscribe">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                <span className="text-blue-700 block">Weekly AI Newsletter:</span>
                <span className="text-white block mt-3">Subscribe Today</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                Cut through the noise with curated insights on groundbreaking AI
                tools, trending stories, and more. Join 130,000+ professionals
                navigating the AI revolution.
              </p>
            </div>

            {/* Right side - Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />

                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Email-ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />

                <Input
                  type="text"
                  id="jobDesignation"
                  name="jobDesignation"
                  label="Job Designation*"
                  value={formData.jobDesignation}
                  onChange={handleInputChange}
                  placeholder="e.g., Software Engineer, Marketing Manager"
                  required
                />

                <Input
                  type="text"
                  id="company"
                  name="company"
                  label="Company*"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 md:px-8 lg:px-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Brand Name */}
            <div>
              <h3 className="text-2xl font-bold text-blue-500">AI Weekly</h3>
            </div>
          </div>
          <ContactNow />

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 AI Weekly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
