function About() {
  return (
    <>
      <section className="bg-1white p-16">
        <p className="text-2red text-7xl font-semibold text-center ">About</p>

        <div class="flex justify-between p-11 mr-36 ml-36">
          <img
            src="src/assets/background-about.webp"
            alt=""
            class="w-[35rem] rounded-xl border border-2red"
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

        <div class="flex justify-between p-11 mx-80">
          <p className="text-2red text-7xl font-semibold text-center ">
            Vision
          </p>
          <p className="text-2red text-7xl font-semibold text-center ">
            Mission
          </p>
        </div>
        <div class="flex justify-between p-11 mx-52">
          <p className="text-center w-[400px] text-1gray leading-relaxed">
            At Blaqbox, our mission is to empower businesses and individuals
            through innovative technology solutions. We strive to deliver
            cutting-edge IT services that enhance efficiency, drive growth, and
            simplify complexities. With a commitment to excellence and client
            satisfaction, we aim to be the trusted partner for all your digital
            needs.
          </p>

          <p className="text-center w-[400px] text-1gray leading-relaxed">
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
      </section>
    </>
  );
}

export default About;
