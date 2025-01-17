"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aos({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 60,
            duration: 700
        });
    }, []);

    return <>{children}</>;
}
