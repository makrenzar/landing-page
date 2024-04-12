function About() {
  return (
    <>
      <section id="about" className="bg-1white p-16">
      <div className="container px-6 py-10 mx-auto">
        <p className="text-2red text-7xl font-semibold text-center ">About</p>

        <div className="flex justify-between p-11 ">
          <img
            src="src/assets/background-about.webp"
            alt=""
            className=" object-cover w-[35rem] rounded-xl border border-2red"
          />

          <p className="text-center w-[600px] text-1gray">
            Our company, dedicated to excellence in IT services, strives to
            empower businesses through innovative solutions and expert support,
            ensuring seamless digital transformation and sustained success.
            <br></br> <br></br> <br></br> Our company, dedicated to excellence
            in IT services, strives to empower businesses through innovative
            solutions and expert support, ensuring seamless digital
            transformation and sustained success.
            <br></br> <br></br> <br></br> Our company, dedicated to excellence
            in IT services, strives to empower businesses through innovative
            solutions and expert support, ensuring seamless digital
            transformation and sustained success.
          </p>
        </div>

        <div className="flex justify-between p-11 mx-40 ">
          <p className="text-2red text-7xl font-semibold text-center mt-11">
            Vision
          </p>
          <p className="text-2red text-7xl font-semibold text-center mt-11">
            Mission
          </p>
        </div>
        <div className="flex justify-between p-11 ">
          <p className="text-center w-[600px] text-1gray leading-relaxed mt-11">
            At Blaqbox, our mission is to empower businesses and individuals
            through innovative technology solutions. We strive to deliver
            cutting-edge IT services that enhance efficiency, drive growth, and
            simplify complexities. With a commitment to excellence and client
            satisfaction, we aim to be the trusted partner for all your digital
            needs.
          </p>

       
           
            <div className="divider lg:divider-horizontal bg-2red w-1 h-96 rounded-lg"></div>
        

          <p className="text-center w-[600px] text-1gray leading-relaxed mt-11">
            Our vision at Blaqbox is to revolutionize the IT industry by
            continually pushing boundaries and setting new standards of
            excellence. We envision a future where technology seamlessly
            integrates into every aspect of life, making it more accessible,
            efficient, and secure. By fostering a culture of creativity,
            collaboration, and forward thinking, we aspire to be the driving
            force behind transformative technological advancements that
            positively impact society.
          </p>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
