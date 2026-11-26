// ![alt](./pic.png "Caption") → <figure><img/><figcaption>Caption</figcaption></figure>
// Only rewrites paragraphs containing a single titled image.
export function rehypeFigureCaption() {
  const visit = node => {
    node.children?.forEach((child, i) => {
      const kids = child.children?.filter(
        c => !(c.type === "text" && !c.value.trim())
      );
      const img = kids?.length === 1 ? kids[0] : null;
      if (
        child.tagName === "p" &&
        img?.tagName === "img" &&
        img.properties?.title
      ) {
        const caption = String(img.properties.title);
        delete img.properties.title;
        node.children[i] = {
          type: "element",
          tagName: "figure",
          properties: {},
          children: [
            img,
            {
              type: "element",
              tagName: "figcaption",
              properties: {},
              children: [{ type: "text", value: caption }],
            },
          ],
        };
      } else {
        visit(child);
      }
    });
  };
  return visit;
}
