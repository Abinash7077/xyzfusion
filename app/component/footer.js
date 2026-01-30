"use client";

import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="px-10 mx-auto px-6 py-24 grid gap-16 lg:grid-cols-5">

        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
              X
            </div>
            <span className="text-3xl font-bold text-slate-900">
              XYZFusion
            </span>
          </div>

          <p className="text-gray-500 leading-relaxed text-justify mb-6">
           Next-generation master data management for the modern enterprise.
          </p>

          <div className="flex gap-5 text-slate-400 text-lg">
            <FaLinkedinIn className="hover:text-indigo-600 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-600 cursor-pointer" />
            <FaYoutube className="hover:text-indigo-600 cursor-pointer" />
            <FaFacebookF className="hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-2xl text-slate-900 mb-6">Solutions</h4>
          <ul className="space-y-3 text-gray-500">
            <li>Master Data Management</li>
            <li>Data Governance</li>
            <li>Data Quality Management</li>
            <li>Customer MDM</li>
            <li>Product MDM</li>
            <li>Supplier MDM</li>
            <li>Financial MDM</li>
            <li>Multi-Domain MDM</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-6 text-2xl">Resources</h4>
          <ul className="space-y-3 text-gray-500">
            <li>Documentation</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Blog</li>
            <li>Webinars</li>
            <li>API Reference</li>
            <li>Community Forum</li>
            <li>Training & Certification</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-6 text-2xl">Company</h4>
          <ul className="space-y-3 text-gray-500">
            <li>About Us</li>
            <li className="flex items-center gap-2">
              Careers
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                We're Hiring!
              </span>
            </li>
            <li>Partners</li>
            <li>Press & Media</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-6 text-2xl">
            Newsletter
          </h4>

          <p className="text-gray-500 mb-6">
            Stay updated with MDM best practices
          </p>

          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border text-gray-500 border-slate-300 rounded-full py-3 px-5 pr-12 outline-none focus:border-indigo-600"
            />
            <button className="absolute right-1 top-1 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
              <FiSend />
            </button>
          </div>

          <p className="text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 py-6">
        <div className="px-10 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2025 XYZ Fusion. All rights reserved. | Privacy Policy | Terms of
            Service | Cookie Policy
          </p>

          <p className="text-xs text-slate-400">
            ISO 27001 • SOC 2 • GDPR Compliant • HIPAA Compliant
          </p>

        </div>
      </div>
    </footer>
  );
}
