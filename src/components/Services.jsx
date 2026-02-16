import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, Monitor, ArrowUpRight, Code2, Layers, Cpu } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Stunning, responsive web applications built with cutting-edge technologies. From complex SaaS platforms to elegant corporate sites.',
    features: ['React & Next.js', 'Tailwind CSS', 'Node.js Backend', 'Cloud Deployment'],
    gradient: 'from-alpha-neon to-cyan-400',
    iconBg: 'bg-alpha-neon/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that delight users. iOS, Android, and React Native solutions.',
    features: ['React Native', 'Flutter', 'iOS & Android', 'App Store Ready'],
    gradient: 'from-alpha-purple to-violet-400',
    iconBg: 'bg-alpha-purple/20',
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Powerful desktop solutions for Windows, macOS, and Linux. Performance-focused applications built to scale.',
    features: ['Electron', 'Cross-Platform', 'Native Performance', 'Auto Updates'],
    gradient: 'from-alpha-pink to-rose-400',
    iconBg: 'bg-alpha-pink/20',
  },
]

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`} />
      
      {/* Card */}
      <div className="relative glass-strong rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-alpha-neon/30">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[100px] opacity-50" />
        
        {/* Icon */}
        <motion.div
          className={`relative w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} 
            style={{ 
              stroke: `url(#gradient-${index})`,
              strokeWidth: 2 
            }}
          />
          {/* SVG Gradient Definition */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={index === 0 ? '#00d4ff' : index === 1 ? '#8b5cf6' : '#ec4899'} />
                <stop offset="100%" stopColor={index === 0 ? '#22d3ee' : index === 1 ? '#a78bfa' : '#fb7185'} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
              className="flex items-center gap-3"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/link`}
          whileHover={{ x: 5 }}
        >
          Learn More
          <ArrowUpRight className="w-4 h-4 text-alpha-neon group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-alpha-neon/5 rounded-full filter blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-alpha-purple/5 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Code2 className="w-4 h-4 text-alpha-neon" />
            <span className="text-sm text-gray-300">Our Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6"
          >
            Services We <span className="gradient-text">Deliver</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            From concept to deployment, we provide end-to-end development solutions 
            tailored to your unique business needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Powered by Modern Tech
              </h3>
              <p className="text-gray-400">
                We use the latest technologies to build scalable solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 glass rounded-lg text-sm text-gray-300 font-medium cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
