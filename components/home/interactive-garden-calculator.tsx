"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calculator, CheckCircle2 } from "lucide-react"

export function InteractiveGardenCalculator() {
  const [step, setStep] = useState(1)
  const [space, setSpace] = useState("")
  const [gardenType, setGardenType] = useState("")
  const [plants, setPlants] = useState<string[]>([])

  const calculateCost = () => {
    let baseCost = 0
    if (space === "balcony") baseCost = 15000
    if (space === "backyard") baseCost = 35000
    if (space === "rooftop") baseCost = 50000

    return baseCost.toLocaleString()
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator size={16} />
            Interactive Tool
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Design Your Dream Garden</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Answer a few quick questions to get a personalized garden estimate
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Step {step} of 3</span>
              <span className="text-sm text-muted-foreground font-normal">
                {Math.round((step / 3) * 100)}% Complete
              </span>
            </CardTitle>
            <div className="w-full bg-muted h-2 rounded-full mt-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What space do you have available?</Label>
                <RadioGroup value={space} onValueChange={setSpace}>
                  <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="balcony" id="balcony" />
                    <Label htmlFor="balcony" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Balcony/Veranda</p>
                      <p className="text-sm text-muted-foreground">Perfect for vertical gardens</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="backyard" id="backyard" />
                    <Label htmlFor="backyard" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Backyard</p>
                      <p className="text-sm text-muted-foreground">Ground-level raised beds</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="rooftop" id="rooftop" />
                    <Label htmlFor="rooftop" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Rooftop</p>
                      <p className="text-sm text-muted-foreground">Large-scale urban farming</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What type of garden interests you?</Label>
                <RadioGroup value={gardenType} onValueChange={setGardenType}>
                  <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="vegetable" id="vegetable" />
                    <Label htmlFor="vegetable" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Vegetable Garden</p>
                      <p className="text-sm text-muted-foreground">Kale, spinach, tomatoes, herbs</p>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="hybrid" id="hybrid" />
                    <Label htmlFor="hybrid" className="flex-1 cursor-pointer">
                      <p className="font-semibold">Hybrid (Vegetables + Rabbits)</p>
                      <p className="text-sm text-muted-foreground">Complete food production system</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 3 && space && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Your Garden Estimate</h3>
                  <div className="text-5xl font-bold text-primary my-6">KSh {calculateCost()}</div>
                  <p className="text-muted-foreground mb-6">
                    Complete installation with organic inputs, training, and 3 months of support
                  </p>
                  <div className="space-y-2 text-left max-w-md mx-auto bg-muted/50 p-6 rounded-lg">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Professional installation</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Organic soil & seedlings</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Training & maintenance guide</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>3 months follow-up support</span>
                    </p>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full text-lg">
                  <a href="/book-consultation">Book Free Consultation</a>
                </Button>
              </div>
            )}

            {step < 3 && (
              <div className="flex gap-4">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                    Back
                  </Button>
                )}
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={(step === 1 && !space) || (step === 2 && !gardenType)}
                  className="flex-1"
                >
                  Continue
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
