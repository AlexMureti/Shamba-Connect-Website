"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-12 pb-12 text-center">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-primary" size={48} />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting Shamba Connect. We'll respond to your inquiry within 24 hours.
          </p>
          <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Full Name *</Label>
            <Input id="contact-name" required placeholder="Your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">Email Address *</Label>
            <Input id="contact-email" type="email" required placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">Phone Number</Label>
            <Input id="contact-phone" type="tel" placeholder="+254 700 000 000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-subject">Subject *</Label>
            <Select required>
              <SelectTrigger id="contact-subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="services">Services Information</SelectItem>
                <SelectItem value="pricing">Pricing & Quotes</SelectItem>
                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Your Message *</Label>
            <Textarea id="contact-message" required placeholder="Tell us how we can help..." rows={6} />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
