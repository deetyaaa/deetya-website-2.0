import React, { useRef, useEffect } from "react";

const Starfield = ({ numStars = Math.min(1000, Math.max(300, window.innerWidth / 2)), speed = 0.001 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;
        const stars = Array.from({ length: numStars }, () => ({
            x: (Math.random() - 0.5) * width,
            y: (Math.random() - 0.5) * height,
            z: Math.random() * width, // Depth perspective
        }));

        const updateStars = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                star.z -= speed * width; // Move stars toward the viewer

                if (star.z <= 0) { 
                    // Reset star when it reaches the camera
                    star.x = (Math.random() - 0.5) * width;
                    star.y = (Math.random() - 0.5) * height;
                    star.z = width;
                }

                // Perspective projection (simulate 3D effect)
                const scale = width / star.z;
                const screenX = width / 2 + star.x * scale;
                const screenY = height / 2 + star.y * scale;
                const starSize = Math.max(0.2, 0.3 * scale); // Make stars grow as they get closer

                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(screenX, screenY, starSize, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(updateStars);
        };

        updateStars();
    }, [numStars, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
    );
};

export default Starfield;