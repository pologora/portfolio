function HomePage() {
  return (
    <section className="place-items-center" id="home">
      <div className="container home z-[-10] relative h-full">
        <h2 className="text-text_secondary">Hey, welcome to my digital playground!</h2>
        <h1 className="my-10 text-text_main">
          I&apos;m Oleksandr Lysakov, but you can call me
          {' '}
          <span className="text-home">Olek</span>
        </h1>

        <h2 className="text-text_secondary">
          I&apos;m a front-end developer who&apos;s all about creating awesome user experiences.
          Let&apos;s dive in!
        </h2>
      </div>
    </section>
  );
}
export default HomePage;
