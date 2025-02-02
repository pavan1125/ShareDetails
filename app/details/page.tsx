'use client'
import React from 'react'
import { AiOutlineWhatsApp, AiFillInstagram, AiFillBehanceSquare,AiFillLinkedin } from "react-icons/ai"

const page = () => {

    const onWhatsAppClick = () => {
        window.location.replace('https://wa.me/message/B6CZ7JYWRIXIJ1');
    }

    const onInstagramClick = ()=>{
        window.location.replace('https://www.instagram.com/_mirage_studios_?igsh=d282eGZ5eTV0cGRh')
    }
   
    const onBehanceClick= ()=> {
        window.location.replace('https://www.behance.net/Mirage_Studios')
    }
    
    const onLinkedInClick = ()=>{
        window.location.replace('https://www.linkedin.com/in/kaustubh-varsat-003a65276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center p-6">
            <div className="text-3xl font-semibold mb-4">
                Welcome to the page
            </div>
            <div className="text-xl mb-4">
                Want to know more about us?
            </div>
            <div className="text-lg mb-6">
                Connect with us
            </div>
            <div className="flex gap-8">
                <div 
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onWhatsAppClick}
                >
                    <AiOutlineWhatsApp size={"45"} />
                </div>
                <div 
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onInstagramClick}
                >
                    <AiFillInstagram size={"45"} />
                </div>
                <div 
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onBehanceClick}
                >
                    <AiFillBehanceSquare size={"45"} />
                </div>
                <div 
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onLinkedInClick}
                >
                    <AiFillLinkedin size={"45"} />
                </div>
            </div>
        </div>
    )
}

export default page
