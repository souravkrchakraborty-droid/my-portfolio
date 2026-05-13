import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Particles
        options={{
          fullScreen: false,

          background: {
            color: {
              value: "transparent",
            },
          },

          particles: {
            number: {
              value: 150,
            },

            color: {
              value: "#00ffff",
            },

            links: {
              enable: true,
              color: "#00ffff",
              distance: 180,
              opacity: 0.8,
              width: 2,
            },

            move: {
              enable: true,
              speed: 2,
            },

            opacity: {
              value: 1,
            },

            size: {
              value: 5,
            },
          },
        }}

        className="absolute inset-0 z-0"
      />
    </div>
  );
}