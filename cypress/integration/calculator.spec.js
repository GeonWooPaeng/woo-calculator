// https://365kim.tistory.com/74

describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/woocourse-alone/6_calculator/");
  });

  it("999 + 999", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("+").click();

    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("=").click();
    cy.get("#total").should("have.text", "1998");
  });

  it("999 - 999", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("-").click();

    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("=").click();
    cy.get("#total").should("have.text", "0");
  });

  it("999 x 999", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("X").click();

    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("=").click();
    cy.get("#total").should("have.text", "998001");
  });

  it("999 / 999", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("/").click();

    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("=").click();
    cy.get("#total").should("have.text", "1");
  });

  it("AC Button, 999 -> 0", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".modifiers").click();

    cy.get("#total").should("have.text", "0");
  });
});

// --------------------- clone coding -------------

// describe("calculator", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:5500/");
//   });

//   it("?????? ????????? ????????? ?????? ?????? ?????????????????? ????????? ??????????????? ????????? ??????.", () => {
//     cy.get("#total").then((display) => {
//       const displayText = display.text();

//       cy.get(".digits").contains("1").click();
//       cy.get("#total").should("have.text", "1");
//     });
//   });

//   it("?????? ?????? ?????? ??? ???????????? ???????????? ?????? ?????? ?????????????????? ????????? ??????????????? ?????????", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("1").click();
//       cy.get("operations").contains("/").click();
//       cy.get("#total").should("have.text", "1/");
//     });
//   });

//   it("????????? ????????? ????????? ??????????????? ?????? ?????? ???????????? ??????.", () => {
//     const stub = cy.stub();

//     cy.on("window:alert", stub);

//     cy.get("#total").then(() => {
//       for (let i = 0; i < 3; i++) {
//         cy.get(".digits").contains("1").click();
//       }
//       cy.get(".digits")
//         .contains("1")
//         .click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith(
//             "????????? ??? ??????????????? ?????? ???????????????."
//           );
//         });
//       cy.get(".operations").contains("/").click();
//       for (let i = 0; i < 3; i++) {
//         cy.get(".digits").contains("1").click();
//       }
//       cy.get(".digits")
//         .contains("1")
//         .click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith(
//             "????????? ?????????????????? ?????? ???????????????."
//           );
//         });
//       cy.get("#total").should("have.text", "111/111");
//     });
//   });

//   it("?????? display??? ????????? ???????????? ????????? ?????? ???????????? ???????????? ???????????? ?????? ?????????????????? ??????", () => {
//     const stub = cy.stub();

//     cy.on("window:alert", stub);
//     cy.get("#total").then(() => {
//       cy.get(".operations")
//         .contains("/")
//         .click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith(
//             "????????? ?????? ????????? ??? ???????????? ??????????????????"
//           );
//         });

//       cy.on("window:alert", stub);
//       cy.get(".digits").contains("1").click();
//       cy.get(".operations").contains("/").click();
//       cy.get(".operations")
//         .contains("/")
//         .click()
//         .then(() => {
//           expect(stub.getCall(0)).to.be.calledWith(
//             "????????? ?????? ????????? ??? ???????????? ??????????????????!"
//           );
//         });
//     });
//   });

//   it("?????? ?????? 999 + 999??? ???????????? 1998??? ???????????? ??????", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("+").click();

//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("=").click();

//       cy.get("#total").should("have.text", "1998");
//     });
//   });

//   it("?????? ?????? 999 - 1??? ?????? ?????? 998??? ???????????? ????????????.", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("-").click();

//       cy.get(".digits").contains("1").click();

//       cy.get(".operations").contains("="), click();

//       cy.get("#total").should("have.text", "998");
//     });
//   });

//   it("?????? ?????? 999 * 999??? ???????????? 998001??? ???????????? ??????", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("X").click();

//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("=").click();

//       cy.get("#total").should("have.text", "998001");
//     });
//   });

//   it("????????? ?????? 999 / 9??? ?????? ?????? 111??? ???????????? ????????????.", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("/").click();

//       cy.get(".digits").contains("9").click();

//       cy.get(".operations").contains("="), click();

//       cy.get("#total").should("have.text", "111");
//     });
//   });

//   it("AC?????? ????????? ???????????????????????? ?????? 0?????? ?????????????????? ????????????.", () => {
//     cy.get("#total").then(() => {
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".digits").contains("9").click();
//       cy.get(".operations").contains("/").click();
//       cy.get(".digits").contains("5").click();
//       cy.get(".modifier").click();

//       cy.get("#total").should("have.text", "0");
//     });
//   });
// });
