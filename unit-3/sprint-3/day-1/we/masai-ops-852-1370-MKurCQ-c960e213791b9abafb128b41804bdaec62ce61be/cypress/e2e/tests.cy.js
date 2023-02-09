import "cypress-localstorage-commands";
import data from "../../submissionData.json";
// let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

/// <reference types="cypress" />

// let baseServerURL = Cypress.env("serverUrl");

import recipeData from "../fixtures/recipeData.json";
import patchedRecipe from "../fixtures/patchedRecipe.json";

let t = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImZpcnN0bmFtZSI6IkFkIiwibGFzdG5hbWUiOiJNaW5pc3RlciIsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRsTG01THA0MHVCUjlDVXJabjU4Q2RPbDh5dTVHcDJ1bUFPLjZseS52V2NaMGEwdlVLc0hpQyIsImF2YXRhciI6Imh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzL1FtZDNXNUR1aGdIaXJMSEdWaXhpNlY3NkxoQ2taVXo2cG5GdDVBSkJpeXZIeWUvYXZhdGFyLzc2Mi5qcGciLCJ1c2VyTGV2ZWwiOjQsImNyZWF0ZWRBdCI6MTY3MDE2NTk4MDYzOCwiaWF0IjoxNjcwNzI4ODg1LCJleHAiOjE2NzA3Mzk2ODV9.fFL7sflnhLs0C0cj4c8EgsTeJHu3Sh9u80cLFgMwPm0",
  user: {
    id: 1,
    username: "admin",
    firstname: "Ad",
    lastname: "Minister",
    email: "admin@mail.com",
    password: "$2b$10$lLm5Lp40uBR9CUrZn58CdOl8yu5Gp2umAO.6ly.vWcZ0a0vUKsHiC",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/762.jpg",
    userLevel: 4,
    createdAt: 1670165980638,
  },
}; 

data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    before(() => {
      // cy.setLocalStorage("userId", null);
      // cy.setLocalStorage("localAccessToken", null);
    });

    beforeEach(() => {
      // cy.restoreLocalStorage();
    });

    afterEach(() => {
      // cy.saveLocalStorage();
    });

    let numOfRecipes = recipeData.length;

    it("Able to login and display recipes", () => {
      cy.visit(url);
      cy.wait(1000);


      cy.get("#login-user-username").clear().type("admin");
      cy.get("#login-user-passowrd").clear().type("admin");
      cy.get("#login-user").click();

      cy.get("#fetch-recipes").click();

      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards).first().should("contain", recipeData[0].name);

      cy.get(cards)
        .eq(Math.ceil(numOfRecipes / 2))
        .should("contain", recipeData[Math.ceil(numOfRecipes / 2)].name);

      cy.get(cards)
        .last()
        .should("contain", recipeData[numOfRecipes - 1].name);

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("The list is not empty & sorted as expected", () => {
      const catCards = ".data-list-wrapper .card-list .card";

      cy.get("#sort-low-to-high").click();
      cy.wait(500);

      let arr = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-additional-info").text();
          arr.push(Number(currency.substring(3)));
        })
        .then(() => {
          console.log(arr, arr.length);
          const isSorted = arr.reduce(
            (n, item) => n !== false && item >= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#sort-high-to-low").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-additional-info").text();
          arr2.push(Number(currency.substring(3)));
        })
        .then(() => {
          console.log(arr2, arr2.length);
          const isSorted = arr2.reduce(
            (n, item) => n !== false && item <= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("The list is not empty & filtered as expected", () => {
      const catCards = ".data-list-wrapper .card-list .card";

      cy.get("#filter-less-than-50").click();
      cy.wait(500);

      let arr = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-additional-info").text();
          arr.push(Number(currency.substring(3)));
        })
        .then(() => {
          const isFiltered = arr.reduce(
            (n, item) => n !== false && item < 250 && item
          );
          expect(!!isFiltered).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });

      cy.get("#filter-more-than-equal-50").click();
      cy.wait(500);

      let arr2 = [];
      cy.get(catCards)
        .each(($el, index, $list) => {
          let currency = $el.find(".card-additional-info").text();
          arr2.push(Number(currency.substring(3)));
        })
        .then(() => {
          const isFiltered = arr2.reduce(
            (n, item) => n !== false && item >= 250 && item
          );
          expect(!!isFiltered).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1

    it("Able to populate edit inputs", () => {
      // cy.get("#login-user-username").clear().type("admin");
      // cy.get("#login-user-passowrd").clear().type("admin");
      // cy.get("#login-user").click();
      // cy.wait(500);

      // cy.get("#fetch-recipes").click();
      // cy.wait(500);

      cy.get("#fetch-recipes").click();
      const cards = ".data-list-wrapper .card-list .card";

      cy.get(cards)
        .should("have.length", numOfRecipes)
        .first()
        .find(".card-link")
        .click();

      cy.get("#edit-recipe-input-id").should("have.value", recipeData[0].id);

      // cy.get("#edit-recipe-input-price")
      //   .should('have.value', recipeData[0].price)

      cy.get(cards)
        .eq(Math.ceil(numOfRecipes / 2))
        .find(".card-link")
        .click();

      cy.get("#edit-recipe-input-id").should(
        "have.value",
        recipeData[Math.ceil(numOfRecipes / 2)].id
      );

      // cy.get("#edit-recipe-input-price")
      //   .should('have.value', recipeData[Math.ceil(numOfRecipes / 2)].price)

      cy.get(cards).last().find(".card-link").click();

      cy.get("#edit-recipe-input-id").should(
        "have.value",
        recipeData[numOfRecipes - 1].id
      );

      // cy.get("#edit-recipe-input-price")
      // .should('have.value', recipeData[numOfRecipes - 1].price)

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Able to edit the price", () => {
      const cards = ".data-list-wrapper .card-list .card";

      cy.intercept("PATCH", `**/recipes/**`, (req) => {
        req.reply({
          body: patchedRecipe,
        });
      }).as("patchRecipe");

      cy.get(cards).first().find(".card-link").click();

      cy.get("#edit-recipe-button").click();

      cy.wait("@patchRecipe").then((data) => {
        expect(data.response.statusCode).to.eq(200);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
