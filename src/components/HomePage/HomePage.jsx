function HomePage({ isMenuOpen }) {
  return (
    <section className="flex justify-center place-items-center">
      <div
        className={`p-10 max-w-4xl  m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 cursor-default xs:m-0 ${
          !isMenuOpen && 'type1 button'
        }`}
      >
        <h2>Hey, welcome to my digital playground!</h2>
        <h1 className="my-10">I&apos;m Oleksandr Lysakov, but you can call me Olek</h1>

        <h2>
          I&apos;m a front-end developer who&apos;s all about creating awesome user experiences.
          Let&apos;s dive in!
        </h2>
      </div>
    </section>
  );
}
export default HomePage;
