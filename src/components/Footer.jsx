import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center p-4 bg-gray-800 text-white">
            <p className="text-center">© 2024 Anshuman Mishra</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="h-6 w-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
