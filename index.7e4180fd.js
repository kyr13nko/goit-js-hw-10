!function(){var e="https://api.thecatapi.com/v1/",n="live_RaeMB30o8cK53Xzit1qts2oGvZcNIVdIE0sizWn04kRLekmqPWyepiCjOddIuxxA";function t(t){return fetch("".concat(e,"images/").concat(t,"?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var c={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),info:document.querySelector(".cat-info")};c.select.addEventListener("change",(function(e){t(e.target.value).then((function(e){var n,t,o,r;t=(n=e).breeds,o=n.url,r='\n    <img src="'.concat(o,'" alt="').concat(t[0].name,'" width=300>\n    <h2>Breed: ').concat(t[0].name,"</h2>\n    <p>About: ").concat(t[0].description,"</p>\n    <p>Temperaments: ").concat(t[0].temperament,"</p>\n  "),c.info.insertAdjacentHTML("beforeend",r)})).catch(console.warn)})),fetch("".concat(e,"breeds?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var n;n=e.map((function(e){var n=e.reference_image_id,t=e.name;return'<option value="'.concat(n,'">').concat(t,"</option>")})).join(""),c.select.insertAdjacentHTML("beforeend",n)})).catch(console.warn)}();
//# sourceMappingURL=index.7e4180fd.js.map