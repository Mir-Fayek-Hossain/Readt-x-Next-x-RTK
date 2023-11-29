const VideoBanner = () => {
    return (
        <div className="w-full lg:aspect-[16/5] md:aspect-video aspect-[5/6] relative">
            <div className="absolute bg-[#000000] bg-opacity-60 w-full h-full -z-[9]"></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                width="100%"
                height="100%"
                poster="/frontend/development.jpg"
                className="absolute -z-10 w-full object-cover h-full"
            >
                <source
                    src="/app development/mobile-app-bg-video.mp4"
                    type="video/mp4"
                />{" "}
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBanner;
