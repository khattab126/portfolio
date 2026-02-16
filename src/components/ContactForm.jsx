import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle, User, Briefcase, DollarSign, FileText, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'

const projectTypes = [
  'Web Application',
  'Mobile App',
  'Desktop Application',
  'E-Commerce Platform',
  'SaaS Solution',
  'Custom Software',
  'Other',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet',
  'Custom Amount',
]

const ContactForm = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    customBudget: '',
    description: '',
  })

  const steps = [
    { title: 'Personal Info', icon: User },
    { title: 'Project Type', icon: Briefcase },
    { title: 'Budget', icon: DollarSign },
    { title: 'Description', icon: FileText },
  ]

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email content
    const budgetValue = formData.budget === 'Custom Amount' ? formData.customBudget : formData.budget
    const emailSubject = `New Project Inquiry: ${formData.projectType}`
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Project Type: ${formData.projectType}
Budget: ${budgetValue}
Timeline: ${formData.timeline || 'Not specified'}

Project Description:
${formData.description}
    `.trim()
    
    // Create a temporary link element and click it to avoid browser caching email client preference
    const mailtoLink = `mailto:Alphasoftwaresolutions@outlook.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    const link = document.createElement('a')
    link.href = mailtoLink
    link.target = '_self'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setIsSubmitted(true)
    console.log('Form submitted:', formData)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== '' && formData.email.trim() !== ''
      case 1:
        return formData.projectType !== ''
      case 2:
        if (formData.budget === 'Custom Amount') {
          return formData.customBudget.trim() !== ''
        }
        return formData.budget !== ''
      case 3:
        return formData.description.trim() !== ''
      default:
        return false
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-alpha-neon/5 via-alpha-purple/5 to-alpha-pink/5 rounded-full filter blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-alpha-neon" />
            <span className="text-sm text-gray-300">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6"
          >
            Start Your <span className="gradient-text">Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Tell us about your vision and let's create something extraordinary together.
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-alpha-neon/10 via-alpha-purple/10 to-alpha-pink/10 rounded-3xl blur-2xl" />

          {/* Form Card */}
          <div className="relative glass-strong rounded-3xl p-8 md:p-12">
            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-alpha-neon to-alpha-purple rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
                  Request Submitted!
                </h3>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => {
                    setIsSubmitted(false)
                    setCurrentStep(0)
                    setFormData({ name: '', email: '', projectType: '', budget: '', description: '' })
                  }}
                  className="px-6 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Another Request
                </motion.button>
              </motion.div>
            ) : (
              <>
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-12 relative">
                  {/* Progress Line */}
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-alpha-gray">
                    <motion.div
                      className="h-full bg-gradient-to-r from-alpha-neon to-alpha-purple"
                      initial={{ width: '0%' }}
                      animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {steps.map((step, index) => (
                    <div key={step.title} className="relative flex flex-col items-center z-10">
                      <motion.div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          index <= currentStep
                            ? 'bg-gradient-to-br from-alpha-neon to-alpha-purple text-white'
                            : 'bg-alpha-gray text-gray-500'
                        }`}
                        animate={{
                          scale: index === currentStep ? 1.1 : 1,
                        }}
                      >
                        <step.icon className="w-5 h-5" />
                      </motion.div>
                      <span className={`mt-2 text-xs font-medium hidden sm:block ${
                        index <= currentStep ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Form Steps */}
                <form onSubmit={handleSubmit}>
                  <div className="min-h-[280px]">
                    {/* Step 1: Personal Info */}
                    {currentStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-white font-medium mb-2">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-4 bg-alpha-gray/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-alpha-neon transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-4 bg-alpha-gray/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-alpha-neon transition-colors"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Project Type */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <label className="block text-white font-medium mb-4">What type of project?</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {projectTypes.map((type) => (
                            <motion.button
                              key={type}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                formData.projectType === type
                                  ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                                  : 'bg-alpha-gray/50 text-gray-300 hover:bg-alpha-gray border border-white/10'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {type}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Budget */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <label className="block text-white font-medium mb-4">What's your budget range?</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                          {budgetRanges.map((range) => (
                            <motion.button
                              key={range}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: range })}
                              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                formData.budget === range
                                  ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                                  : 'bg-alpha-gray/50 text-gray-300 hover:bg-alpha-gray border border-white/10'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {range}
                            </motion.button>
                          ))}
                        </div>
                        {formData.budget === 'Custom Amount' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4"
                          >
                            <input
                              type="text"
                              name="customBudget"
                              value={formData.customBudget}
                              onChange={handleInputChange}
                              placeholder="Enter your budget (e.g., $25,000)"
                              className="w-full px-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-alpha-neon/50 transition-all"
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Step 4: Description */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <label className="block text-white font-medium mb-2">Tell us about your project</label>
                        <p className="text-gray-400 text-sm mb-4">
                          Share your vision, goals, and any specific requirements.
                        </p>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Describe your project idea, goals, timeline, and any specific features you have in mind..."
                          rows={6}
                          className="w-full px-4 py-4 bg-alpha-gray/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-alpha-neon transition-colors resize-none"
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <motion.button
                      type="button"
                      onClick={handlePrev}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full text-gray-400 font-medium transition-colors ${
                        currentStep === 0 ? 'opacity-0 pointer-events-none' : 'hover:text-white'
                      }`}
                      whileHover={{ x: -5 }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>

                    {currentStep < steps.length - 1 ? (
                      <motion.button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                          isStepValid()
                            ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                            : 'bg-alpha-gray text-gray-500 cursor-not-allowed'
                        }`}
                        whileHover={isStepValid() ? { scale: 1.05 } : {}}
                        whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={!isStepValid()}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                          isStepValid()
                            ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                            : 'bg-alpha-gray text-gray-500 cursor-not-allowed'
                        }`}
                        whileHover={isStepValid() ? { scale: 1.05 } : {}}
                        whileTap={isStepValid() ? { scale: 0.95 } : {}}
                      >
                        Submit Request
                        <Send className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Prefer email? Reach us at{' '}
            <a href="mailto:Alphasoftwaresolutions@outlook.com" className="text-alpha-neon hover:underline">
              Alphasoftwaresolutions@outlook.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
