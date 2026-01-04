"use client"

import type React from "react"

import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Input } from "@/Shamba-Connect-Website/components/ui/input"
import { Label } from "@/Shamba-Connect-Website/components/ui/label"
import { Textarea } from "@/Shamba-Connect-Website/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Shamba-Connect-Website/components/ui/select"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 bg-card">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-primary" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Consultation Request Received!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your interest in Shamba Connect. Our team will review your request and contact you within
                24 hours to schedule your consultation.
              </p>
              <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-card">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Request Your Consultation</CardTitle>
            <CardDescription>
              Fill out the form below and our team will contact you to schedule your consultation at a convenient time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required placeholder="+254 700 000 000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input id="location" required placeholder="e.g., Nairobi, Karen" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="consultationType">Consultation Type *</Label>
                <Select required>
                  <SelectTrigger id="consultationType">
                    <SelectValue placeholder="Select consultation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Consultation</SelectItem>
                    <SelectItem value="video">Virtual Consultation</SelectItem>
                    <SelectItem value="onsite">On-Site Visit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceInterest">Service Interest *</Label>
                <Select required>
                  <SelectTrigger id="serviceInterest">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen-garden">Kitchen Garden Installation</SelectItem>
                    <SelectItem value="landscaping">Landscape-cum-Foodscape Design</SelectItem>
                    <SelectItem value="seedlings">Seedling Propagation</SelectItem>
                    <SelectItem value="rabbit-farming">Rabbit Unit Setup</SelectItem>
                    <SelectItem value="training">Training & Consultancy</SelectItem>
                    <SelectItem value="retail">Retail of Inputs</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell Us About Your Project *</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Describe your space, goals, and any specific requirements..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Consultation Request
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Shamba Connect regarding your consultation
                request.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
