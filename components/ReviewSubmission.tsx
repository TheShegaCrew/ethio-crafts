'use client'

import React, { useState } from 'react'
import { Star, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ReviewFormData {
  rating: number
  title: string
  text: string
  photos: File[]
}

interface ReviewSubmissionProps {
  orderId?: string
  productId?: string
  onSubmit?: (review: ReviewFormData) => void
}

export default function ReviewSubmission({
  orderId = '',
  productId = '',
  onSubmit,
}: ReviewSubmissionProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    title: '',
    text: '',
    photos: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      const newPhotos = Array.from(files).slice(0, 5 - formData.photos.length)
      setFormData({
        ...formData,
        photos: [...formData.photos, ...newPhotos],
      })
    }
  }

  const removePhoto = (index: number) => {
    setFormData({
      ...formData,
      photos: formData.photos.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.rating === 0) {
      alert('Please select a rating')
      return
    }

    if (!formData.title.trim() || !formData.text.trim()) {
      alert('Please fill in title and review text')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      onSubmit?.(formData)
      setFormData({
        rating: 0,
        title: '',
        text: '',
        photos: [],
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <h3 className="text-lg font-serif font-bold text-foreground mb-6">Share Your Review</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Star Rating */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            How would you rate this product?
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= formData.rating
                      ? 'fill-primary text-primary'
                      : 'text-muted-foreground'
                  }`}
                />
              </button>
            ))}
          </div>
          {formData.rating > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {formData.rating} out of 5 stars
            </p>
          )}
        </div>

        {/* Review Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
            Review Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Summarize your experience"
            maxLength={100}
            className="w-full px-4 py-2 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.title.length}/100 characters
          </p>
        </div>

        {/* Review Text */}
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-foreground mb-2">
            Your Review
          </label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Share details about your experience with this product..."
            maxLength={1000}
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {formData.text.length}/1000 characters
          </p>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Add Photos (Optional)
          </label>
          <p className="text-xs text-muted-foreground mb-3">
            Upload up to 5 photos of the product. Max 5MB each.
          </p>

          {/* Upload Zone */}
          {formData.photos.length < 5 && (
            <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="text-center">
                <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </span>
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          )}

          {/* Photo Preview */}
          {formData.photos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              {formData.photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square bg-muted rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Review photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(idx)}
                    className="absolute top-1 right-1 bg-destructive text-white p-1 rounded-full hover:bg-destructive/90 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || formData.rating === 0}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting Review...' : 'Submit Review'}
        </Button>
      </form>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <p className="text-xs text-foreground font-medium mb-2">Tips for a great review:</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Be specific and honest about your experience</li>
          <li>• Share photos to help other customers decide</li>
          <li>• Mention quality, durability, and cultural significance</li>
          <li>• Your review may be featured on the product page</li>
        </ul>
      </div>
    </div>
  )
}
