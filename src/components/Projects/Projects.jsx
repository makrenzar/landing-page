function Projects() {
  return (
    <>
      <section id="projects" className="bg-1white ">
        <div className="container mx-auto">
          <p className="text-6xl font-semibold text-center text-2red">
            Projects
          </p>

          <div className="flex justify-between p-11  ">
            <img
              src="src/assets/background-project.jpg"
              alt=""
              className=" object-cover w-[40rem] h-[20rem] rounded-xl border border-2red"
            />

            <p className="text-center w-[600px] text-1gray">
              {" "}
              is a dedicated online platform designed to empower individuals to
              repair, refurbish, and maintain electronic devices and appliances.
              Serving as a hub for DIY repair enthusiasts and professionals
              alike, iFIXITORG provides resources, guides, and a community forum
              to foster a culture of repairability and sustainability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
