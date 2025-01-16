import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-2">SERVICES</h3>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">SUPPORT</h3>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}