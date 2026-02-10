import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

// Register the plugin
gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    // it will split the text into characters and words, and wrap them in divs with the class "char" and "word" respectively
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    // it will split the text into lines, and wrap them in divs with the class "line"
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100, // it will animate the characters from 100% of their height to their original position
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06, // it will animate the characters one after the other with a delay of 0.06 seconds
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top", // it will start the animation when the top of the hero section reaches the top of the viewport
          end: "bottom top", // it will end the animation when the bottom of the hero section reaches the top of the viewport
          scrub: true, // it will synchronize the animation with the scroll position, so it will play forward when scrolling down and backward when scrolling up
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
