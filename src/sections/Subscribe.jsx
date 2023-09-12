import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col lg:flex-col 
    max-sm:flex-col max-sm:text-center gap-10" id="contact-us">
      
      <h3 className="text-3xl leading-[68px] lg:max-w-md font-palanquin font-bold">sign up for <span className="text-coral-red">Updates</span> & Newsletters</h3>
   
        <div className="lg:max-w-[58%] w-full flex justify-center items-center  max-sm:flex-col gap-5 p-2.5 
        sm:border sm:border-slate-gray rounded-full">

          <input type="text"  placeholder="Subscribe@nike.com" className="input"/>

          <div className="flex max-sm:justify-end max-sm:w-full max-sm:absolute max-sm:right-[50px]">
            <Button label="Sign-up" fullWidth />
          </div>
        </div>
    </section>
  )
}

export default Subscribe
