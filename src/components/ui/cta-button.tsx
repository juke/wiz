"use client"

import { useEffect, useState, useId } from "react"
import { createPortal } from "react-dom"
import { Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  PopoverFormButton,
} from "@/components/ui/popover-form"

type FormState = "idle" | "loading" | "success"

interface CTAButtonProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function CTAButton({ className, style, children }: CTAButtonProps) {
  const id = useId() // Unique ID for this instance
  const [formState, setFormState] = useState<FormState>("idle")
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function closePopover() {
    setIsAnimating(false)
    setTimeout(() => {
      setOpen(false)
      setFormState("idle")
      setEmail("")
    }, 200) // Match the transition duration
  }

  function submit() {
    setFormState("loading")
    setTimeout(() => {
      setFormState("success")
    }, 1500)
    // Removed auto-dismiss - user can close manually
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        closePopover()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (open && event.target instanceof Element) {
        // Check if click is outside the popover
        const popover = document.querySelector('[data-popover-id="' + id + '"]')
        if (popover && !popover.contains(event.target)) {
          closePopover()
        }
      }
    }

    const handleResize = () => {
      if (open && buttonRect) {
        // Find the button element and update its position
        const buttonElement = document.querySelector(`[data-button-id="${id}"]`) as HTMLButtonElement
        if (buttonElement) {
          const rect = buttonElement.getBoundingClientRect()
          const scrollY = window.scrollY || 0
          const scrollX = window.scrollX || 0

          const absoluteRect = {
            top: rect.top + scrollY,
            left: rect.left + scrollX,
            width: rect.width,
            height: rect.height,
            right: rect.right + scrollX,
            bottom: rect.bottom + scrollY,
            x: rect.x + scrollX,
            y: rect.y + scrollY
          }
          setButtonRect(absoluteRect as DOMRect)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [open, id, buttonRect])

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    // Validate that we have valid numbers
    if (!rect || isNaN(rect.top) || isNaN(rect.left) || isNaN(rect.width) || isNaN(rect.height)) {
      console.warn('Invalid button rect:', rect)
      return
    }

    // Add scroll position to get absolute position
    const scrollY = window.scrollY || 0
    const scrollX = window.scrollX || 0

    const absoluteRect = {
      top: rect.top + scrollY,
      left: rect.left + scrollX,
      width: rect.width,
      height: rect.height,
      right: rect.right + scrollX,
      bottom: rect.bottom + scrollY,
      x: rect.x + scrollX,
      y: rect.y + scrollY
    }

    setButtonRect(absoluteRect as DOMRect)
    setOpen(true)
    // Start animation after a brief delay to ensure DOM is ready
    setTimeout(() => {
      setIsAnimating(true)
    }, 10)
  }

  const popoverContent = open && mounted && buttonRect &&
    !isNaN(buttonRect.top) && !isNaN(buttonRect.left) && !isNaN(buttonRect.width) && (
    <div
      data-popover-id={id}
      className="absolute w-80 bg-white rounded-lg shadow-xl border p-6 z-[9999]"
      style={{
        top: buttonRect.top + buttonRect.height / 2, // Position on top of the button
        left: buttonRect.left + buttonRect.width / 2,
        transform: `translate(-50%, -50%) scale(${isAnimating ? '1' : '0.8'})`, // Pop from smaller to full size
        opacity: isAnimating ? 1 : 0,
        transformOrigin: 'center center', // Ensure it scales from center
        transition: 'all 300ms ease-out'
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <div className="min-h-[200px] flex flex-col">
        {formState === "success" ? (
          <div className="flex-1 flex flex-col justify-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Successfully joined!</h3>
              <p className="text-sm text-gray-600">Thank you for joining our waitlist. We&apos;ll notify you when Wiz is ready!</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Join Waitlist</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!email) return
                submit()
              }}
              className="flex-1 flex flex-col"
            >
              <div className="mb-4 flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 pr-9 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Mail className="text-gray-400 size-4" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-6 text-center">
                  Get early access to Wiz when we launch!
                </p>
              </div>

              <PopoverFormButton
                loading={formState === "loading"}
                text="Join Waitlist"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="relative inline-block">
      <Button
        data-button-id={id}
        onClick={handleButtonClick}
        className={className}
        style={style}
      >
        {children}
      </Button>

      {mounted && typeof window !== 'undefined' && createPortal(
        popoverContent,
        document.body
      )}
    </div>
  )
}
