import { Fragment } from "react";
import CatalogItem from "../components/catalog-item";

function MainPage() {
  const items = [
    [
      "Classical Mythology",
      "Mark P. O. Morford",
      "Oxford University Press",
      2002,
    ],
    ["Rules of the Wild", "Fransesca Marciano", "Random House Inc", 1998],
    ["Clara Callan", "Richard Bruce Wright", "HarperFlamingo Canada", 2001],
    ["Wild Animus", "Rich Saphero", "Too Far", 2004],
    ["Tager der Unschuld", "Richard North Patterson", "Goldmann", 2000],
    ["The Hellfire Club", "Peter Straub", "Random House Inc", 1996],
    [
      "The Night Listener",
      "Armistead Maupin",
      "HarperCollins Publishers",
      2000,
    ],
    ["Night Tales", "Nora Roberts", "Silhouette", 2000],
  ];

  return (
    <>
      <div className="container py-3">
        <h2 className="pb-2 mb-4 border-bottom">Our Books</h2>
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-sm-6 col-lg-4 mb-4 book">
                <CatalogItem items={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainPage;
