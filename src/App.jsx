import Card from "./components/Card";

function App() {
  return (
    <>
      <main>
        <Card />
      </main>
      <footer className="attribution max-w-[500px] m-auto text-[1rem] text-White absolute left-0 right-0 bottom-0 mb-2">
        Challenge by
        <a
          className="text-Cyan"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-Cyan ml-[2px]" href="#">
          Flavio Roman Goncalez
        </a>
        .
      </footer>
    </>
  );
}

export default App;
