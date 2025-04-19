
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-thapar-dark text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <h3 className="text-lg font-semibold mb-3">Thapar Go</h3>
            <p className="text-gray-300">
              Your complete campus navigation and scheduling solution for Thapar Institute of Engineering and Technology.
            </p>
          </div>
          
          
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              
                <Link to="/map" className="text-gray-300 hover:text-white">
                  Campus Map
                </Link>
              </li>
              
                <Link to="/timetable" className="text-gray-300 hover:text-white">
                  Timetable
                </Link>
              </li>
              
                <Link to="/classrooms" className="text-gray-300 hover:text-white">
                  Classrooms
                </Link>
              </li>
            </ul>
          </div>
          
          
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <address className="not-italic text-gray-300">
              Thapar Institute of Engineering and Technology</p>
              Patiala, Punjab, India</p>
              <p className="mt-2">Email@thapar.edu</p>
              Phone+91-175-2393021</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Thapar Go. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
