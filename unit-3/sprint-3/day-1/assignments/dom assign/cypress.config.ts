import { defineConfig } from "cypress";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("after:spec", (spec, results) => {
        fs.writeFileSync(
          "after_spec_results.json",
          JSON.stringify(results.tests)
        );
      });
    },
  },
  env: {
    serverUrl: `http://127.0.0.1:${process.env.REACT_APP_JSON_SERVER_PORT}`, 
  }
});
