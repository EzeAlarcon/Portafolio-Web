import { useState } from "react";
import { content } from "../Content";
import sqlImage from "../assets/images/Skills/sql.png";
import rorImage from "../assets/images/Skills/ror.png";
import powerBiImage from "../assets/images/Skills/powerbi.png";

const Skills = () => {
  const { skills } = content;
  const [selectSkill, setSelectSkill] = useState(null);

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
          {/* Habilidades adicionales */}
          <div className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
            <div>
              <img
                src={sqlImage}
                alt="SQL"
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>Sql Mysql </h6>
              <p className="italic">Use of relational and non-relational bases</p>
            </div>
          </div>
          <div className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
            <div>
              <img
                src={rorImage}
                alt="Ruby on Rails"
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>RoR (Ruby on Rails)</h6>
              <p className="italic">Creating Rails ActiveRecord capabilities to interact with the database</p>
            </div>
          </div>
          <div className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
            <div>
              <img
                src={powerBiImage}
                alt="PowerBI Dax"
                className="w-10 group-hover:scale-125 duration-200"
              />
            </div>
            <div>
              <h6>PowerBi Dax</h6>
              <p className="italic">Data transformation with SQL creation and maintenance of dashboards</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
