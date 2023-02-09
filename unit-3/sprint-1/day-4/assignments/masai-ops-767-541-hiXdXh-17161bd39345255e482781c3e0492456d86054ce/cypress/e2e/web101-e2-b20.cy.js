import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.map(({ submission_link: url, id }) => {
  describe("Web-21 C1 Evaluation", () => {
    let acc_score = 0;
    if (url && url.trim().length) {
      acc_score += 1;
      it(`Top Part has display flex`, () => {
        cy.visit(url);
        cy.get(".top")
          .should("have.css", "display")
          .and("match", /flex/)
          .then(() => {
            acc_score += 2;
          });
      }); // 2
      it(`Check Top Left has h1,p,img`, () => {
        cy.get(".top-left")
          .children("h1")
          .then(() => {
            acc_score += 1 / 3;
          });
        cy.get(".top-left")
          .children("p")
          .then(() => {
            acc_score += 1 / 3;
          });
        cy.get(".top-left")
          .children("img")
          .then(() => {
            acc_score += 1 / 3;
          });
      }); // 1

      it(`Check Top-right Part`, () => {
        cy.get(".top-right")
          .children()
          .should("have.length", 3)
          .then(() => {
            acc_score += 1;
          });
      }); // 1

      it(`All child in Top-right has flex`, () => {
        cy.get(".top-right>div")
          .should("have.css", "display")
          .and("match", /flex/)
          .then(() => (acc_score += 1));
      }); // 1

      it(`mid-heading's h1 and p tags has text-align center`, () => {
        cy.get(".mid-heading>h1")
          .should("have.css", "text-align")
          .and("match", /center/)
          .then(() => (acc_score += 1));
      }); // 1

      it(`mid-container have 4 children inside`, () => {
        cy.get(".mid-container")
          .children()
          .should("have.length", 4)
          .then(() => (acc_score += 1));
      }); // 1

      it(`mid-container has display flex`, () => {
        cy.get(".mid-container")
          .should("have.css", "display")
          .and("match", /flex/)
          .then(() => (acc_score += 2));
      }); // 2
    }

    it(`generate score`, () => {
      //////////////
      let result = {
        id: id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
