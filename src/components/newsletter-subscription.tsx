"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ContactNow from "./ContactNow";

export default function WeeklyAINewsletter() {
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
              <form
                action="https://emails.lla.in/subscribe"
                method="POST"
                acceptCharset="utf-8"
                className="space-y-4"
              >
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />

                <Input
                  type="text"
                  id="JobDesignation"
                  name="JobDesignation"
                  placeholder="e.g., Software Engineer, Marketing Manager"
                  required
                />

                <Input
                  type="text"
                  id="Company"
                  name="Company"
                  placeholder="Enter your company name"
                  required
                />

                {/* Honeypot field for spam prevention */}
                <div style={{ display: "none" }}>
                  <label htmlFor="hp">HP</label>
                  <input type="text" name="hp" id="hp" />
                </div>

                {/* Hidden required fields */}
                <input
                  type="hidden"
                  name="list"
                  value="68GRsk325uhvP08mY8Mxmw"
                />
                <input type="hidden" name="subform" value="yes" />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 md:px-8 lg:px-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <ContactNow />

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2023 Newsletter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
