"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Users,
  Globe,
  Shield,
  Zap,
  Factory,
  Ship,
  Fuel,
  Utensils,
  Building2,
  Wrench,
  Award,
  FileText,
  HardHat,
  Settings,
  Cpu,
  Hammer,
  Download,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

function updateDots(activeIndex: number) {
  const dots = document.querySelectorAll(".slider-dot")
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.className = "slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors bg-orange-500"
    } else {
      dot.className = "slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors bg-white/50 hover:bg-white/70"
    }
  })
}

// Lightbox state and functions
function openLightbox(imageSrc: string, title: string) {
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement
  const lightboxTitle = document.getElementById("lightbox-title")
  if (lightbox && lightboxImg && lightboxTitle) {
    lightboxImg.src = imageSrc
    lightboxTitle.textContent = title
    lightbox.classList.remove("hidden")
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  if (lightbox) {
    lightbox.classList.add("hidden")
    document.body.style.overflow = "auto" // Restore scrolling
  }
}

// PDF Download function
function downloadPDF(pdfUrl: string, fileName: string) {
  const link = document.createElement("a")
  link.href = pdfUrl
  link.download = fileName
  link.target = "_blank"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function EuroWeldProWebsite() {
  useEffect(() => {
    const slider = document.getElementById("slider")
    if (slider) {
      slider.dataset.currentIndex = "0"
    }
  }, [])
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/eagle.jpg"
                alt="EuroWeld Pro Logo"
                width={40}
                height={40}
                className="rounded-lg sm:w-[50px] sm:h-[50px]"
              />
              <h1 className="text-lg sm:text-2xl font-bold">Eagle World</h1>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-orange-500 transition-colors">
                Services
              </a>
              <a href="#candidates" className="hover:text-orange-500 transition-colors">
                For Candidates
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu")
                mobileMenu?.classList.toggle("hidden")
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                Home
              </a>
              <a href="#about" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                About
              </a>
              <a href="#services" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                Services
              </a>
              <a href="#candidates" className="hover:text-orange-500 transition-colors py-2 border-b border-slate-700">
                For Candidates
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors py-2">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-8">
            <div className="space-y-4 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                Your Trusted Partner Across Europe
                <span className="text-orange-500">Expert Welders, Fabricators, Electricians & More</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300">
                Specializing in Boiler Construction, Oil & Gas, Food Industry, Shipbuilding, and Fertilizer Sectors.
              </p>
              <p>🔧 What We Do</p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                At Eagle World, we provide highly skilled welders, fabricators, electricians, and more to industries
                across Europe. Our professionals are experienced, certified, and ready to support your projects with
                precision and reliability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Skilled Workforce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Sector-Specific Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Rapid Deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Quality Assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Pan-European Reach</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
                  <a href="#contact">Contact Us Today</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent w-full sm:w-auto"
                >
                  <a href="#services">Explore Our Services</a>
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/pic9.jpg"
                alt="Professional welders at work"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section id="about" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Eagle World</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Leading manpower supplier for European industries with expertise in critical sectors
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Our Certifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {/* Certification Images */}
                <div
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/cert1.jpg", "")}
                >
                  <Image
                    src="/cert1.jpg"
                    alt="ISO 9001:2015 Certification"
                    width={150}
                    height={200}
                    className="rounded-lg shadow-md w-full h-32 object-cover border-2 border-gray-200 hover:border-orange-500"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600"></p>
                </div>
                <div
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/cert2.jpg", "")}
                >
                  <Image
                    src="/cert2.jpg"
                    alt="TUV ANB Certification"
                    width={150}
                    height={200}
                    className="rounded-lg shadow-md w-full h-32 object-cover border-2 border-gray-200 hover:border-orange-500"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600"></p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mb-4">Click on any certification to view full size</p>
              {/* PDF Download Section */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                  <FileText className="h-5 w-5 text-orange-500 mr-2" />
                  Company certificates
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => downloadPDF("/pdf_certfication.pdf", "Eagle-World-Company-certification.pdf")}
                    className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Company Certificates (PDF)</span>
                  </button>
                  {/* <p className="text-xs text-gray-500">Complete overview of our services and capabilities</p> */}
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 flex items-center">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To be the leading and most reliable manpower supplier for European industries, particularly in Boiler,
                  Oil & Gas, Food, Shipbuilding, and Fertilizer sectors, by providing skilled and efficient welders and
                  fabricators who meet precise client requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  To achieve excellence in professional manpower solutions, fostering long-term partnerships built on
                  trust, quality, and mutual success for both clients and our workforce.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Specialists in assessing welding and fabrication skills
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Rigorous Vetting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Comprehensive checks on qualifications and experience
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">
                  Full adherence to European labor laws and procedures
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-slate-800 text-lg sm:text-xl">Client-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base">Dedicated to understanding unique client demands</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manpower solutions for Europe's most demanding industries
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
                  <CardTitle className="text-xl sm:text-2xl text-slate-800">Expert Welders Supply</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm sm:text-base">Welding Techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      TIG
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      MMA
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      MIG
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      SAW
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm sm:text-base">Materials:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Carbon Steel
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Stainless Steel
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Duplex
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Super Duplex
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Aluminum
                    </Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Exotic Metals
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">All major welding certifications including TUV ANB</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  <CardTitle className="text-xl sm:text-2xl text-slate-800">Expert Fabricators Supply</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Skilled in reading and interpreting technical drawings (Piping and Structure)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Proficient in cutting, shaping, and assembling metal structures
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experienced in operating various fabrication machinery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Experience with exotic metals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">
              🏗 Industries We Serve
            </h3>
            <h3 className="text-sm sm:text-base font-bold">
              We specialize in delivering workforce solutions for critical industrial sectors:
            </h3>
            <br />
            <br />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader className="pb-4">
                  <Factory className="h-12 w-12 sm:h-16 sm:w-16 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm sm:text-base">Boiler Construction</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="pb-4">
                  <Fuel className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm:text-base">Oil & Gas</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="pb-4">
                  <Utensils className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm:text-base">Food Industry</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-cyan-100">
                <CardHeader className="pb-4">
                  <Ship className="h-12 w-12 sm:h-16 sm:w-16 text-cyan-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm:text-base">Shipbuilding</CardTitle>
                </CardHeader>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 col-span-2 sm:col-span-1">
                <CardHeader className="pb-4">
                  <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800 text-sm:text-base">Fertilizer Manufacturing</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
          <br />
          <br />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-bold">
            Our team understands the unique requirements of each sector and adapts accordingly to deliver results that
            exceed expectations.
          </p>
          {/* Image Slider Section */}
          <div className="mt-12 sm:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8 sm:mb-12">
              Our Work in Action
            </h3>
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div
                id="slider"
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: "translateX(0%)" }}
                data-current-index="0"
              >
                {/* Slide 1 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic1.jpg"
                    alt="Welders working on boiler construction"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 2 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic2.jpg"
                    alt="Oil and gas pipeline welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 3 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.jpg">
                    <source src="/video1.mp4" type="video/mp4" />
                    <source src="/video1.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 4 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic3.jpg"
                    alt="Shipbuilding fabrication work"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 5 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic4.jpg"
                    alt="Food industry stainless steel welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 6 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.png">
                    <source src="/video2.mp4" type="video/mp4" />
                    <source src="/video2.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 7 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic5.jpg"
                    alt="Fertilizer plant construction"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 8 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic7.jpg"
                    alt="Industrial boiler welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 9 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.png">
                    <source src="/video3.mp4" type="video/mp4" />
                    <source src="/video3.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 10 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic8.jpg"
                    alt="Offshore platform welding"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 11 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.png">
                    <source src="/video4.mp4" type="video/mp4" />
                    <source src="/video4.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Slide 12 - Image */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <Image
                    src="/pic9.jpg"
                    alt="Precision welding work"
                    width={800}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Slide 13 - Video */}
                <div className="min-w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center bg-gray-100">
                  <video className="w-full h-full object-contain" controls muted loop poster="/eagle.png">
                    <source src="/video5.mp4" type="video/mp4" />
                    <source src="/video5.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* Main Navigation Arrows */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                onClick={() => {
                  const slider = document.getElementById("slider")
                  const currentIndex = Number.parseInt(slider?.dataset.currentIndex || "0")
                  const totalSlides = 13
                  const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
                  if (slider) {
                    const videos = slider.querySelectorAll("video")
                    videos.forEach((video) => video.pause())
                    slider.style.transform = `translateX(-${newIndex * 100}%)`
                    slider.dataset.currentIndex = newIndex.toString()
                    updateDots(newIndex)
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                onClick={() => {
                  const slider = document.getElementById("slider")
                  const currentIndex = Number.parseInt(slider?.dataset.currentIndex || "0")
                  const totalSlides = 13
                  const newIndex = (currentIndex + 1) % totalSlides
                  if (slider) {
                    const videos = slider.querySelectorAll("video")
                    videos.forEach((video) => video.pause())
                    slider.style.transform = `translateX(-${newIndex * 100}%)`
                    slider.dataset.currentIndex = newIndex.toString()
                    updateDots(newIndex)
                  }
                }}
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* Dots Indicator - Responsive */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-1 sm:gap-2 z-20 justify-center max-w-[90%] sm:max-w-2xl">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                  <button
                    key={index}
                    className={`slider-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === 0 ? "bg-orange-500" : "bg-white/50 hover:bg-white/70"
                    }`}
                    onClick={() => {
                      const slider = document.getElementById("slider")
                      if (slider) {
                        const videos = slider.querySelectorAll("video")
                        videos.forEach((video) => video.pause())
                        slider.style.transform = `translateX(-${index * 100}%)`
                        slider.dataset.currentIndex = index.toString()
                        updateDots(index)
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* For Candidates Section */}
      <section id="candidates" className="py-12 sm:py-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Expert Team</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Opportunities for skilled welders and fabricators seeking rewarding careers across Europe
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">💡 Why Choose Eagle World?</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-sm sm:text-base">
                    ⚙ Industry Expertise – Decades of experience in supplying skilled professionals to European
                    industries.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm sm:text-base">
                    ⏱ Timely Solutions – Fast, reliable deployment to keep your projects on schedule.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm sm:text-base">
                    📈 Productivity Boost – Skilled manpower tailored to maximize your operational efficiency.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sm sm:text-base">
                    🌐 Pan-European Reach – Seamless workforce delivery across borders.
                  </span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/join.jpg"
                alt="Professional team"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl max-w-sm w-full h-auto"
              />
            </div>
          </div>
          {/* Our Workforce Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <p className="h-8 w-8 sm:h-10 sm:w-10 text-orange-500 mr-3" />👷 Our Workforce
              </h3>
              <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
                We recruit, train, and deploy only the most competent professionals, including:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {/* Welders */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Wrench className="h-12 w-12 sm:h-16 sm:w-16 text-orange-400 mx-auto mb-2 group-hover:text-orange-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Welders</h4>
              </div>
              {/* Fabricators */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-blue-400 mx-auto mb-2 group-hover:text-blue-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Fabricators</h4>
              </div>
              {/* Electricians */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-400 mx-auto mb-2 group-hover:text-yellow-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Electricians</h4>
              </div>
              {/* Fitters */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Settings className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-2 group-hover:text-green-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Fitters</h4>
              </div>
              {/* Pipe Welders */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Cpu className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400 mx-auto mb-2 group-hover:text-purple-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Pipe Welders</h4>
              </div>
              {/* Technical Specialists */}
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="bg-white/20 rounded-lg p-4 sm:p-6 mb-3">
                  <Hammer className="h-12 w-12 sm:h-16 sm:w-16 text-red-400 mx-auto mb-2 group-hover:text-red-300 transition-colors" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white">Technical Specialists</h4>
              </div>
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <p className="text-sm sm:text-base text-gray-200 italic">And other technical specialists</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Get in Touch Section */}
          <div className="mb-8 sm:mb-12">
            <div className="text-center pb-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-800">📞 Get in Touch</h2>
              <p className="text-gray-600 text-base sm:text-lg">Have a project in mind or need workforce support?</p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3">
                  <div>
                    <span className="text-sm sm:text-base font-medium text-slate-800">📧 Email:</span>
                    <p className="text-orange-600 hover:text-orange-700 transition-colors">
                      <a href="mailto:profitech@eagleworldlimited.com" className="text-sm sm:text-base">
                        profitech@eagleworldlimited.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <span className="text-sm sm:text-base font-medium text-slate-800">📞 Phone:</span>
                    <p className="text-orange-600 hover:text-orange-700 transition-colors">
                      <a href="tel:+356-99977976" className="text-sm sm:text-base">
                        +356 99977976
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <span className="text-sm sm:text-base font-medium text-slate-800">🌍 Website:</span>
                    <p className="text-orange-600 hover:text-orange-700 transition-colors">
                      <a
                        href="https://www.eagleworldlimited.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base"
                      >
                        www.eagleworldlimited.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div>
                    <span className="text-sm sm:text-base font-medium text-slate-800">📍 Head Office:</span>
                    <p className="text-gray-600 text-sm sm:text-base">
                      18 Office 3, Triq Ignazio Gavino Bonavita,
                      <br />
                      Pembroke PBK 1150, Malta
                    </p>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-300 my-6"></div>
              {/* Social Media Links */}
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-slate-800">🔗 Connect With Us</h4>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <a
                    href="https://linkedin.com/company/eagleworld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium flex items-center space-x-2"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://facebook.com/eagleworld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium flex items-center space-x-2"
                  >
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/eagleworld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium flex items-center space-x-2"
                  >
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/35699977976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base font-medium flex items-center space-x-2"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/eagle.jpg"
                  alt="Eagle World LLC Logo"
                  width={32}
                  height={32}
                  className="rounded-lg sm:w-[40px] sm:h-[40px]"
                />
                <h3 className="text-lg sm:text-xl font-bold">Eagle World LLC</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Your trusted partner for expert welders and fabricators across Europe.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Expert Welders
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Fabricators
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Industrial Projects
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-orange-500 transition-colors">
                    Quality Assurance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Boiler Construction</li>
                <li>Oil & Gas</li>
                <li>Food Industry</li>
                <li>Shipbuilding</li>
                <li>Fertilizer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Eagle World LLC | All rights reserved. | GDPR Compliant | Based in
              Malta, EU
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <div
        id="lightbox"
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] hidden"
        onClick={closeLightbox}
      >
        <div className="relative max-w-3xl max-h-[90vh] mx-auto p-4" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-white text-3xl font-bold z-10" onClick={closeLightbox}>
            &times;
          </button>
          <Image
            id="lightbox-img"
            src="/placeholder.svg"
            alt="Lightbox Image"
            width={1200}
            height={800}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
          />
          <p id="lightbox-title" className="text-white text-center mt-4 text-lg"></p>
        </div>
      </div>
    </div>
  )
}
