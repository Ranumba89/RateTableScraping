// const puppeteer = require("puppeteer");
const crawler = require("crawler-request");

// async function scrapeProduct(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.goto(url);
//   console.log("Navigating to page...");
//   const [el] = await page.waitForSelector(
//     ".../xpath//html/body/div/main/div/section/div/div[2]/section/div/div[2]/div[2]/div/div/div/div/table/tbody/tr[1]/td[2]/a"
//   );
//   // const href = await el.getProperty('src')
//   // const srcTxt = await href.jsonValue();

//   // console.log({srcTxt});

//   browser.close();
// }


crawler("https://www.sagaftra.org/files/20202023TVWages_Year3WageDiversion.pdf").then(function(response){
    // handle response
    console.log(response.text);
});

// sagURL.promise.then(
//   function (pdf) {
//     console.log("PDF loaded");

//     // Fetch the first page
//     var pageNumber = 1;
//     pdf.getPage(pageNumber).then(function (page) {
//       console.log("Page loaded");

//       var scale = 1.5;
//       var viewport = page.getViewport({ scale: scale });

//       // Prepare canvas using PDF page dimensions
//       var canvas = document.getElementById("the-canvas");
//       var context = canvas.getContext("2d");
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       // Render PDF page into canvas context
//       var renderContext = {
//         canvasContext: context,
//         viewport: viewport,
//       };
//       var renderTask = page.render(renderContext);
//       renderTask.promise.then(function () {
//         console.log("Page rendered");
//       });
//     });
//   },
//   function (reason) {
//     // PDF loading error
//     console.error(reason);
//   }
// );

// scrapeProduct(
//   "https://www.sagaftra.org/production-center/contract/812/rate-sheet/document"
// );
