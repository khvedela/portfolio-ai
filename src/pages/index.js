import { Inter } from "next/font/google";
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Analytics />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:w-48"
              src="/me.jpeg"
              alt="Profile"
              width={192}
              height={192}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Web developer</div>
            <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">David Khvedelidze</h1>
            <p className="mt-2 text-gray-500">
              A passionate Frontend Web Developer with Expertise in Modern Web Technologies and Frameworks.
            </p>
            <div className="mt-4 flex items-center">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:davidkhvedelidze@gmail.com" className="ml-2 text-gray-500 hover:text-gray-700">
                davidkhvedelidze@gmail.com
              </a>
            </div>
            <div className="mt-2 flex items-center">
              <Linkedin className="h-5 w-5 text-gray-400" />
              <a href="https://linkedin.com/in/khvedelidzedavid/" className="ml-2 text-gray-500 hover:text-gray-700">
                david khvedelidze
              </a>
            </div>
            <div className="mt-2 flex items-center">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-gray-500">+995 511 300 322</span>
            </div>
          </div>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Angular developer</h3>
            <p className="text-gray-500">TBC Bank • Sep. 2023 - Currently</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Maintain multiple projects and ensure their functionality and usability.</li>
              <li>Develop new features for projects using unit testing tools such as Jest and Spectator.</li>
              <li>Implement NGRX state management for efficient data flow and organization in projects.</li>
              <li>Utilize RxJS to create reactive applications and enhance user experience.</li>
              <li>Structure complex projects to optimize performance and maintainability.</li>
              <li>Collaborate with team members to ensure successful project delivery.</li>
              <li>Stay up-to-date with the latest technologies and industry trends to continuously improve project quality and efficiency.</li>
              <li>Proactively identify and resolve technical issues and challenges to maintain project progress.</li>
              <li>Maintain thorough documentation and version control to ensure project stability and continuity.</li>
              <li>Mentor junior developers and provide technical guidance and support as needed.</li>
            </ul>
          </div>
        </div>
        
        <div className="px-8 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Business and Technology University</h3>
            <p className="text-gray-500">Information Technologies • 2020 - 2024</p>
          </div>
        </div>

        <div className="px-8 pb-6 border-gray-200">
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Conservatoire National des Arts et Métiers</h3>
            <p className="text-gray-500">Master of Science - MS, Computer Networks and IoT Systems • 2024 - current</p>
          </div>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Languages</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            <li>Georgian (Native)</li>
            <li>English (Fluent)</li>
            <li>Russian (Fluent)</li>
          </ul>
        </div>
        
        <div className="px-8 py-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <p className="mt-2 text-gray-600">
            Javascript - Angular - HTML - CSS - SCSS - Git - Github - Webpack - Styled Components - NGRX - RXJS - UI design - Figma
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
