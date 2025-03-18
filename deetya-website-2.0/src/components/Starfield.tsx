import React, { useRef, useEffect } from "react";

const Starfield = ({
    numStars = Math.min(1000, Math.max(300, window.innerWidth / 2)),
    speed = 0.001,
}: {
    numStars?: number;
    speed?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        // Initial width and height
        let width = window.innerWidth;
        let height = window.innerHeight;

        const setCanvasSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setCanvasSize(); // Set initial canvas size

        // Array of stars with initial positions and depth (z)
        const stars = Array.from({ length: numStars }, () => ({
            x: (Math.random() - 0.5) * width,
            y: (Math.random() - 0.5) * height,
            z: Math.random() * width, // Depth perspective
        }));

        const updateStars = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, width, height);

            stars.forEach((star) => {
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

                // Slight scaling of the star size as it moves closer
                const starSize = Math.max(0.2, 0.3 * scale); // Make stars grow as they get closer
                const sizeFactor = 1 + (1 / star.z); // Slight size increase as star approaches

                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(screenX, screenY, starSize * sizeFactor, 0, Math.PI * 2); // Apply sizeFactor here
                ctx.fill();
            });

            requestAnimationFrame(updateStars);
        };

        updateStars(); // Start the animation loop

        // Update canvas size on window resize
        window.addEventListener("resize", setCanvasSize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };
    }, [numStars, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
};

export default Starfield;