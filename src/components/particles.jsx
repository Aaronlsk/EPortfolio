
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";



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
            value: 100,
            density: {
                enable: true,
                value_area: 300
            }
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5, 
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: true,
          distance: 150, 
          color: "#ffffff",
          opacity: 0.4, 
          width: 1, 
        },
        move: {
          enable: true,
          speed: 1, 
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
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesComponent;