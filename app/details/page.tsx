'use client'
import React from 'react'
import { AiOutlineWhatsApp, AiFillInstagram, AiFillBehanceSquare, AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6";

const page = () => {

    const onWhatsAppClick = () => {
        window.location.replace('https://wa.me/message/B6CZ7JYWRIXIJ1');
    }

    const onInstagramClick = () => {
        window.location.replace('https://www.instagram.com/_mirage_studios_?igsh=d282eGZ5eTV0cGRh')
    }

    const onBehanceClick = () => {
        window.location.replace('https://www.behance.net/Mirage_Studios')
    }

    const onLinkedInClick = () => {
        window.location.replace('https://www.linkedin.com/in/kaustubh-varsat-003a65276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
    }

    const onMailClick = () => {
        window.location.href = "mailto:3dmiragestudios@gmail.com";
    }

    const onPhoneClick = () => {   
        window.location.href = "tel:8734005342"
     }

    return (
        <div className="min-h-screen animated-gradient text-white flex flex-col items-center justify-center p-6">

            <div className="flex flex-col items-center text-center mb-10 px-4">
                <div className="text-xl font-semibold mb-4">
                    Welcome to
                </div>
                <div className="text-3xl sm:text-5xl font-bold mb-4">
                    Mirage Creative Studios
                </div>
                <div className="text-xl sm:text-2xl italic mb-6">
                    "Crafting stories"
                </div>
                <div className="text-lg mb-6">
                    Want to know more about us? Explore us
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onWhatsAppClick}
                >
                    <AiOutlineWhatsApp size={"45"} className="sm:hover:scale-125" />
                </div>
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onInstagramClick}
                >
                    <AiFillInstagram size={"45"} className="sm:hover:scale-125" />
                </div>
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onBehanceClick}
                >
                    <AiFillBehanceSquare size={"45"} className="sm:hover:scale-125" />
                </div>
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onLinkedInClick}
                >
                    <AiFillLinkedin size={"45"} className="sm:hover:scale-125" />
                </div>
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onMailClick}
                >
                    <MdEmail size={"45"} className="sm:hover:scale-125" />
                </div>
                <div
                    className="hover:scale-110 transform transition-all duration-200 cursor-pointer"
                    onClick={onPhoneClick}
                >
                    <FaPhone size={"40"} className="sm:hover:scale-125" />
                </div>
            </div>
        </div>
    )
}

export default page
