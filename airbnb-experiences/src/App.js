//Once we spread the data using the ES6 spread method {...item} then we do not require to pass the .item property after using each of the props in the component.

import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return(
      <Card
      key = {item.id}
      {...item}
      />
    )
  })
  return (
        <main className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </main>
  );
}