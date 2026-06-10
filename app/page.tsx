export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <section className="flex max-w-2xl flex-col items-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            OmniaCom
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Construisez votre application ici.
          </p>
        </section>
      </main>
    </div>
  );
}
