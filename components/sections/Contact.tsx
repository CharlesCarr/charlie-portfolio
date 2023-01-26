export const Contact = () => {
  return (
    <div className="min-h-screen max-h-screen w-full max-w-screen px-20 bg-gradient-one bg-center bg-cover flex flex-col justify-center items-center relative">
      <h1 className="text-5xl mb-6">Let's Connect!</h1>

      <div className="flex justify-center items-center gap-4 mb-6">
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Twitter</p>
        <p>Email</p>
      </div>

      <form className="flex flex-col">
        <label>Test</label>
        <input />
        <button className="bg-white/[.75] text-black text-sm rounded-lg px-4 py-2 mt-4">Send Message</button>
      </form>

      <div className="absolute left-2 bottom-2 flex justify-center items-center text-xs gap-6">
        <p>Designed & Developed by Charlie</p>
        <p>View the Code</p>
      </div>
    </div>
  );
};
