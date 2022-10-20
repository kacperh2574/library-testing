it("Should open phptravels", () => {
  // cypress checks if phptravels.com website is avaible
  cy.visit("https://phptravels.com/demo/");

  // cypress checks if there is a <strong> with specific text content on the website
  cy.get("strong").contains("Demo Credentials for Frontend and Backend");

  // cypress checks if there is a <a> link referring to the newsletter
  cy.get("a[href='javascript:void(0)']");

  // cypress fills in the newsletter <input>
  cy.get("input[name='email']").should("be.visible").type("name@example.com");

  // cypress clicks submit button
  cy.get("button[onclick='subscribe_click()']").click();

  // cypress checks if at link <a> is visible <span> informing about the employment
  cy.get("span").contains("WE ARE HIRING!").should("be.visible");
})