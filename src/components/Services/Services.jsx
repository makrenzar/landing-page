function Services() {
  return (
    <>
      <section className="bg-1white p-11">
        <p className="text-2red text-7xl font-semibold text-center ">
          Services
        </p>
        <div className="grid grid-flow-cols-4  grid-cols-4 mt-11">
          <div className="w-80 h-60 mx-auto bg-white shadow-2xl shadow-2white  rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="items-center">
                <box-icon name="desktop" color="#781515" size="lg"></box-icon>
              </div>
              <p class="text-lg font-semibold text-1gray text-center mt-5">
                Software Development
              </p>

              <p class="text-center text-2gray">
                Creating custom software solutions tailored to the specific
                needs of businesses or individuals
              </p>
            </div>
          </div>

          <div className="w-80 h-60 mx-auto bg-white shadow-2xl shadow-2white  rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="items-center">
                <box-icon name="globe" color="#781515" size="lg"></box-icon>
              </div>
              <p className="text-lg font-semibold text-1gray  text-center mt-5">
                Software as a Service
              </p>
              <p className="text-center text-2gray">
                Offering software applications and services on a subscription
                basis, hosted on the cloud and accessible over the .
              </p>
            </div>
          </div>

          <div className="w-80 h-60 mx-auto bg-white shadow-2xl shadow-2white rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="items-center">
                <box-icon name="cog" color="#781515" size="lg"></box-icon>
              </div>
              <p className="text-lg font-semibold text-1gray  text-center mt-5">
                ERP System
              </p>
              <p className="text-center text-2gray">
                Implementing integrated software solutions to streamline
                business processes
              </p>
            </div>
          </div>

          <div className="w-80 h-60 mx-auto bg-white shadow-2xl shadow-2white rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="items-center">
                <box-icon name="desktop" color="#781515" size="lg"></box-icon>
              </div>
              <p className="text-lg font-semibold text-1gray  text-center mt-5">
                Web Development
              </p>
              <p className="text-center text-2gray">
                Designing and building websites and web applications for various
                purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
