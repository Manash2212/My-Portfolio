import "../../styles/services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I am dedicated to assisting your brand&#39;s growth by creating a
          website <br /> and propelling it forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1 className="semi-title">
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1 className="semi-title">
            <b>For Your</b> Business
          </h1>
          <button>What i Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            dolore provident minus nulla minima autem, eligendi quas aliquid,
            incidunt laudantium repellendus repellat? Quo quisquam pariatur
            molestiae sit voluptate amet error, sunt ullam, eum voluptatibus
            magnam consectetur eaque laudantium nemo placeat? Pariatur aliquid
            culpa exercitationem vitae maiores id fuga laudantium repellat?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Brandong</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            dolore provident minus nulla minima autem, eligendi quas aliquid,
            incidunt laudantium repellendus repellat? Quo quisquam pariatur
            molestiae sit voluptate amet error, sunt ullam, eum voluptatibus
            magnam consectetur eaque laudantium nemo placeat? Pariatur aliquid
            culpa exercitationem vitae maiores id fuga laudantium repellat?
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Brandong</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            dolore provident minus nulla minima autem, eligendi quas aliquid,
            incidunt laudantium repellendus repellat? Quo quisquam pariatur
            molestiae sit voluptate amet error, sunt ullam, eum voluptatibus
            magnam consectetur eaque laudantium nemo placeat? Pariatur aliquid
            culpa exercitationem vitae maiores id fuga laudantium repellat?
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
