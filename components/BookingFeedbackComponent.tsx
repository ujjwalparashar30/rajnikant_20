'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface FormData {
  name: string
  phoneNumber: string
  planType?: 'reserve-seat' | 'hours-plans' | 'per-day-plan'
  reservePlan?: 'standard' | 'premium'
  hoursPlan?: '6hrs' | '8hrs' | '10hrs' | '12hrs'
  feedback?: string
}

const ClassyBookingFeedbackComponent: React.FC<{plan : string}> = ({plan}) => {
  const [activeTab, setActiveTab] = useState<'booking' | 'feedback'>('booking')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    planType: undefined,
    reservePlan: undefined,
    hoursPlan: undefined,
    feedback: ''
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (plan && (plan === 'reserve-seat' || plan === 'hours-plans' || plan === 'per-day-plan')) {
      console.log('Setting plan type:', plan)
      setFormData(prev => ({
        ...prev,
        planType: plan as 'reserve-seat' | 'hours-plans' | 'per-day-plan'
      }))
      
      // Automatically switch to booking tab when a plan is selected
      setActiveTab('booking')
      
      console.log('Form data after setting plan type:', formData)
    }
  }, [plan])

  const reserveSeatPlans = [
    { id: 'standard', name: 'Standard Plan', price: 1200, description: 'Basic workspace with essential amenities' },
    { id: 'premium', name: 'Premium Plan', price: 1500, description: 'Enhanced workspace with premium facilities' }
  ]

  const hoursPlans = [
    { id: '6hrs', name: '6 Hours', price: 600, description: 'Perfect for short work sessions' },
    { id: '8hrs', name: '8 Hours', price: 800, description: 'Standard full working day' },
    { id: '10hrs', name: '10 Hours', price: 900, description: 'Extended working hours' },
    { id: '12hrs', name: '12 Hours', price: 1000, description: 'Maximum daily usage' }
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    console.log("reached")
    console.log(`field : ${field} value : ${value}`)
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert(`${activeTab === 'booking' ? 'Booking' : 'Feedback'} submitted successfully!`);
        setFormData({
          name: '',
          phoneNumber: '',
          planType: undefined,
          reservePlan: undefined,
          hoursPlan: undefined,
          feedback: ''
        });
      } else {
        alert('Submission failed: ' + (result.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Submission failed: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  }

  // Get plan display name for better UX
  const getPlanDisplayName = (planType: string) => {
    switch(planType) {
      case 'reserve-seat': return 'Reserve Your Seat'
      case 'hours-plans': return 'Productive Hours Plan'
      case 'per-day-plan': return 'One Day Pass'
      default: return ''
    }
  }

  return (
    <div className="max-w-[82rem] mx-auto p-8 mt-20 mb-20">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Service Portal</h1>
        <p className="text-gray-600 text-lg">Book your workspace or share your feedback</p>
        {plan && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 inline-block">
            <p className="text-blue-800 font-medium">
              ✨ Selected Plan: {getPlanDisplayName(plan)}
            </p>
          </div>
        )}
      </div>

      <Card className="border-2 border-gray-200 shadow-xl bg-white/80 backdrop-blur-sm">
        {/* Tab Navigation */}
        <div className="relative">
          <div className="flex w-fit">
            <button
              className={`px-8 py-4 text-sm font-semibold transition-all duration-300 bg-transparent border-b-2 relative ${
                activeTab === 'booking' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('booking')}
            >
              <span className="relative z-10">Booking Form</span>
              {activeTab === 'booking' && (
                <div className="absolute inset-0 bg-blue-50/50 rounded-t-lg -z-0" />
              )}
            </button>
            <button
              className={`px-8 py-4 text-sm font-semibold transition-all duration-300 bg-transparent border-b-2 relative ${
                activeTab === 'feedback' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab('feedback')}
            >
              <span className="relative z-10">Feedback Form</span>
              {activeTab === 'feedback' && (
                <div className="absolute inset-0 bg-blue-50/50 rounded-t-lg -z-0" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200" />
        </div>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="98765 43210"
                  required
                />
              </div>
            </div>

            {/* Booking Form Specific Fields */}
            {activeTab === 'booking' && (
              <div className="space-y-6 border-t pt-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Select Plan Type
                  </Label>
                  <Select
                    value={formData.planType ?? ''}
                    onValueChange={(value) => handleInputChange('planType', value)}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Choose your plan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reserve-seat">Reserve Seat</SelectItem>
                      <SelectItem value="hours-plans">Hours Plans</SelectItem>
                      <SelectItem value="per-day-plan">Per Day Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reserve Seat Plans */}
                {formData.planType === 'reserve-seat' && (
                  <div className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <Label className="text-lg font-semibold text-gray-800">
                      Choose Your Reserve Seat Plan
                    </Label>
                    <RadioGroup 
                      value={formData.reservePlan || ''} 
                      onValueChange={(value) => handleInputChange('reservePlan', value)}
                      className="space-y-3"
                    >
                      {reserveSeatPlans.map((plan) => (
                        <div key={plan.id} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-gray-900">{plan.name}</div>
                                <div className="text-sm text-gray-600">{plan.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-blue-600">₹{plan.price}</div>
                                <div className="text-xs text-gray-500">per month</div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">
                        💡 Special Offer: Book for 4+ months and get 20% off each month!
                      </p>
                    </div>
                  </div>
                )}

                {/* Hours Plans */}
                {formData.planType === 'hours-plans' && (
                  <div className="space-y-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <Label className="text-lg font-semibold text-gray-800">
                      Select Your Hours Plan
                    </Label>
                    <RadioGroup 
                      value={formData.hoursPlan || ''} 
                      onValueChange={(value) => handleInputChange('hoursPlan', value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    >
                      {hoursPlans.map((plan) => (
                        <div key={plan.id} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-gray-900">{plan.name}</div>
                                <div className="text-sm text-gray-600">{plan.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-green-600">₹{plan.price}</div>
                                <div className="text-xs text-gray-500">per month</div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800 font-medium">
                        💡 Special Offer: Book for 4+ months and get 20% off each month!
                      </p>
                    </div>
                  </div>
                )}

                {/* Per Day Plan */}
                {formData.planType === 'per-day-plan' && (
                  <div className="space-y-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <Label className="text-lg font-semibold text-gray-800">
                      One Day Pass Details
                    </Label>
                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-gray-900">One Day Access</div>
                          <div className="text-sm text-gray-600">Get full-day access to our study space with all amenities for just ₹50.</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">₹50</div>
                          <div className="text-xs text-gray-500">per day</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-purple-100 rounded-lg">
                      <p className="text-sm text-purple-800 font-medium">
                        🎉 First Day Trial – FREE: Your first visit is absolutely free! Just bring any valid government ID.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Feedback Form Specific Fields */}
            {activeTab === 'feedback' && (
              <div className="space-y-4 border-t pt-6">
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm font-medium text-gray-700">
                    Share Your Views & Feedback
                  </Label>
                  <Textarea
                    id="feedback"
                    value={formData.feedback}
                    onChange={(e) => handleInputChange('feedback', e.target.value)}
                    className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="We'd love to hear your thoughts, suggestions, or any feedback about our services..."
                    required
                  />
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    💬 Your feedback helps us improve our services and create a better experience for everyone.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                className={`w-full py-3 text-white font-semibold transition-all duration-300 ${
                  activeTab === 'booking' 
                    ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' 
                    : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>Submit {activeTab === 'booking' ? 'Booking Request' : 'Feedback'}</>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ClassyBookingFeedbackComponent
