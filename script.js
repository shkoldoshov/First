const accordionData = [
  {
    title: "first",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate est quas, obcaecati reprehenderit sed, ea quis aliquid eligendi, unde doloremque provident perspiciatisvoluptatem voluptatum expedita dolor dolorum velit ab?",
  },
  {
    title: "second",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate est quas, obcaecati reprehenderit sed, ea quis aliquid eligendi, unde doloremque provident perspiciatisvoluptatem voluptatum expedita dolor dolorum velit ab?",
  },
  {
    title: "third",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate est quas, obcaecati reprehenderit sed, ea quis aliquid eligendi, unde doloremque provident perspiciatisvoluptatem voluptatum expedita dolor dolorum velit ab?",
  },
];
const accordion = document.querySelector(".accordion");

const renderAccordion = () => {
  accordionData.forEach((el, indexP) => {
    const accordionWrap = document.createElement("div");
    const accordionName = document.createElement("div");
    const title = document.createElement("p");
    const plus = document.createElement("img");
    const accordionContent = document.createElement("div");
    const info = document.createElement("p");

    info.textContent = el.info;
    title.textContent = el.title;
    plus.src = "./plus.png";

    accordionWrap.className = "accodion__wrap";
    accordionName.className = "accordion__name";
    accordionContent.className = "accordion__content";
    plus.className = "plus";
    accordionName.addEventListener("click", () => {
      accordionWrap.classList.toggle("accordion__active");
      const accordionNames = document.querySelectorAll(".accordion__name");
      accordionNames.forEach((el, index) => {
        if (index === indexP) {
          console.log(el, "this");
        } else {
          console.log(el, "others");
        }
      });
    });
    accordionName.append(title, plus);
    accordionContent.append(info);
    accordionWrap.append(accordionName, accordionContent);
    accordion.append(accordionWrap);
  });
};
renderAccordion();


