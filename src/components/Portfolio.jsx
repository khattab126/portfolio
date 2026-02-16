import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Sparkles, TrendingUp, Package, BarChart3, Truck, Users, ChevronLeft, ChevronRight, Smartphone, Search, MessageCircle, ShoppingBag, Heart, Bot, Droplet, Thermometer, Activity, Zap, Bell, BarChart, Gauge, Settings, Brain, FileText, Database, ShoppingCart, Filter, Lock, LayoutDashboard, CreditCard, Image, Network, Terminal, Cloud, Layers, Code, Shield, AlertCircle, CreditCard as CreditCardIcon, DollarSign } from 'lucide-react'

// Main featured project with all 5 REAL screenshots
const featuredProject = {
  id: 1,
  title: 'Fashion Marketplace Dashboard',
  subtitle: 'Complete Seller Hub for Fashion Brands',
  description: 'A comprehensive B2B fashion marketplace platform built for Egyptian brands. This all-in-one seller hub empowers fashion entrepreneurs with AI-powered tools, real-time analytics, inventory management, and seamless order fulfillment - everything needed to grow a successful fashion brand online.',
  tags: ['React', 'Node.js', 'AI/ML', 'E-Commerce', 'TypeScript', 'PostgreSQL'],
  liveUrl: 'https://alpha-graduation-project.vercel.app/',
  githubUrl: 'https://github.com/mohaemdwalid/Alpha-graduation-project',
  color: 'from-amber-500 via-alpha-purple to-alpha-neon',
  screenshots: [
    {
      id: 'landing',
      title: 'Brand Landing Page',
      description: 'Stunning hero page with AI Studio technology for virtual try-ons. "Grow Your Fashion Brand in Egypt"',
      icon: Users,
      image: '/projects/landing.png',
    },
    {
      id: 'pricing',
      title: 'Pricing Plans',
      description: 'Transparent pricing with Starter (499 EGP), Growth (999 EGP), and Enterprise plans for all brand sizes',
      icon: BarChart3,
      image: '/projects/pricing.png',
    },
    {
      id: 'dashboard',
      title: 'Seller Dashboard',
      description: 'Centralized dashboard with Inventory, Orders, Revenue, and Shipping metrics at a glance',
      icon: TrendingUp,
      image: '/projects/dashboard.png',
    },
    {
      id: 'inventory',
      title: 'Product Management',
      description: 'Advanced product catalog with variant tracking, stock levels, and pricing management',
      icon: Package,
      image: '/projects/inventory.png',
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics with best performers, stock alerts, revenue trends and growth insights',
      icon: Truck,
      image: '/projects/analytics.png',
    },
  ],
}

// Mobile App Project
const mobileAppProject = {
  id: 2,
  title: 'Alpha Mobile App',
  subtitle: 'AI-Powered Customer Shopping Experience',
  description: 'The consumer-facing mobile app of the Alpha Marketplace ecosystem. Delivers a personalized, AI-enhanced shopping experience with visual search, AI styling assistant, smart product recommendations, and seamless checkout — all adapting to each user\'s preferences and behavior.',
  tags: ['React Native', 'AI/ML', 'TypeScript', 'Node.js', 'PostgreSQL', 'Gemini AI'],
  githubUrl: 'https://github.com/mohaemdwalid/Alpha-graduation-project/tree/main/mobile',
  color: 'from-alpha-neon via-blue-500 to-alpha-purple',
  screenshots: [
    {
      id: 'shopping',
      title: 'Shopping Experience',
      description: 'Rich product browsing with visual search, wishlists, size recommendations, and multiple payment methods for seamless checkout',
      icon: Heart,
      image: '/projects/app-shopping.gif',
    },
    {
      id: 'home',
      title: 'Home Feed',
      description: 'Personalized product feed powered by AI, featuring trending brands like Antikka, Asili, and BlackEdition with smart recommendations',
      icon: ShoppingBag,
      image: '/projects/app-home.png',
    },
    {
      id: 'categories',
      title: 'Categories & Collections',
      description: 'Browse curated collections organized by style — Denim, Jackets, Pants, Shirts — with gender and style filters',
      icon: Search,
      image: '/projects/app-categories.png',
    },
    {
      id: 'ai-assistant',
      title: 'AI Fashion Assistant',
      description: 'Bilingual AI stylist (Arabic/English) that helps discover outfits, match products, find alternatives, and get personalized fashion advice',
      icon: Bot,
      image: '/projects/app-ai.png',
    },
  ],
}

// Hydroponics IoT Project
const hydroponicsProject = {
  id: 3,
  title: 'Smart Hydroponics System',
  subtitle: 'IoT Monitoring & Control Platform',
  description: 'A cross-platform Flutter mobile application for real-time monitoring and control of smart hydroponics systems. Features IoT sensor integration, voice commands, predictive analytics, and remote actuator control — enabling precision agriculture from anywhere. Built with MVVM architecture and Firebase for seamless cloud connectivity.',
  tags: ['Flutter', 'Dart', 'Firebase', 'IoT', 'MVVM', 'Provider', 'FCM', 'SQLite', 'FL Chart'],
  githubUrl: 'https://github.com/AliTarek-1/Mobile-Programmin-Project',
  color: 'from-green-400 via-emerald-500 to-teal-600',
  screenshots: [
    {
      id: 'demo',
      title: 'App in Action',
      description: 'Complete system workflow: real-time monitoring, sensor tracking, actuator control, and analytics visualization',
      icon: Activity,
      image: '/projects/hydro-demo.gif',
    },
    {
      id: 'login',
      title: 'Authentication',
      description: 'Secure Firebase authentication with email/password, registration with verification, and password recovery',
      icon: Users,
      image: '/projects/hydro-login.png',
    },
    {
      id: 'dashboard',
      title: 'Real-Time Dashboard',
      description: 'Live sensor grid with auto-refresh, system status (Online/Offline), mode indicator (Auto/Manual), and quick-access controls',
      icon: Gauge,
      image: '/projects/hydro-dashboard.png',
    },
    {
      id: 'sensors',
      title: 'Sensor Monitoring',
      description: 'Real-time pH, EC, temperature, and light readings with color-coded status indicators (Good/Warning/Critical) and calibration tools',
      icon: Thermometer,
      image: '/projects/hydro-sensors.png',
    },
    {
      id: 'controls',
      title: 'Control Panel',
      description: 'Remote actuator control for water pump, grow lights, and fans with pump scheduling, emergency stop, and paginated control history',
      icon: Zap,
      image: '/projects/hydro-controls.png',
    },
    {
      id: 'analytics1',
      title: 'Analytics & History',
      description: 'Historical sensor data visualization with FL Chart, date range filtering (7-day, 14-day, custom), and per-sensor performance graphs',
      icon: BarChart,
      image: '/projects/hydro-analytics.png',
    },
    {
      id: 'analytics2',
      title: 'Advanced Analytics',
      description: 'Deep dive into pH trends, EC levels, temperature variations, and light intensity patterns with report generation capability',
      icon: BarChart3,
      image: '/projects/hydro-analytics2.png',
    },
    {
      id: 'alerts',
      title: 'Alerts & Notifications',
      description: 'Real-time threshold alerts with FCM push notifications, alert history with SQLite storage, and configurable sensor thresholds',
      icon: Bell,
      image: '/projects/hydro-alerts.png',
    },
  ],
}

// Heart Disease Prediction ML Project
const heartDiseaseProject = {
  id: 4,
  title: 'Heart Disease Prediction System',
  subtitle: 'ML-Powered Medical Risk Assessment',
  description: 'Full-stack machine learning system for heart disease prediction achieving 82.6% accuracy on 920 patient records. Features complete ML pipeline from data preprocessing through feature engineering to production deployment. Interactive Streamlit web app with real-time predictions, data visualizations, and comprehensive analytics — combining data science with modern web development.',
  tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Streamlit', 'Pandas', 'Data Science', 'SVM', 'PCA'],
  liveUrl: 'https://hsa9pqmdmiz4o3n423sy5f.streamlit.app/',
  githubUrl: 'https://github.com/khattab126/Comprehensive-Machine-Learning-Full-Pipeline-on-Heart-Disease-UCI-Dataset',
  color: 'from-red-500 via-pink-500 to-rose-600',
  screenshots: [
    {
      id: 'demo',
      title: 'App Walkthrough',
      description: 'Complete system demonstration: real-time predictions, interactive visualizations, data analysis, and risk assessment workflow',
      icon: Activity,
      image: '/projects/heart-demo.gif',
    },
    {
      id: 'prediction',
      title: 'Prediction Interface',
      description: 'User-friendly medical form with real-time heart disease risk assessment, confidence scores, and color-coded visual feedback',
      icon: Heart,
      image: '/projects/heart-prediction.png',
    },
    {
      id: 'results',
      title: 'Model Performance',
      description: 'Comprehensive model comparison: SVM (82.6%), Logistic Regression (82.1%), Random Forest (79.9%), and Decision Tree (75.5%)',
      icon: BarChart3,
      image: '/projects/heart-results.png',
    },
    {
      id: 'analysis',
      title: 'Data Analysis',
      description: 'Interactive visualizations showing age distribution, gender-based disease patterns, and feature correlation heatmaps',
      icon: TrendingUp,
      image: '/projects/heart-analysis.png',
    },
    {
      id: 'features',
      title: 'Feature Engineering',
      description: 'Advanced feature selection using Chi-square, RFE, and Random Forest importance — optimized from 13 to 8 key features',
      icon: Brain,
      image: '/projects/heart-features.png',
    },
    {
      id: 'pipeline',
      title: 'ML Pipeline',
      description: 'Complete data pipeline: preprocessing, PCA analysis, feature selection, model training, and deployment architecture',
      icon: Database,
      image: '/projects/heart-pipeline.png',
    },
  ],
}

// Full-Stack E-Commerce Platform
const ecommerceProject = {
  id: 5,
  title: 'Full-Stack Modern E-commerce Platform',
  subtitle: 'High-Performance Fashion Marketplace',
  description: 'A high-performance, responsive e-commerce application built for the fashion industry, featuring a specialized product discovery experience and localized payment integrations. Features scalable product catalog, advanced filtering, smart cart system, secure authentication, admin dashboard, and Egyptian payment gateway integration with optimized image delivery via Shopify CDN.',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Paymob', 'Vite'],
  liveUrl: 'https://asilifrontend-j5webd9ua-youssefs-projects-001416b4.vercel.app/',
  githubUrl: '#',
  color: 'from-purple-500 via-indigo-500 to-blue-600',
  screenshots: [
    {
      id: 'demo',
      title: 'Platform Demo',
      description: 'Complete shopping experience: product browsing, quick-add flow, cart management, checkout process, and payment integration',
      icon: Activity,
      image: '/projects/ecommerce-demo.gif',
    },
    {
      id: 'catalog',
      title: 'Product Catalog',
      description: 'Scalable product listing with dynamic sorting, search capability, and detailed product views with size/quantity controls',
      icon: ShoppingBag,
      image: '/projects/ecommerce-catalog.png',
    },
    {
      id: 'filters',
      title: 'Advanced Filtering',
      description: 'Dynamic filter system that adjusts categories and subcategories based on real-time database inventory',
      icon: Filter,
      image: '/projects/ecommerce-filters.png',
    },
    {
      id: 'cart',
      title: 'Smart Cart System',
      description: 'Persistent cart management with multi-size selection, quantity controls, and real-time total calculation',
      icon: ShoppingCart,
      image: '/projects/ecommerce-cart.png',
    },
    {
      id: 'auth',
      title: 'Secure Authentication',
      description: 'Robust user registration and login system with JWT tokens, Bcrypt hashing, and persistent sessions',
      icon: Lock,
      image: '/projects/ecommerce-auth.png',
    },
    {
      id: 'admin',
      title: 'Admin Dashboard',
      description: 'Full-featured admin panel for managing products, categories, orders, and generating real-time discount codes',
      icon: LayoutDashboard,
      image: '/projects/ecommerce-admin.png',
    },
    {
      id: 'payment',
      title: 'Payment Integration',
      description: 'Localized payment options: Cash on Delivery (COD) and Paymob Checkout for Credit Card/Wallet payments',
      icon: CreditCard,
      image: '/projects/ecommerce-payment.png',
    },
  ],
}

// Goliath Distributed Intelligence & Search
const goliathProject = {
  id: 6,
  title: 'Goliath Distributed Intelligence & Search',
  subtitle: 'Cloud-Hybrid Web Crawling & Indexing Engine',
  description: 'A high-performance, distributed web crawling and indexing engine designed for large-scale data collection across the web. Built with a Cloud-Hybrid architecture leveraging Google Cloud Platform with 100% resilience through local fallback mode. Features Master-Worker-Indexer pattern with enterprise-grade scalability, real-time telemetry streaming, and professional SaaS-style dashboard.',
  tags: ['Python', 'MPI', 'Google Cloud', 'Distributed Systems', 'Flask', 'Docker', 'Elasticsearch'],
  liveUrl: 'https://thin-dione-alpha-software-solutions-47d56d24.koyeb.app/',
  githubUrl: 'https://github.com/khattab126/distributed-web-crawling-project-main',
  color: 'from-blue-600 via-cyan-500 to-teal-500',
  screenshots: [
    {
      id: 'demo',
      title: 'Live Dashboard',
      description: 'Complete system overview with real-time health and throughput metrics from the global node cluster',
      icon: Activity,
      image: '/projects/goliath-demo.gif',
    },
    {
      id: 'overview',
      title: 'System Overview',
      description: 'Real-time metrics dashboard showing Queue Depth, Crawled Nodes (738), and Cluster Anomalies (426)',
      icon: BarChart3,
      image: '/projects/goliath-overview.png',
    },
    {
      id: 'search',
      title: 'Unified Search Engine',
      description: 'Query the distributed knowledge index with coverage verification showing crawled URLs and HTML availability',
      icon: Search,
      image: '/projects/goliath-search.png',
    },
    {
      id: 'crawler',
      title: 'Crawler Control',
      description: 'Orchestrate distributed crawling behavior with seed URLs, depth/page limits, rate limiting, and cluster management',
      icon: Network,
      image: '/projects/goliath-crawler.png',
    },
    {
      id: 'telemetry',
      title: 'Node Telemetry',
      description: 'IDE-style live terminal viewer streaming real-time logs and status updates from Master, Crawler, and Indexer nodes',
      icon: Terminal,
      image: '/projects/goliath-telemetry.png',
    },
  ],
}

// Banking & Payment System
const miniInstaPayProject = {
  id: 7,
  title: 'Banking & Payment System',
  subtitle: 'Enterprise Desktop Banking Application',
  description: 'A comprehensive banking and payment system desktop application built with JavaFX and Java 21. Features dual-interface support for clients and administrators, advanced 6-strategy fraud detection system, secure OTP-based authentication, real-time transaction processing, and SQLite database integration. Demonstrates enterprise-level security and clean architecture with MVC pattern and multiple design patterns.',
  tags: ['Java 21', 'JavaFX', 'SQLite', 'Security', 'MVC', 'Maven', 'Design Patterns'],
  githubUrl: '#',
  color: 'from-indigo-600 via-purple-500 to-pink-500',
  screenshots: [
    {
      id: 'login',
      title: 'Secure Login',
      description: 'Role-based login screen with account type selection (Client/Admin) and enterprise-grade security',
      icon: Lock,
      image: '/projects/miniinstapay-login.png',
    },
    {
      id: 'dashboard',
      title: 'Client Dashboard',
      description: 'Intuitive banking dashboard with account overview, balance info, quick actions, and recent transactions',
      icon: LayoutDashboard,
      image: '/projects/miniinstapay-dashboard.png',
    },
    {
      id: 'transfer',
      title: 'Send Money Interface',
      description: 'Secure money transfer form with recipient selection, amount input, OTP verification, and transaction confirmation',
      icon: CreditCardIcon,
      image: '/projects/miniinstapay-transfer.png',
    },
    {
      id: 'admin',
      title: 'Admin User Management',
      description: 'Comprehensive admin panel for managing users, accounts, viewing system analytics, and fraud monitoring',
      icon: Users,
      image: '/projects/miniinstapay-admin.png',
    },
    {
      id: 'history',
      title: 'Transaction History',
      description: 'Detailed transaction log with filtering, search, status tracking, and comprehensive transaction details',
      icon: BarChart,
      image: '/projects/miniinstapay-history.png',
    },
  ],
}

const MobileAppShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeScreen, setActiveScreen] = useState(0)
  const app = mobileAppProject

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % app.screenshots.length)
  }

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-0">
          {/* Left: Phone Mockups */}
          <div className="relative bg-gradient-to-br from-alpha-dark via-[#0d1117] to-alpha-dark/80 p-8 md:p-12 flex items-center justify-center min-h-[500px] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-alpha-neon/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-alpha-purple/5 rounded-full blur-3xl" />
            
            {/* Phone Frame */}
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Phone bezel */}
              <div className="relative mx-auto w-[220px] md:w-[260px] rounded-[2.5rem] border-[6px] border-gray-700 bg-black shadow-2xl shadow-alpha-neon/10 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={app.screenshots[activeScreen].image}
                    alt={app.screenshots[activeScreen].title}
                    className="w-full h-auto block"
                  />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full" />
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-2 md:inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
              <motion.button
                onClick={prevScreen}
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={nextScreen}
                className="w-9 h-9 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {app.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreen(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeScreen
                      ? 'bg-alpha-neon w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Project Details */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {app.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium glass rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-1">
              <Smartphone className="w-7 h-7 text-alpha-neon" />
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white">
                {app.title}
              </h3>
            </div>
            <p className="text-alpha-neon text-sm mb-4">{app.subtitle}</p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
              {app.description}
            </p>

            {/* Feature Description */}
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3 mb-5"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = app.screenshots[activeScreen].icon
                  return (
                    <div className="w-10 h-10 bg-alpha-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-alpha-neon" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {app.screenshots[activeScreen].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {app.screenshots[activeScreen].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Navigation */}
            <div className="flex flex-wrap gap-2 mb-5">
              {app.screenshots.map((screenshot, index) => (
                <motion.button
                  key={screenshot.id}
                  onClick={() => setActiveScreen(index)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                    index === activeScreen
                      ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <screenshot.icon className="w-3 h-3" />
                  {screenshot.title}
                </motion.button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View Source
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const HydroponicsShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeScreen, setActiveScreen] = useState(0)
  const app = hydroponicsProject

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % app.screenshots.length)
  }

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass rounded-3xl p-6 md:p-8 overflow-hidden">
        {/* Grid Layout: Phone on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: Screenshot Display */}
          <div className="lg:col-span-2 relative">
            <div className="relative mx-auto max-w-[340px]">
              {/* Screenshot Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-950">
                {/* Fixed aspect ratio container for consistent sizing */}
                <div className="relative w-full aspect-[9/19.5]">
                  {/* Screenshot Image */}
                  <motion.img
                    key={activeScreen}
                    src={app.screenshots[activeScreen].image}
                    alt={app.screenshots[activeScreen].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 z-10">
                  <motion.button
                    onClick={prevScreen}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-400/90 hover:text-gray-900 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={nextScreen}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-400/90 hover:text-gray-900 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Screen Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {app.screenshots.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeScreen
                          ? 'bg-green-400 w-8'
                          : 'bg-white/40 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Project Details */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium glass rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <div className="flex items-center gap-3 mb-1">
              <Droplet className="w-7 h-7 text-green-400" />
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white">
                {app.title}
              </h3>
            </div>
            <p className="text-green-400 text-sm mb-4">{app.subtitle}</p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5 text-sm">
              {app.description}
            </p>

            {/* Feature Description */}
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3 mb-5"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = app.screenshots[activeScreen].icon
                  return (
                    <div className="w-10 h-10 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-green-400" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {app.screenshots[activeScreen].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {app.screenshots[activeScreen].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Navigation */}
            <div className="flex flex-wrap gap-2 mb-5">
              {app.screenshots.map((screenshot, index) => (
                <motion.button
                  key={screenshot.id}
                  onClick={() => setActiveScreen(index)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeScreen === index
                      ? 'bg-green-400 text-gray-900'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {screenshot.title.split(' ')[0]}
                </motion.button>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex gap-3">
              <motion.a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg text-gray-900 font-semibold text-sm hover:shadow-lg hover:shadow-green-400/30 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View Source
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const EcommerceShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState(0)
  const project = ecommerceProject

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden">
        {/* TOP: Full-width Screenshot Display */}
        <div className="relative w-full bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 overflow-hidden">
          {/* Main Screenshot */}
          <motion.img
            key={activeFeature}
            src={project.screenshots[activeFeature].image}
            alt={project.screenshots[activeFeature].title}
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ aspectRatio: '2.25/1', maxHeight: '600px' }}
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
            <motion.button
              onClick={prevFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Feature Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeFeature
                    ? 'bg-alpha-neon w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Current Feature Label */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {(() => {
                const IconComponent = project.screenshots[activeFeature].icon
                return <IconComponent className="w-4 h-4 text-alpha-neon" />
              })()}
              <span className="text-xs text-white font-medium">
                {project.screenshots[activeFeature].title}
              </span>
            </motion.div>
          </div>

          {/* Tags - overlaid top right */}
          <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM: Project Details */}
        <div className="p-6 md:p-8">
          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-alpha-neon text-sm">{project.subtitle}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-alpha-neon via-alpha-purple to-alpha-pink rounded-full text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-5 text-sm max-w-3xl">
            {project.description}
          </p>

          {/* Feature Description + Stats Row */}
          <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-5">
            {/* Feature Description */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = project.screenshots[activeFeature].icon
                  return (
                    <div className="w-10 h-10 bg-alpha-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-alpha-neon" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {project.screenshots[activeFeature].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {project.screenshots[activeFeature].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap gap-2">
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setActiveFeature(index)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  index === activeFeature
                    ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <screenshot.icon className="w-3 h-3" />
                {screenshot.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const GoliathShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState(0)
  const project = goliathProject

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden">
        {/* TOP: Full-width Screenshot Display */}
        <div className="relative w-full bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden">
          {/* Main Screenshot */}
          <motion.img
            key={activeFeature}
            src={project.screenshots[activeFeature].image}
            alt={project.screenshots[activeFeature].title}
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ aspectRatio: '2.25/1', maxHeight: '600px' }}
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
            <motion.button
              onClick={prevFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Feature Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeFeature
                    ? 'bg-alpha-neon w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Current Feature Label */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {(() => {
                const IconComponent = project.screenshots[activeFeature].icon
                return <IconComponent className="w-4 h-4 text-alpha-neon" />
              })()}
              <span className="text-xs text-white font-medium">
                {project.screenshots[activeFeature].title}
              </span>
            </motion.div>
          </div>

          {/* Tags - overlaid top right */}
          <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM: Project Details */}
        <div className="p-6 md:p-8">
          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-alpha-neon text-sm">{project.subtitle}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-5 text-sm max-w-3xl">
            {project.description}
          </p>

          {/* Feature Description + Stats Row */}
          <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-5">
            {/* Feature Description */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = project.screenshots[activeFeature].icon
                  return (
                    <div className="w-10 h-10 bg-alpha-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-alpha-neon" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {project.screenshots[activeFeature].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {project.screenshots[activeFeature].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap gap-2">
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setActiveFeature(index)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  index === activeFeature
                    ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <screenshot.icon className="w-3 h-3" />
                {screenshot.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const MiniInstaPayShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState(0)
  const project = miniInstaPayProject

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden">
        {/* TOP: Full-width Screenshot Display */}
        <div className="relative w-full bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 overflow-hidden">
          {/* Main Screenshot */}
          <motion.img
            key={activeFeature}
            src={project.screenshots[activeFeature].image}
            alt={project.screenshots[activeFeature].title}
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ aspectRatio: '2.25/1', maxHeight: '600px' }}
          />

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
            <motion.button
              onClick={prevFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Feature Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeFeature
                    ? 'bg-alpha-neon w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Current Feature Label */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {(() => {
                const IconComponent = project.screenshots[activeFeature].icon
                return <IconComponent className="w-4 h-4 text-alpha-neon" />
              })()}
              <span className="text-xs text-white font-medium">
                {project.screenshots[activeFeature].title}
              </span>
            </motion.div>
          </div>

          {/* Tags - overlaid top right */}
          <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM: Project Details */}
        <div className="p-6 md:p-8">
          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-alpha-neon text-sm">{project.subtitle}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-5 text-sm max-w-3xl">
            {project.description}
          </p>

          {/* Feature Description + Stats Row */}
          <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-5">
            {/* Feature Description */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = project.screenshots[activeFeature].icon
                  return (
                    <div className="w-10 h-10 bg-alpha-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-alpha-neon" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {project.screenshots[activeFeature].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {project.screenshots[activeFeature].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap gap-2">
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setActiveFeature(index)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  index === activeFeature
                    ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <screenshot.icon className="w-3 h-3" />
                {screenshot.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const HeartDiseaseShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeScreen, setActiveScreen] = useState(0)
  const project = heartDiseaseProject

  const nextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevScreen = () => {
    setActiveScreen((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass rounded-3xl overflow-hidden">
        {/* Top: Full-width Screenshot Carousel */}
        <div className="relative w-full">
          {/* Screenshot Display */}
          <div className="relative w-full bg-gray-950">
            <motion.img
              key={activeScreen}
              src={project.screenshots[activeScreen].image}
              alt={project.screenshots[activeScreen].title}
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ aspectRatio: '2.25/1', maxHeight: '600px' }}
            />

            {/* Navigation Arrows */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
              <motion.button
                onClick={prevScreen}
                className="w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/90 transition-colors shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextScreen}
                className="w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/90 transition-colors shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Current Feature Label */}
            <div className="absolute top-4 left-4 z-10">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass px-4 py-2 rounded-full flex items-center gap-2"
              >
                {(() => {
                  const IconComponent = project.screenshots[activeScreen].icon
                  return <IconComponent className="w-4 h-4 text-red-400" />
                })()}
                <span className="text-xs text-white font-medium">
                  {project.screenshots[activeScreen].title}
                </span>
              </motion.div>
            </div>

            {/* Tags - overlaid top right */}
            <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium glass rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Project Details */}
        <div className="p-8 md:p-10">
          {/* Title */}
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-red-400" />
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
              {project.title}
            </h3>
          </div>
          <p className="text-red-400 text-sm mb-4">{project.subtitle}</p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Current Feature Description */}
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-xl p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              {(() => {
                const IconComponent = project.screenshots[activeScreen].icon
                return (
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-red-400" />
                  </div>
                )
              })()}
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {project.screenshots[activeScreen].title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {project.screenshots[activeScreen].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature Navigation Dots */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setActiveScreen(index)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeScreen === index
                    ? 'bg-red-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {screenshot.title}
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-white font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View Source
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const FeaturedProjectShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFeature, setActiveFeature] = useState(0)
  const project = featuredProject

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-3xl blur-3xl`} />

      {/* Main Card */}
      <div className="relative glass-strong rounded-3xl overflow-hidden">
        {/* TOP: Full-width Screenshot Carousel - shows complete image */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full"
          >
            <img
              src={project.screenshots[activeFeature].image}
              alt={project.screenshots[activeFeature].title}
              className="block w-full h-auto"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-alpha-dark/50 via-transparent to-transparent" />
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
            <motion.button
              onClick={prevFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextFeature}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Feature Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeFeature
                    ? 'bg-alpha-neon w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Current Feature Label */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass px-3 py-1.5 rounded-full flex items-center gap-2"
            >
              {(() => {
                const IconComponent = project.screenshots[activeFeature].icon
                return <IconComponent className="w-4 h-4 text-alpha-neon" />
              })()}
              <span className="text-xs text-white font-medium">
                {project.screenshots[activeFeature].title}
              </span>
            </motion.div>
          </div>

          {/* Tags - overlaid top right */}
          <div className="absolute top-4 right-4 z-10 flex flex-wrap justify-end gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium glass rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM: Project Details */}
        <div className="p-6 md:p-8">
          {/* Title Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-alpha-neon text-sm">{project.subtitle}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-alpha-neon via-alpha-purple to-alpha-pink rounded-full text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Demo
                <ExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-5 text-sm max-w-3xl">
            {project.description}
          </p>

          {/* Feature Description + Stats Row */}
          <div className="grid md:grid-cols-[1fr_auto] gap-4 mb-5">
            {/* Feature Description */}
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass rounded-xl p-3"
            >
              <div className="flex items-start gap-3">
                {(() => {
                  const IconComponent = project.screenshots[activeFeature].icon
                  return (
                    <div className="w-10 h-10 bg-alpha-neon/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-alpha-neon" />
                    </div>
                  )
                })()}
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {project.screenshots[activeFeature].title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {project.screenshots[activeFeature].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Navigation */}
          <div className="flex flex-wrap gap-2">
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={screenshot.id}
                onClick={() => setActiveFeature(index)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  index === activeFeature
                    ? 'bg-gradient-to-r from-alpha-neon to-alpha-purple text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <screenshot.icon className="w-3 h-3" />
                {screenshot.title}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Portfolio = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-alpha-purple/5 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-alpha-pink/5 rounded-full filter blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-alpha-neon" />
            <span className="text-sm text-gray-300">Featured Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6"
          >
            Stunning <span className="gradient-text">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore our flagship projects showcasing innovation, creativity, 
            and technical excellence across fashion e-commerce, AI-powered marketplace, consumer mobile apps, distributed systems, desktop banking, and machine learning.
          </motion.p>
        </div>

        {/* Featured Project Showcase */}
        <FeaturedProjectShowcase />

        {/* Mobile App Showcase */}
        <div className="mt-16">
          <MobileAppShowcase />
        </div>

        {/* Hydroponics IoT Showcase */}
        <div className="mt-16">
          <HydroponicsShowcase />
        </div>

        {/* Heart Disease ML Showcase */}
        <div className="mt-16">
          <HeartDiseaseShowcase />
        </div>

        {/* E-commerce Platform Showcase */}
        <div className="mt-16">
          <EcommerceShowcase />
        </div>

        {/* Goliath Distributed Intelligence Showcase */}
        <div className="mt-16">
          <GoliathShowcase />
        </div>

        {/* Banking Application Showcase */}
        <div className="mt-16">
          <MiniInstaPayShowcase />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Have a project in mind?
            <span className="gradient-text">Let's talk</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
