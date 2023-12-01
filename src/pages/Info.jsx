import { Suspense, lazy, useEffect, useState } from "react";
const AnimatedCardTitle = lazy(() => import("../components/AnimatedCardTitle"));

function Info() {
  const categories = [
    {
      title: "kuliner",
      url: "./src/assets/images/DJI_0594.JPG",
    },
    {
      title: "budaya",
      url: "./src/assets/images/DJI_0461.JPG",
    },
    {
      title: "wisata",
      url: "./src/assets/images/DJI_0437.JPG",
    },
    {
      title: "sejarah",
      url: "./src/assets/images/DJI_0561.JPG",
    },
    {
      title: "informasi",
      url: "./src/assets/images/DJI_0496.JPG",
    },
  ];

  const [inViewIDs, setInViewIDs] = useState([categories[0].title]);

  const onScroll = () => {
    const inView = categories
      .map((category) => {
        const div = document.getElementById(category.title);
        const rect = div.getBoundingClientRect();
        const tempYPos = rect.top;

        if (tempYPos > -50 && tempYPos < 50) {
          return {
            title: category.title,
            yPostition: tempYPos,
          };
        }
      })
      .filter((item) => item !== undefined)
      .map((item) => item.title);

    setInViewIDs(inView);
  };

  useEffect(() => {
    console.log(inViewIDs);
  }, [inViewIDs]);

  return (
    <div
      id="info"
      className="max-w h-screen"
      onScroll={onScroll}
      style={{
        scrollSnapType: "y mandatory",
        overflow: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {categories.length > 0 &&
        categories.map((category) => (
          <div key={category.title} id={category.title}>
            <Suspense fallback={"loading...\n"}>
              <AnimatedCardTitle title={category.title} url={category.url} inViewIDs={inViewIDs}/>
            </Suspense>
          </div>
        ))}
    </div>
  );
}

export default Info;
