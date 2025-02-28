
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.



const ParticlesComponent = (props) => {

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
      }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      particles: {
        number: {
            value: 175,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5, // More translucent particles
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: true,
          distance: 150, // Closer particles, more links
          color: "#ffffff",
          opacity: 0.4, // More translucent lines
          width: 1, // Keep lines thin for web effect
        },
        move: {
          enable: true,
          speed: 1, // Slower movement for a floating effect
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      detectRetina: true,
    }),
    []
  );
  
  


  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "80vh", // Set the height to 80vh
        zIndex: 1, // Ensure it is behind the header content
      }}
    />
  );
};

export default ParticlesComponent;